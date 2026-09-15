import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"
import { HighlightSI } from "../lib/highlightSI"
import { glow } from "../lib/glow"

/** Splits on explicit "\n" breaks so a field written as several distinct
    sentences renders as separate paragraphs instead of one run-on block. */
function Paragraphs({ text, className }: { text: string; className: string }) {
  return (
    <div className="flex flex-col gap-3">
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

/* Gradient badge colors cycled across the numbered consulting items. */
const CONSULT_BADGES = [
  "from-amber-500 to-yellow-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-teal-500 to-emerald-600",
  "from-yellow-400 to-amber-500",
  "from-orange-400 to-amber-500",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-emerald-400 to-green-500",
]

/** Master–detail layout: a numbered list drives a persistent preview panel. */
export default function Consulting() {
  const { t } = useI18n()
  const [active, setActive] = useState(0)
  const item = t.consulting.items[active]

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
      style={{ backgroundImage: glow("amber") }}
    >
      <div className={`${wrap} relative`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-amber-400" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-amber-300">
            {t.consulting.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-4xl font-display text-[28px] font-extrabold leading-tight tracking-tight sm:text-[44px]"
        >
          {t.consulting.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-white/65 sm:text-lg">
          {t.consulting.sub}
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          {/* master list */}
          <Reveal variant="left" className="flex flex-col gap-2">
            {t.consulting.items.map((it, i) => {
              const on = i === active
              return (
                <button
                  key={it.title}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={on}
                  className={`press group flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all ${
                    on
                      ? "border-white/25 bg-white/[0.08] translate-x-1"
                      : "border-white/10 bg-white/[0.02] hover:translate-x-1 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br text-xs font-extrabold text-white transition-transform ${
                      CONSULT_BADGES[i % CONSULT_BADGES.length]
                    } ${on ? "scale-105" : "opacity-80 group-hover:opacity-100"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 text-sm font-semibold transition-colors ${
                      on ? "text-white" : "text-white/70"
                    }`}
                  >
                    {it.title}
                  </span>
                  <ChevronRight
                    className={`size-4 shrink-0 transition-all ${
                      on ? "translate-x-0 text-amber-300" : "-translate-x-1 text-white/30"
                    }`}
                  />
                </button>
              )
            })}
          </Reveal>

          {/* detail preview */}
          <Reveal variant="right" className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-sm">
              <div>
                <div className="relative h-40 overflow-hidden sm:h-48">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=500&fit=crop&auto=format"
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(2,6,23,0.15) 0%, rgba(2,6,23,0.75) 100%)",
                    }}
                  />
                </div>
                <div key={active} className="detail-fade p-8 pt-6 sm:p-10 sm:pt-7">
                  <span
                    className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-lg font-extrabold text-white ${CONSULT_BADGES[active % CONSULT_BADGES.length]}`}
                  >
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight sm:text-[30px]">
                    {item.title}
                  </h3>
                  <div className="mt-4">
                    <Paragraphs text={item.desc} className="leading-relaxed text-white/75" />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-2 px-8 pb-8 text-xs font-semibold uppercase tracking-wider text-white/40 sm:px-10 sm:pb-10">
                <span>
                  {String(active + 1).padStart(2, "0")} / {String(t.consulting.items.length).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="text-sm font-semibold text-amber-300 underline decoration-amber-300/40 underline-offset-4 transition-colors hover:text-amber-200"
          >
            {t.consulting.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
