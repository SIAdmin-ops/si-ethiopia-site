import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Reveal, RevealText, usePrefersReducedMotion, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { HighlightSI } from "../../lib/highlightSI"
import { unsplashSrcSet } from "../../lib/images"

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
            <HighlightSI text={p} className="text-leaf" />
          </p>
        ))}
    </div>
  )
}

export default function HomeHero() {
  const { t } = useI18n()
  const h = t.home.hero
  const reducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToNext = () => {
    const next = sectionRef.current?.nextElementSibling
    next?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative -mt-[68px] flex min-h-[100svh] items-center overflow-hidden bg-basalt text-white"
    >
      {/* one background image under one overlay */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1689732888407-310424e3a372?w=1600&h=900&fit=crop&auto=format"
          alt=""
          className="hero-zoom size-full object-cover"
          srcSet={unsplashSrcSet("https://images.unsplash.com/photo-1689732888407-310424e3a372?w=1600&h=900&fit=crop&auto=format")}
          sizes="100vw"
          fetchPriority="high"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-basalt/75" />

      <div className={`${wrap} relative py-28 pt-36 sm:py-32 sm:pt-40 lg:py-40`}>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal delay={0} className="flex flex-col items-center gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.66px] text-white">
              <span className="size-2 rounded-full bg-gold" />
              {h.eyebrow}
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[4px] text-white/80">
              Strategy Innovations Consultancy
            </span>
          </Reveal>

          <RevealText
            as="h1"
            text={h.heading}
            delay={80}
            className="mt-7 max-w-3xl font-display text-[32px] leading-[40px] font-bold tracking-tight sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[64px]"
          />

          {/* On mobile the CTA moves ahead of the four-paragraph description so
              the primary action is reachable without scrolling through it. */}
          <Reveal delay={200} className="order-4 mt-7 max-w-xl sm:order-none">
            <Paragraphs text={h.desc} className="text-base leading-relaxed text-white/80 sm:text-lg" />
          </Reveal>

          <Reveal delay={280} className="order-3 mt-10 flex flex-col items-center gap-5 sm:order-none sm:flex-row">
            <a
              href="#divisions"
              className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-basalt transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-gold/90"
            >
              {h.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="text-[15px] font-semibold text-sky underline-offset-4 transition-colors hover:underline"
            >
              {h.ctaSecondary}
            </a>
          </Reveal>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="press group absolute inset-x-0 bottom-8 mx-auto hidden flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[11px] font-bold uppercase tracking-[3px] text-white/70 transition-colors group-hover:text-white">
          Scroll
        </span>
        <span className="relative h-9 w-5 rounded-full border border-white/40 transition-colors group-hover:border-white/70">
          <span
            aria-hidden
            className="absolute inset-x-0 top-1.5 mx-auto size-1.5 rounded-full bg-white/80"
            style={reducedMotion ? undefined : { animation: "scroll-cue 1.8s cubic-bezier(0.4,0,0.2,1) infinite" }}
          />
        </span>
      </button>
    </section>
  )
}
