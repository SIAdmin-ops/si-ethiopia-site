import { useState, useEffect, type CSSProperties } from "react"
import { ArrowUpRight, Menu, X, ChevronDown, Landmark, Cpu, GraduationCap } from "lucide-react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { wrap } from "../lib/motion"
import { useI18n } from "../i18n"
import LangToggle from "./LangToggle"

/** The three service divisions grouped under a "Services" dropdown in the nav.
    Icons and routes are positionally matched to `t.nav[0..2]`. */
const DIVISIONS = [
  { path: "/capital-markets", icon: Landmark },
  { path: "/technology", icon: Cpu },
  { path: "/training", icon: GraduationCap },
]

/** Remaining flat nav destinations, positionally matched to `t.nav[3..4]`. */
const OTHER_ROUTES = ["/about", "/contact"]

/** Routes whose own hero runs full-bleed immediately under the header (a
    photo, video, or dark gradient), so the header can start transparent and
    glassed over it. Contact opens on a plain white section instead, so its
    header stays solid from the start. */
const OVERLAY_ROUTES = [
  "/",
  "/capital-markets",
  "/technology",
  "/training",
  "/about",
  "/financial-literacy",
]

/** Header accent per page, applied as CSS variables so every `[var(--brand)]`
    class below repaints instantly on navigation matches each division's own
    brand colour (Capital Markets' amber, Technology's deeper teal,
    Training's blue); everything else keeps the site's default teal. */
const DEFAULT_THEME = { accent: "#198388", hover: "#156a6e", tint: "#effafb", ring: "#d0f1f3" }
const PAGE_THEMES: Record<string, typeof DEFAULT_THEME> = {
  "/capital-markets": { accent: "#c49610", hover: "#9e780d", tint: "#fffcf0", ring: "#fff6d6" },
  "/technology": { accent: "#156a6e", hover: "#115457", tint: "#effafb", ring: "#d0f1f3" },
  "/training": { accent: "#1d4ed8", hover: "#1e40af", tint: "#eff6ff", ring: "#dbeafe" },
  "/financial-literacy": { accent: "#1d4ed8", hover: "#1e40af", tint: "#eff6ff", ring: "#dbeafe" },
}

