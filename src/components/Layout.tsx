import { Outlet } from "react-router-dom"
import { ScrollProgress } from "../lib/motion"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
