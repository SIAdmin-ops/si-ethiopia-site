import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import type { Session } from "@supabase/supabase-js"
import { isSupabaseConfigured, supabase } from "../lib/supabase"
import {
  GENERIC_SIGN_IN_ERROR,
  IDLE_TIMEOUT_MS,
  LoginThrottle,
  isIdleTimedOut,
  normalizeTotpCode,
} from "../lib/authSecurity"

type Ctx = {
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  /** True when the account has an authenticator app enrolled but this session hasn't passed the code check yet. */
  needsMfa: boolean
  verifyMfa: (code: string) => Promise<{ error: string | null }>
  refreshMfa: () => Promise<void>
}

const AdminAuthContext = createContext<Ctx | null>(null)

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [needsMfa, setNeedsMfa] = useState(false)
  const throttle = useRef(new LoginThrottle())
  const lastActivity = useRef(Date.now())

  const refreshMfa = useCallback(async () => {
    const { data } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    setNeedsMfa(Boolean(data && data.currentLevel === "aal1" && data.nextLevel === "aal2"))
  }, [])

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false)
      return
    }
    supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session)
      if (data.session) await refreshMfa()
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next)
      if (!next) setNeedsMfa(false)
    })
    return () => sub.subscription.unsubscribe()
  }, [refreshMfa])

  /* Sign out after 30 minutes without interaction. */
  useEffect(() => {
    if (!session) return
    lastActivity.current = Date.now()
    const touch = () => {
      lastActivity.current = Date.now()
    }
    const events = ["pointerdown", "keydown", "scroll"] as const
    events.forEach((e) => window.addEventListener(e, touch, { passive: true }))
    const timer = window.setInterval(() => {
      if (isIdleTimedOut(lastActivity.current, Date.now(), IDLE_TIMEOUT_MS)) {
        void supabase.auth.signOut()
      }
    }, 30_000)
    return () => {
      events.forEach((e) => window.removeEventListener(e, touch))
      window.clearInterval(timer)
    }
  }, [session])

  const signIn: Ctx["signIn"] = async (email, password) => {
    const locked = throttle.current.remainingLockSeconds()
    if (locked > 0) return { error: `Too many attempts. Try again in ${locked} seconds.` }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      throttle.current.recordFailure()
      return { error: GENERIC_SIGN_IN_ERROR }
    }
    throttle.current.recordSuccess()
    await refreshMfa()
    return { error: null }
  }

  const verifyMfa: Ctx["verifyMfa"] = async (raw) => {
    const code = normalizeTotpCode(raw)
    if (!code) return { error: "Enter the 6-digit code from your authenticator app." }
    const { data: factors, error: listError } = await supabase.auth.mfa.listFactors()
    const factor = factors?.totp?.[0]
    if (listError || !factor) return { error: "Could not verify the code. Try again." }
    const { error } = await supabase.auth.mfa.challengeAndVerify({ factorId: factor.id, code })
    if (error) return { error: "That code didn't work. Try again." }
    await refreshMfa()
    return { error: null }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AdminAuthContext.Provider value={{ session, loading, signIn, signOut, needsMfa, verifyMfa, refreshMfa }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider")
  return ctx
}
