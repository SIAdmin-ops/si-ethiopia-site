import { useState, type FormEvent } from "react"
import { useAdminAuth } from "../context/AdminAuth"

export default function MfaChallenge() {
  const { verifyMfa, signOut } = useAdminAuth()
  const [code, setCode] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setBusy(true)
    const { error: err } = await verifyMfa(code)
    setBusy(false)
    if (err) setError(err)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
      <form onSubmit={submit} className="w-full max-w-sm" noValidate>
        <h1 className="text-center text-xl font-bold">Two-step verification</h1>
        <p className="mt-2 text-center text-sm text-white/80">
          Enter the 6-digit code from your authenticator app.
        </p>
        <label className="mt-6 flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-white/80">Authentication code</span>
          <input
            inputMode="numeric"
            autoComplete="one-time-code"
            autoFocus
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/[0.06] px-4 py-3 text-center text-lg tracking-[0.4em] text-white outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30"
          />
        </label>
        {error && (
          <p role="alert" className="mt-3 text-sm text-error">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={busy}
          className="mt-5 w-full rounded-lg bg-gold px-6 py-3.5 text-[15px] font-bold uppercase tracking-wide text-basalt disabled:opacity-50"
        >
          {busy ? "Verifying…" : "Verify"}
        </button>
        <button
          type="button"
          onClick={() => void signOut()}
          className="mt-3 w-full text-sm font-semibold text-sky underline-offset-4 hover:underline"
        >
          Sign out
        </button>
      </form>
    </div>
  )
}
