import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAdminAuth } from "../context/AdminAuth"
import { isSupabaseConfigured } from "../lib/supabase"
import MfaChallenge from "./MfaChallenge"

export default function RequireAdminAuth() {
  const { session, loading, needsMfa } = useAdminAuth()
  const location = useLocation()

  if (!isSupabaseConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-center text-white">
        <div className="max-w-md">
          <h1 className="text-[28px] leading-[36px] font-bold sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px]">Admin not configured</h1>
          <p className="mt-3 text-sm text-white/70">
            Set <code className="text-teal-300">VITE_SUPABASE_URL</code> and{" "}
            <code className="text-teal-300">VITE_SUPABASE_ANON_KEY</code> in{" "}
            <code className="text-teal-300">.env.local</code>, then restart the dev server.
          </p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white/60">
        Loading…
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />
  }

  if (needsMfa) return <MfaChallenge />

  return <Outlet />
}
