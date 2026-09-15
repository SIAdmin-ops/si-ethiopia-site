import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/** Resets scroll position on route change; skips when a #hash is present so
    same-page anchors (e.g. Home's #approach) still resolve normally. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