export default function Header() {
  const { t } = useI18n()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [divisionsOpenMobile, setDivisionsOpenMobile] = useState(false)

  const onADivisionRoute = DIVISIONS.some((d) => d.path === location.pathname)
  const theme = PAGE_THEMES[location.pathname] ?? DEFAULT_THEME
  const themeVars = {
    "--brand": theme.accent,
    "--brand-hover": theme.hover,
    "--brand-tint": theme.tint,
    "--brand-ring": theme.ring,
  } as CSSProperties

  /* Pages that open on a full-bleed hero get a header that starts
     transparent and glassed-over it, then crossfades to a solid blurred
     bar once the hero scrolls away. */
  const overlay = OVERLAY_ROUTES.includes(location.pathname) && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:transition-transform after:duration-300 ${
      overlay
        ? `text-white after:bg-white hover:bg-white/10 ${isActive ? "after:scale-x-100" : "text-white/80 after:scale-x-0"}`
        : `hover:text-[var(--brand)] after:bg-[var(--brand)] hover:after:scale-x-100 ${
            isActive ? "text-[var(--brand)] after:scale-x-100" : "text-slate-600 after:scale-x-0 hover:bg-slate-50"
          }`
    }`

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-xl px-4 py-3.5 text-base font-semibold transition-colors hover:bg-[var(--brand-tint)] hover:text-[var(--brand)] ${
      isActive ? "bg-[var(--brand-tint)] text-[var(--brand)]" : "text-slate-700"
    }`

  return (
    <header
      style={themeVars}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        overlay
          ? "border-transparent bg-transparent"
          : scrolled
            ? "border-slate-200/80 bg-white/80 shadow-sm shadow-slate-900/5 backdrop-blur-xl"
            : "border-transparent bg-white"
      }`}
    >
      <div className={`${wrap} flex h-[68px] items-center justify-between`}>
        <Link to="/" className="group flex items-center gap-3 sm:gap-4">
          <span
            className={`grid size-9 place-items-center rounded-lg ring-1 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105 ${
              overlay ? "text-white ring-white/30" : "text-[var(--brand)] ring-[var(--brand-ring)]"
            }`}
          >
            <ArrowUpRight className="size-5" strokeWidth={2.4} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-[19px] font-extrabold uppercase tracking-tight transition-colors duration-500 ${
                overlay ? "text-white" : "text-slate-900"
              }`}
            >
              Strategy
            </span>
            <span
              className={`font-display text-[13px] font-light uppercase tracking-wide transition-colors duration-500 ${
                overlay ? "text-teal-200" : "text-[var(--brand)]"
              }`}
            >
              Innovation
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Divisions opens on hover (and on keyboard focus via focus-within) */}
          <div className="group/divisions relative">
            <button
              type="button"
              aria-haspopup="true"
              className={`relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:transition-transform after:duration-300 ${
                overlay
                  ? `text-white after:bg-white group-hover/divisions:bg-white/10 ${onADivisionRoute ? "after:scale-x-100" : "text-white/80 after:scale-x-0"}`
                  : `after:bg-[var(--brand)] group-hover/divisions:text-[var(--brand)] group-hover/divisions:after:scale-x-100 ${
                      onADivisionRoute
                        ? "text-[var(--brand)] after:scale-x-100"
                        : "text-slate-600 after:scale-x-0 hover:bg-slate-50"
                    }`
              }`}
            >
              {t.navDivisions}
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover/divisions:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-[250ms] ease-out group-hover/divisions:visible group-hover/divisions:opacity-100 group-focus-within/divisions:visible group-focus-within/divisions:opacity-100">
              <div className="grid origin-top translate-y-1 scale-[0.97] grid-cols-3 gap-1 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10 transition-all duration-[250ms] ease-out group-hover/divisions:translate-y-0 group-hover/divisions:scale-100 group-focus-within/divisions:translate-y-0 group-focus-within/divisions:scale-100">
                {DIVISIONS.map((d, i) => {
                  const Icon = d.icon
                  const accent = (PAGE_THEMES[d.path] ?? DEFAULT_THEME).accent
                  return (
                    <NavLink
                      key={d.path}
                      to={d.path}
                      className={({ isActive }) =>
                        `group/item relative flex flex-col gap-3 overflow-hidden rounded-xl p-4 transition-colors hover:bg-slate-50 ${
                          isActive ? "bg-slate-50" : ""
                        }`
                      }
                    >
                      <span
                        aria-hidden
                        className="absolute inset-x-4 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover/item:scale-x-100"
                        style={{ backgroundColor: accent }}
                      />
                      <span
                        className="grid size-10 shrink-0 place-items-center rounded-xl transition-all duration-200 group-hover/item:-translate-y-0.5 group-hover/item:scale-105"
                        style={{ backgroundColor: `${accent}1a`, color: accent }}
                      >
                        <Icon className="size-[18px]" strokeWidth={2} />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-slate-900">{t.nav[i]}</span>
                        <span className="mt-1 block text-xs leading-snug text-slate-500">
                          {t.home.divisions.items[i]?.tagline}
                        </span>
                      </span>
                    </NavLink>
                  )
                })}
              </div>
            </div>
          </div>

          {OTHER_ROUTES.map((route, i) => (
            <NavLink key={route} to={route} className={navLinkClass}>
              {t.nav[i + 3]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle className="hidden sm:inline-flex" />
          <Link
            to="/contact"
            className="press shine hidden rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--brand)]/20 transition-all hover:-translate-y-0.5 hover:bg-[var(--brand-hover)] hover:shadow-xl hover:shadow-[var(--brand)]/30 sm:inline-block"
          >
            {t.navCta}
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`press grid size-10 place-items-center rounded-lg ring-1 transition-colors lg:hidden ${
              overlay
                ? "text-white ring-white/30 hover:bg-white/10"
                : "text-slate-700 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* mobile nav: full-height slide-in panel over a blurred backdrop,
          rather than pushing page content down under the header. */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[70] bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-slate-100 px-5">
          <span className="font-display text-sm font-bold uppercase tracking-[3px] text-slate-900">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="press grid size-10 place-items-center rounded-lg text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-5">
          {/* Divisions tap to expand/collapse */}
          <button
            type="button"
            aria-expanded={divisionsOpenMobile}
            onClick={() => setDivisionsOpenMobile((v) => !v)}
            className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors hover:bg-[var(--brand-tint)] hover:text-[var(--brand)] ${
              onADivisionRoute ? "text-[var(--brand)]" : "text-slate-700"
            }`}
          >
            {t.navDivisions}
            <ChevronDown
              className={`size-4 transition-transform duration-200 ${divisionsOpenMobile ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${
              divisionsOpenMobile ? "max-h-60" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-1 py-1 pl-4">
              {DIVISIONS.map((d, i) => {
                const Icon = d.icon
                return (
                  <NavLink
                    key={d.path}
                    to={d.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors hover:bg-[var(--brand-tint)] hover:text-[var(--brand)] ${
                        isActive ? "bg-[var(--brand-tint)] text-[var(--brand)]" : "text-slate-600"
                      }`
                    }
                  >
                    <Icon className="size-4 shrink-0" strokeWidth={2} />
                    {t.nav[i]}
                  </NavLink>
                )
              })}
            </div>
          </div>

          {OTHER_ROUTES.map((route, i) => (
            <NavLink
              key={route}
              to={route}
              onClick={() => setOpen(false)}
              className={mobileNavLinkClass}
            >
              {t.nav[i + 3]}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 flex-col gap-3 border-t border-slate-100 px-5 py-5">
          <LangToggle />
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="press shine rounded-lg bg-[var(--brand)] px-4 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-[var(--brand)]/20"
          >
            {t.navCta}
          </Link>
        </div>
      </div>
    </header>
  )
}
