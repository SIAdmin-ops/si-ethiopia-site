import { ArrowRight, Check, Users, Layers } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, RevealText, useParallax, wrap } from "../lib/motion"
import { useI18n } from "../i18n"
import { HighlightSI } from "../lib/highlightSI"

const HERO_CHIP_ICONS = [Check, Users, Layers]

/** Splits on explicit "\n" breaks so a field written as several distinct
    sentences renders as separate paragraphs instead of one run-on block. */
function Paragraphs({ text, className }: { text: string; className: string }) {
  return (
    <div className="flex flex-col gap-4">
      {text
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} className={className}>
            <HighlightSI text={p} className="text-white" />
          </p>
        ))}
    </div>
  )
}

/** Full-bleed photo hero, distinct from Technology's typography-led hero
    and Training's centered checklist hero, per the "no repeated generic
    hero" brief. The stock-market photo spans the entire section as a
    background, with a dark teal-tinted scrim keeping the left-aligned
    editorial copy legible on top of it. */
export default function Hero() {
  const { t } = useI18n()
  const imgParallax = useParallax<HTMLDivElement>(0.08)

  return (
    <section id="top" className="relative -mt-[68px] overflow-hidden bg-slate-950 text-white">
      <div ref={imgParallax} className="parallax absolute inset-x-0 -top-[10%] h-[120%] w-full">
        <img
          src="https://images.unsplash.com/photo-1689732888407-310424e3a372?w=2000&h=1400&fit=crop&auto=format"
          alt=""
          className="hero-zoom size-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(14,31,33,0.94) 0%, rgba(14,31,33,0.82) 38%, rgba(14,31,33,0.45) 65%, rgba(14,31,33,0.75) 100%), linear-gradient(0deg, rgba(14,31,33,0.5) 0%, transparent 40%), linear-gradient(200deg, rgba(11,79,85,0.35) 0%, transparent 45%)",
        }}
      />

      <div className={`${wrap} relative py-16 sm:py-24 lg:py-40`}>
        <div className="flex max-w-2xl flex-col">
          <Reveal className="inline-flex items-center self-start rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.66px] text-white">
            {t.hero.eyebrow}
          </Reveal>
          <RevealText
            as="h1"
            delay={80}
            text={`${t.hero.title1}${t.hero.title2}`}
            className="mt-7 font-display text-[28px] leading-[36px] font-bold tracking-tight sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px]"
          />

          {/* On mobile the CTAs and credibility chips move ahead of the long
              description so the primary action is reachable immediately;
              desktop keeps the original description-first order. */}
          <Reveal delay={340} className="order-3 mt-9 flex flex-col gap-3 sm:order-none sm:flex-row">
            <Link
              to="/contact"
              className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-ink shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-2xl"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#approach"
              className="group press inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={260} className="order-4 mt-7 flex flex-wrap gap-3 sm:order-none">
            {t.hero.chips.map((label, i) => {
              const Icon = HERO_CHIP_ICONS[i]
              return (
                <span
                  key={label}
                  className="group inline-flex cursor-default items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-3.5 py-2 text-xs font-bold backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.12]"
                >
                  <Icon className="icon-pop size-4 text-white" strokeWidth={2.5} />
                  {label}
                </span>
              )
            })}
          </Reveal>

          <Reveal delay={180} className="order-5 mt-7 max-w-xl sm:order-none">
            <Paragraphs text={t.hero.desc} className="text-base leading-relaxed text-white/80 sm:text-lg" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
