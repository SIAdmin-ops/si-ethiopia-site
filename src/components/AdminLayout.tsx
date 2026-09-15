import { Link, Outlet } from "react-router-dom"
import { LogOut } from "lucide-react"
import { useAdminAuth } from "../context/AdminAuth"

export default function AdminLayout() {
  const { signOut } = useAdminAuth()

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link to="/admin" className="flex flex-col leading-none">
            <span className="text-sm font-extrabold uppercase tracking-tight text-slate-900">
              Strategy Innovations Consultancy PLC
            </span>
            <span className="text-xs font-semibold text-indigo-600">News Admin</span>
          </Link>
          <button
            onClick={() => void signOut()}
            className="press flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <LogOut className="size-4" />
            Sign out
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-10">
        <Outlet />
      </main>
    </div>
  )
}
