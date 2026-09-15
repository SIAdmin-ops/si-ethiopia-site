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
            <HighlightSI text={p} className="text-amber-300" />
          </p>
        ))}
    </div>
  )
}

/** Full-bleed photo hero, distinct from Technology's typography-led hero
    and Training's centered checklist hero, per the "no repeated generic
    hero" brief. The stock-market photo spans the entire section as a
    background, with a dark amber-tinted scrim keeping the left-aligned
    editorial copy legible on top of it. */
export default function Hero() {
  const { t } = useI18n()
  const imgParallax = useParallax<HTMLDivElement>(0.08)

  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div ref={imgParallax} className="parallax absolute inset-x-0 -top-[10%] h-[120%] w-full">
        <img
          src="https://images.unsplash.com/photo-1689732888407-310424e3a372?w=2000&h=1400&fit=crop&auto=format"
          alt=""
          className="size-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(2,6,23,0.94) 0%, rgba(2,6,23,0.82) 38%, rgba(2,6,23,0.45) 65%, rgba(2,6,23,0.75) 100%), linear-gradient(0deg, rgba(2,6,23,0.5) 0%, transparent 40%), linear-gradient(200deg, rgba(196,150,16,0.25) 0%, transparent 45%)",
        }}
      />

      <div className={`${wrap} relative py-24 sm:py-32 lg:py-40`}>
        <div className="max-w-2xl">
          <Reveal className="inline-flex items-center rounded-full border border-amber-400/60 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.66px] text-amber-200">
            {t.hero.eyebrow}
          </Reveal>
          <RevealText
            as="h1"
            delay={80}
            text={`${t.hero.title1}${t.hero.title2}`}
            className="mt-7 font-display text-[32px] font-extrabold leading-[1.12] tracking-tight sm:text-[44px] lg:text-[56px]"
          />
          <Reveal delay={180} className="mt-7 max-w-xl">
            <Paragraphs text={t.hero.desc} className="text-base leading-relaxed text-white/80 sm:text-lg" />
          </Reveal>

          <Reveal delay={260} className="mt-7 flex flex-wrap gap-3">
            {t.hero.chips.map((label, i) => {
              const Icon = HERO_CHIP_ICONS[i]
              return (
                <span
                  key={label}
                  className="group inline-flex cursor-default items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-3.5 py-2 text-xs font-bold backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber-300/60 hover:bg-white/[0.12]"
                >
                  <Icon className="icon-pop size-4 text-amber-300" strokeWidth={2.5} />
                  {label}
                </span>
              )
            })}
          </Reveal>

          <Reveal delay={340} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-amber-600/25 transition-all hover:-translate-y-0.5 hover:bg-amber-500 hover:shadow-2xl hover:shadow-amber-600/40"
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
        </div>
      </div>
    </section>
  )
}
