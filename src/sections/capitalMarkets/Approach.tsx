import { useEffect, useRef, useState } from "react"
import { Compass, Layers, ShieldCheck, Building2, Rocket, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal, usePrefersReducedMotion, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import Motif from "../../components/Motif"

const STEP_ICONS = [Compass, Layers, ShieldCheck, Building2, Rocket]
const STEP_DURATION = 4200 // ms per autoplaying segment

/** Splits on explicit "\n" breaks so a step desc written as several distinct
    sentences renders as separate paragraphs instead of one run-on block. */
function Paragraphs({ text, className }: { text: string; className: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      {text
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} className={className}>
            {p}
          </p>
        ))}
    </div>
  )
}

/** Self-playing step journey a wizard-style player with a segmented progress
    rail (à la story UIs), autoplay that hands off to the visitor the moment
    they interact, keyboard navigation, and swipe support on touch. */
export default function CapitalMarketsApproach() {
  const { t } = useI18n()
  const a = t.capitalMarketsPage.approach
  const steps = a.steps
  const reducedMotion = usePrefersReducedMotion()

  const [active, setActive] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const touchStartX = useRef<number | null>(null)

  const goTo = (i: number) => {
    setActive(((i % steps.length) + steps.length) % steps.length)
    setAutoplay(false)
  }

  useEffect(() => {
    if (!autoplay || reducedMotion) return
    if (active >= steps.length - 1) return
    const id = setTimeout(() => setActive((a) => a + 1), STEP_DURATION)
    return () => clearTimeout(id)
  }, [active, autoplay, reducedMotion, steps.length])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo(active + 1)
    if (e.key === "ArrowLeft") goTo(active - 1)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) goTo(active + (dx < 0 ? 1 : -1))
    touchStartX.current = null
  }

  const step = steps[active]
  const Icon = STEP_ICONS[active]

  return (
    <section id="approach" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <Motif variant="markets" className="text-amber-600" />
      <div className={`${wrap} relative`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-amber-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-slate-500">
            {a.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-xl font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[44px]"
        >
          {a.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          {a.sub}
        </Reveal>

        <Reveal delay={200}>
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label={a.heading}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#211505] to-slate-900 p-6 text-white shadow-2xl shadow-slate-900/10 outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:p-8 lg:p-10"
          >
            {/* segmented progress rail */}
            <div className="flex items-center gap-4">
              <div className="flex flex-1 gap-1.5">
                {steps.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => goTo(i)}
                    aria-label={`${a.eyebrow} ${s.key}`}
                    aria-current={i === active}
                    className="press h-[5px] flex-1 overflow-hidden rounded-full bg-white/15"
                  >
                    {i < active ? (
                      <span className="block h-full rounded-full bg-amber-400" />
                    ) : i > active ? (
                      <span className="block h-full origin-left scale-x-0 rounded-full bg-amber-400" />
                    ) : autoplay && !reducedMotion ? (
                      <span
                        key={active}
                        className="segment-fill block h-full origin-left rounded-full bg-amber-400"
                        style={{ "--dur": `${STEP_DURATION}ms` } as React.CSSProperties}
                      />
                    ) : (
                      <span className="block h-full rounded-full bg-amber-400" />
                    )}
                  </button>
                ))}
              </div>
              <span className="shrink-0 text-xs font-bold tabular-nums text-white/50">
                {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
            </div>

            {/* content */}
            <div className="relative mt-8 grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
              <span className="pointer-events-none absolute -right-2 -top-6 select-none font-sans text-[120px] font-extrabold leading-none text-white/[0.04] sm:text-[160px]">
                {String(active + 1).padStart(2, "0")}
              </span>

              <Reveal key={active} variant="right" className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
                <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-amber-500/20 text-amber-300">
                  <Icon className="size-8" strokeWidth={1.8} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.66px] text-amber-300">
                    {String(active + 1).padStart(2, "0")} · {step.key}
                  </span>
                  <h3 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">{step.tagline}</h3>
                  <div className="mt-4 max-w-2xl">
                    <Paragraphs text={step.desc} className="leading-relaxed text-white/75" />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-wider text-white/40">
                    {a.deliverLabel}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {step.items.map((title) => (
                      <span
                        key={title}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-semibold text-white/85"
                      >
                        <Check className="size-3.5 shrink-0 text-amber-300" />
                        {title}
                      </span>
                    ))}
                  </div>

                  {step.outcome && (
                    <div className="mt-6 rounded-xl border border-amber-400/20 bg-amber-500/[0.07] p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        {a.outcomeLabel}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-relaxed text-white">{step.outcome}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* controls */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex flex-wrap gap-2">
                {steps.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => goTo(i)}
                    className={`press rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                      i === active
                        ? "bg-white text-slate-900"
                        : "bg-white/[0.06] text-white/60 hover:bg-white/[0.12] hover:text-white"
                    }`}
                  >
                    {s.key}
                  </button>
                ))}
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={() => goTo(active - 1)}
                  aria-label="Previous step"
                  className="press grid size-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={() => goTo(active + 1)}
                  aria-label="Next step"
                  className="press grid size-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
