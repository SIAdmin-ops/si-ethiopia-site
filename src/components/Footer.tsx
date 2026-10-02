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
            "radial-gradient(60% 70% at 15% 0%, rgba(14,77,60,0.22) 0%, transparent 55%), radial-gradient(45% 60% at 100% 100%, rgba(224,165,38,0.12) 0%, transparent 50%)",
        }}
      />

      <div className={`${wrap} relative py-16 sm:py-24`}>
        <Reveal>
          <Link to="/" aria-label="Strategy Innovations Consultancy PLC, home" className="inline-block">
            <img
              src="/sic-ethiopia-horizontal-reversed.svg"
              loading="lazy"
              alt=""
              className="h-14 w-auto sm:h-16"
            />
          </Link>
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
            className="group press shine mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-basalt transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold/90"
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
                className="text-[15px] font-semibold text-sky transition-colors duration-150 hover:text-sky hover:underline underline-offset-4"
              >
                {l}
              </Link>
            ))}
          </nav>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10">
        <div
          className={`${wrap} flex flex-col gap-1 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between`}
        >
          <span className="flex flex-col gap-1">
            <span>{t.footer.rights}</span>
            <span>
              {t.footer.parentCompany}{" "}
              <a
                href="https://strategy-innovations.com"
                target="_blank"
                rel="noopener"
                className="text-sky underline-offset-2 hover:underline"
              >
                strategy-innovations.com
              </a>
            </span>
          </span>
          <span className="flex items-center gap-3">{t.footer.location}</span>
        </div>
      </div>
    </footer>
  )
}
