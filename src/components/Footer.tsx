import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"

/** Primary nav destinations, positionally matched to `t.nav`. */
const NAV_ROUTES = ["/capital-markets", "/technology", "/training", "/about", "/contact"]

/** The footer as the site's closing statement rather than an afterthought:
    a large restatement of the brand tagline leads, followed by the nav and
    legal band. Same content as before (`t.footer`, `t.nav`, `t.navCta`) —
    just given the room to read as a final chapter instead of two thin rows. */
export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(60% 70% at 15% 0%, rgba(25,131,136,0.22) 0%, transparent 55%), radial-gradient(45% 60% at 100% 100%, rgba(255,205,66,0.12) 0%, transparent 50%)",
        }}
      />

      <div className={`${wrap} relative py-20 sm:py-28`}>
        <Reveal className="flex items-center gap-3">
          <img
            src="/Strategy_Innovations_Logo.png"
            alt="Strategy Innovations Consultancy"
            className="h-9 w-auto brightness-0 invert"
          />
          <span className="font-display text-sm font-bold uppercase tracking-[3px] text-white/70">
            Strategy Innovations Consultancy PLC
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={60}
          className="mt-8 max-w-3xl font-display text-[32px] font-extrabold leading-[1.15] tracking-tight sm:text-[48px] lg:text-[56px]"
        >
          {t.footer.tagline}
        </Reveal>

        <Reveal delay={120}>
          <Link
            to="/contact"
            className="group press shine mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-slate-900 transition-all hover:-translate-y-0.5"
          >
            {t.navCta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal
          delay={160}
          className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 sm:mt-20 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
        >
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {t.nav.map((l, i) => (
              <Link
                key={NAV_ROUTES[i]}
                to={NAV_ROUTES[i]}
                className="text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                {l}
              </Link>
            ))}
          </nav>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10">
        <div
          className={`${wrap} flex flex-col gap-1 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between`}
        >
          <span>{t.footer.rights}</span>
          <span className="flex items-center gap-3">
            {t.footer.location}
            <Link
              to="/admin/login"
              aria-label="Admin"
              tabIndex={-1}
              className="size-1.5 shrink-0 rounded-full bg-white/10 outline-none transition-colors hover:bg-white/40 focus-visible:bg-white/40"
            />
          </span>
        </div>
      </div>
    </footer>
  )
}
