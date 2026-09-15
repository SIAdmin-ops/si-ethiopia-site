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
    <section id="approach" className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(50% 50% at 80% 0%, rgba(25,131,136,0.3) 0%, transparent 60%)",
        }}
      />
      <div className={`${wrap} relative`}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-indigo-300">
          {t.approach.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-2xl font-display text-[28px] font-extrabold leading-tight tracking-tight sm:text-[40px] lg:text-[44px]"
        >
          {t.approach.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-xl text-white/70">
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
                className={`press flex shrink-0 snap-start items-center gap-2.5 rounded-xl border px-4 py-3 text-left transition-all ${
                  on
                    ? "border-indigo-400 bg-indigo-500/20"
                    : "border-white/10 bg-white/[0.04] hover:-translate-y-0.5 hover:border-white/25"
                }`}
              >
                <span
                  className={`grid size-8 place-items-center rounded-lg text-sm font-bold ${
                    on ? "bg-indigo-500 text-white" : "bg-white/10 text-white/60"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm font-semibold ${on ? "text-white" : "text-white/60"}`}>
                  {s.key}
                </span>
              </button>
            )
          })}
        </div>

        {/* detail panel */}
        <div
          key={active}
          className="reveal in mt-6 grid gap-8 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm sm:p-10 md:grid-cols-[auto_1fr]"
        >
          <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-indigo-500/20 text-indigo-300">
            <Icon className="size-8" strokeWidth={1.8} />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">{step.tagline}</h3>
            <div className="mt-4 max-w-2xl">
              <Paragraphs text={step.desc} className="leading-relaxed text-white/75" />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-wider text-white/40">
              {t.approach.deliverLabel}
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {step.items.map((it) => (
                <div
                  key={it.title}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-indigo-300" />
                  <div>
                    <p className="text-sm font-bold">{it.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{it.desc}</p>
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
