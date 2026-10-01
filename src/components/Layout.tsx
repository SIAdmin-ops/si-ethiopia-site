import { Outlet, useLocation } from "react-router-dom"
import { ScrollProgress } from "../lib/motion"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      {/* Header is `fixed` (so the homepage hero can run full-bleed behind
          it), so every page reserves its height here instead; Home's hero
          cancels this out with a matching negative margin to sit behind it. */}
      <main className="pt-[68px]">
        {/* Keyed by pathname so React remounts (not just updates) on route
            change, replaying the .page-enter animation every navigation. */}
        <div key={pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
