import { useState } from "react"
import { Compass, Layers, ShieldCheck, Building2, Rocket, Check } from "lucide-react"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"

const STEP_ICONS = [Compass, Layers, ShieldCheck, Building2, Rocket]

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

export default function Approach() {
  const { t } = useI18n()
  const [active, setActive] = useState(0)
  const step = t.approach.steps[active]
  const Icon = STEP_ICONS[active]
  return (
    <section id="approach" className="relative overflow-hidden bg-white py-16 text-ink sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(50% 50% at 80% 0%, rgba(25,131,136,0.08) 0%, transparent 60%)",
        }}
      />
      <div className={`${wrap} relative`}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-teal">
          {t.approach.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-2xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-teal-deep sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {t.approach.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-xl text-text-secondary">
          {t.approach.sub}
        </Reveal>

        {/* stepper */}
        <div className="mt-12 flex snap-x gap-2 overflow-x-auto pb-2 sm:gap-3">
          {t.approach.steps.map((s, i) => {
            const on = i === active
            return (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                className={`press flex shrink-0 snap-start items-center gap-2.5 rounded-lg border px-4 py-3 text-left transition-all ${
                  on
                    ? "border-teal bg-teal-50"
                    : "border-border bg-mist hover:-translate-y-0.5 hover:border-teal-200"
                }`}
              >
                <span
                  className={`grid size-8 place-items-center rounded-lg text-sm font-bold ${
                    on ? "bg-teal text-white" : "bg-white text-text-secondary"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm font-semibold ${on ? "text-teal-deep" : "text-text-secondary"}`}>
                  {s.key}
                </span>
              </button>
            )
          })}
        </div>

        {/* detail panel */}
        <div
          key={active}
          className="reveal in mt-6 grid gap-8 rounded-2xl border border-border bg-mist p-6 sm:p-10 md:grid-cols-[auto_1fr]"
        >
          <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-deep">
            <Icon className="size-8" strokeWidth={1.8} />
          </div>
          <div>
            <h3 className="text-[20px] leading-[28px] font-semibold text-teal-deep lg:text-[24px] lg:leading-[32px]">{step.tagline}</h3>
            <div className="mt-4 max-w-2xl">
              <Paragraphs text={step.desc} className="leading-relaxed text-text-secondary" />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-wider text-text-secondary/70">
              {t.approach.deliverLabel}
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {step.items.map((it) => (
                <div
                  key={it.title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-bold text-ink">{it.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
