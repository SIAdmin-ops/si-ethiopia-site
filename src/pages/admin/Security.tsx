import { useCallback, useEffect, useState, type FormEvent } from "react"
import { supabase } from "../../lib/supabase"
import { normalizeTotpCode } from "../../lib/authSecurity"
import { useSeo } from "../../lib/useSeo"

type Enrolment = { factorId: string; qr: string; secret: string }

export default function AdminSecurity() {
  useSeo("Admin Security", "", "/admin/security", { standaloneTitle: false, noindex: true })
  const [verified, setVerified] = useState<{ id: string }[] | null>(null)
  const [enrolment, setEnrolment] = useState<Enrolment | null>(null)
  const [code, setCode] = useState("")
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    const { data, error: err } = await supabase.auth.mfa.listFactors()
    if (err) setError("Could not load your security settings.")
    else setVerified((data?.totp ?? []).map((f) => ({ id: f.id })))
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const start = async () => {
    setError(null)
    setMessage(null)
    const { data, error: err } = await supabase.auth.mfa.enroll({ factorType: "totp", friendlyName: "Authenticator app" })
    if (err || !data) return setError("Could not start enrolment. Try again.")
    setEnrolment({ factorId: data.id, qr: data.totp.qr_code, secret: data.totp.secret })
  }

  const confirm = async (e: FormEvent) => {
    e.preventDefault()
    if (!enrolment) return
    const clean = normalizeTotpCode(code)
    if (!clean) return setError("Enter the 6-digit code from your authenticator app.")
    const { error: err } = await supabase.auth.mfa.challengeAndVerify({ factorId: enrolment.factorId, code: clean })
    if (err) return setError("That code didn't work. Try again.")
    setEnrolment(null)
    setCode("")
    setError(null)
    setMessage("Two-step verification is on. You will be asked for a code each time you sign in.")
    void load()
  }

  const remove = async (id: string) => {
    if (!window.confirm("Turn off two-step verification for your account?")) return
    const { error: err } = await supabase.auth.mfa.unenroll({ factorId: id })
    if (err) return setError("Could not remove it. Sign in again with your code and retry.")
    setMessage("Two-step verification is off.")
    void load()
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold">Security</h1>
      <p className="mt-2 text-sm text-slate-600">
        Protect your admin account with a code from an authenticator app (Google Authenticator, Microsoft
        Authenticator, 1Password, etc.).
      </p>

      {message && (
        <p role="status" className="mt-4 rounded-lg bg-green-tint p-3 text-sm text-green">
          {message}
        </p>
      )}
      {error && (
        <p role="alert" className="mt-4 text-sm text-error">
          {error}
        </p>
      )}

      {verified === null ? (
        <p className="mt-6 text-sm text-slate-600">Loading…</p>
      ) : verified.length > 0 ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-semibold">Two-step verification is on.</p>
          {verified.map((f) => (
            <button
              key={f.id}
              onClick={() => void remove(f.id)}
              className="mt-3 text-sm font-semibold text-error underline-offset-4 hover:underline"
            >
              Turn off
            </button>
          ))}
        </div>
      ) : enrolment ? (
        <form onSubmit={confirm} className="mt-6 rounded-2xl border border-slate-200 bg-white p-5" noValidate>
          <p className="text-sm">Scan this QR code with your authenticator app, then enter the 6-digit code it shows.</p>
          <img src={enrolment.qr} alt="QR code for your authenticator app" className="mt-4 size-44" />
          <p className="mt-2 break-all text-xs text-slate-600">
            Can&apos;t scan? Enter this key manually: <code>{enrolment.secret}</code>
          </p>
          <label className="mt-4 flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-slate-600">Authentication code</span>
            <input
              inputMode="numeric"
              autoComplete="one-time-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-48 rounded-lg border border-slate-200 px-4 py-3 text-lg tracking-[0.3em]"
            />
          </label>
          <button type="submit" className="mt-4 rounded-lg bg-green px-5 py-3 text-[15px] font-bold text-white">
            Confirm
          </button>
        </form>
      ) : (
        <button
          onClick={() => void start()}
          className="mt-6 rounded-lg bg-green px-5 py-3 text-[15px] font-bold text-white"
        >
          Set up two-step verification
        </button>
      )}
    </div>
  )
}
