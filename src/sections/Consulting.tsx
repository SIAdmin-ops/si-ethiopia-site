import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"
import { HighlightSI } from "../lib/highlightSI"

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
            <HighlightSI text={p} className="text-green" />
          </p>
        ))}
    </div>
  )
}

/* Gradient badge colors cycled across the numbered consulting items. */
const CONSULT_BADGES = [
  "from-green to-teal-600",
  "from-teal-400 to-teal-600",
  "from-amber-500 to-amber-700",
  "from-teal-500 to-teal-700",
  "from-teal-300 to-teal-500",
  "from-amber-600 to-amber-800",
  "from-teal-600 to-teal-800",
  "from-amber-500 to-amber-800",
  "from-teal-700 to-teal-900",
]

/** Master–detail layout: a numbered list drives a persistent preview panel. */
export default function Consulting() {
  const { t } = useI18n()
  const [active, setActive] = useState(0)
  const item = t.consulting.items[active]

  return (
    <section id="advisory" className="relative overflow-hidden bg-mist py-16 sm:py-24">
      <div className={`${wrap} relative`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-green" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-green">
            {t.consulting.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-4xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-green sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {t.consulting.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-text-secondary sm:text-lg">
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
                  className={`press group flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-[color,background-color,border-color,opacity,transform,box-shadow] ${
                    on
                      ? "border-teal-200 bg-teal-50 translate-x-1"
                      : "border-border bg-white hover:translate-x-1 hover:border-teal-200"
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
                      on ? "text-green" : "text-text-secondary"
                    }`}
                  >
                    {it.title}
                  </span>
                  <ChevronRight
                    className={`size-4 shrink-0 transition-[color,background-color,border-color,opacity,transform,box-shadow] ${
                      on ? "translate-x-0 text-green" : "-translate-x-1 text-slate-300"
                    }`}
                  />
                </button>
              )
            })}
          </Reveal>

          {/* detail preview */}
          <Reveal variant="right" className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white">
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
                        "linear-gradient(180deg, rgba(22,32,30,0.05) 0%, rgba(22,32,30,0.55) 100%)",
                    }}
                  />
                </div>
                <div key={active} className="detail-fade p-8 pt-6 sm:p-10 sm:pt-7">
                  <span
                    className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-lg font-extrabold text-white ${CONSULT_BADGES[active % CONSULT_BADGES.length]}`}
                  >
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-[20px] leading-[28px] font-semibold text-green lg:text-[24px] lg:leading-[32px]">
                    {item.title}
                  </h3>
                  <div className="mt-4">
                    <Paragraphs text={item.desc} className="leading-relaxed text-text-secondary" />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-2 px-8 pb-8 text-xs font-semibold uppercase tracking-wider text-text-secondary/70 sm:px-10 sm:pb-10">
                <span>
                  {String(active + 1).padStart(2, "0")} / {String(t.consulting.items.length).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="text-sm font-semibold text-green underline decoration-green/40 underline-offset-4 transition-colors hover:text-green"
          >
            {t.consulting.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
