import { useEffect, useState } from "react"
import { Landmark, Cpu, ConciergeBell, HeartPulse, ArrowRight, ArrowDown } from "lucide-react"
import { Reveal, wrap, usePrefersReducedMotion } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { HighlightSI } from "../../lib/highlightSI"

const SECTOR_ICONS = [Landmark, Cpu, ConciergeBell, HeartPulse]
const SECTOR_ACCENTS = ["amber", "teal", "rose", "sky"] as const
const FLOW_STEP_DURATION = 1800 // ms per autoplaying highlight

const ACCENT: Record<
  string,
  { chip: string; bar: string; ring: string; glow: string }
> = {
  amber: { chip: "bg-amber-50 text-amber-700", bar: "bg-amber-500", ring: "ring-amber-400", glow: "shadow-amber-500/20" },
  teal: { chip: "bg-teal-50 text-teal-700", bar: "bg-teal-500", ring: "ring-teal-400", glow: "shadow-teal-500/20" },
  rose: { chip: "bg-rose-50 text-rose-700", bar: "bg-rose-500", ring: "ring-rose-400", glow: "shadow-rose-500/20" },
  sky: { chip: "bg-sky-50 text-sky-700", bar: "bg-sky-500", ring: "ring-sky-400", glow: "shadow-sky-500/20" },
}

/** Splits on explicit "\n" breaks so a field written as several distinct
    sentences renders as separate paragraphs instead of one run-on block. */
function Paragraphs({
  text,
  className,
  highlightClassName,
}: {
  text: string
  className: string
  highlightClassName?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      {text
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} className={className}>
            <HighlightSI text={p} className={highlightClassName} />
          </p>
        ))}
    </div>
  )
}

export default function FocusSectors() {
  const { t } = useI18n()
  const f = t.home.focusSectors
  const reducedMotion = usePrefersReducedMotion()

  const [active, setActive] = useState<number | null>(null)
  const [flowStep, setFlowStep] = useState(0)
  const [flowAutoplay, setFlowAutoplay] = useState(true)

  /* the flow diagram gently self-plays until a visitor clicks a step,
     same "hands off on interaction" pattern used by the Approach carousel */
  useEffect(() => {
    if (!flowAutoplay || reducedMotion) return
    const id = setInterval(() => setFlowStep((s) => (s + 1) % f.techFlow.length), FLOW_STEP_DURATION)
    return () => clearInterval(id)
  }, [flowAutoplay, reducedMotion, f.techFlow.length])

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className={wrap}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-indigo-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-slate-500">
            {f.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-2xl font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[44px]"
        >
          {f.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={f.intro} className="leading-relaxed text-slate-600 sm:text-lg" />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {f.sectors.map((sector, i) => {
            const Icon = SECTOR_ICONS[i]
            const a = ACCENT[SECTOR_ACCENTS[i]]
            const isActive = active === i
            const dimmed = active !== null && !isActive
            return (
              <Reveal
                key={sector.title}
                delay={i * 100}
                className={`relative ${dimmed ? "opacity-60" : "opacity-100"} transition-opacity duration-300`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : i)}
                  aria-pressed={isActive}
                  className={`press group relative flex w-full flex-col gap-3 overflow-hidden rounded-2xl border bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 ${
                    isActive
                      ? `-translate-y-1 border-transparent shadow-xl ${a.glow} ring-2 ${a.ring}`
                      : "border-slate-200"
                  }`}
                >
                  <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${a.bar}`} />
                  <span
                    className={`grid size-11 place-items-center rounded-2xl transition-transform duration-300 ${a.chip} ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  >
                    <Icon className="icon-pop size-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-lg font-extrabold leading-tight text-slate-900">{sector.title}</h3>
                  <Paragraphs text={sector.desc} className="text-[15px] leading-relaxed text-slate-600" />
                </button>
              </Reveal>
            )
          })}
        </div>

        {/* technology as the connective thread across every focus sector */}
        <Reveal
          delay={220}
          className="mt-14 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10"
        >
          <h3 className="max-w-xl font-sans text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
            {f.techHeading}
          </h3>
          <div className="mt-4 max-w-2xl">
            <Paragraphs text={f.techBody} className="leading-relaxed text-white/70" highlightClassName="text-indigo-300" />
          </div>

          <div className="mt-9 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
            {f.techFlow.map((step, i) => {
              const isOn = i === flowStep
              return (
                <div key={step} className="flex items-center gap-2 lg:flex-1">
                  <button
                    type="button"
                    onClick={() => {
                      setFlowStep(i)
                      setFlowAutoplay(false)
                    }}
                    aria-pressed={isOn}
                    className={`press relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border px-4 py-4 text-center transition-all duration-500 ${
                      isOn
                        ? "border-indigo-400/60 bg-indigo-500/15 shadow-lg shadow-indigo-500/10"
                        : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    {isOn && !reducedMotion && (
                      <span
                        key={flowStep}
                        aria-hidden
                        className="segment-fill absolute inset-x-0 bottom-0 h-[3px] origin-left bg-indigo-400"
                        style={{ "--dur": `${FLOW_STEP_DURATION}ms` } as React.CSSProperties}
                      />
                    )}
                    <p
                      className={`relative text-[13px] font-semibold leading-snug transition-colors sm:text-sm ${
                        isOn ? "text-white" : "text-white/80"
                      }`}
                    >
                      {step}
                    </p>
                  </button>
                  {i < f.techFlow.length - 1 && (
                    <>
                      <ArrowRight
                        className={`hidden size-4 shrink-0 transition-colors duration-500 lg:block ${
                          isOn ? "text-indigo-400" : "text-white/30"
                        }`}
                      />
                      <ArrowDown
                        className={`mx-auto size-4 shrink-0 transition-colors duration-500 lg:hidden ${
                          isOn ? "text-indigo-400" : "text-white/30"
                        }`}
                      />
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
