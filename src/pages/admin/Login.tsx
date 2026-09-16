import { useState, type FormEvent } from "react"
import { Navigate, useLocation, type Location } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useAdminAuth } from "../../context/AdminAuth"
import { isSupabaseConfigured } from "../../lib/supabase"
import { useSeo } from "../../lib/useSeo"

export default function AdminLogin() {
  const { session, loading, signIn } = useAdminAuth()
  const location = useLocation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  useSeo("Admin Login", "", "/admin/login", { standaloneTitle: false, noindex: true })

  const from = (location.state as { from?: Location })?.from?.pathname || "/admin"

  if (!loading && session) return <Navigate to={from} replace />

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    const { error: signInError } = await signIn(email, password)
    setSubmitting(false)
    if (signInError) setError(signInError)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-extrabold uppercase tracking-tight">Strategy Innovations Consultancy PLC</span>
          <span className="mt-1 text-xs font-semibold text-indigo-300">News Admin</span>
        </div>

        {!isSupabaseConfigured && (
          <p className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-center text-sm text-amber-200">
            Supabase isn't configured yet. Set <code>VITE_SUPABASE_URL</code> and{" "}
            <code>VITE_SUPABASE_ANON_KEY</code> in <code>.env.local</code>.
          </p>
        )}

        <form onSubmit={submit} className="mt-8 flex flex-col gap-4" noValidate>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-white/70">Email</span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition-shadow placeholder:text-white/30 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-white/70">Password</span>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition-shadow placeholder:text-white/30 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
            />
          </label>

          {error && <p className="text-sm text-rose-300">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="group press shine mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all enabled:hover:-translate-y-0.5 enabled:hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Signing in…" : "Sign In"}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  )
}
