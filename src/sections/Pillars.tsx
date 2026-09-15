import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"
import Motif from "../components/Motif"
import { HighlightSI } from "../lib/highlightSI"

const PILLAR_ACCENTS = ["amber", "emerald", "teal"] as const
const PILLAR_NUMS = ["01", "02", "03"]

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
            <HighlightSI text={p} />
          </p>
        ))}
    </div>
  )
}

const ACCENT: Record<string, { text: string; chip: string; num: string }> = {
  amber: {
    text: "text-amber-600",
    chip: "bg-amber-50 text-amber-700 ring-amber-200",
    num: "text-amber-600",
  },
  emerald: {
    text: "text-emerald-600",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    num: "text-emerald-600",
  },
  teal: {
    text: "text-teal-600",
    chip: "bg-teal-50 text-teal-700 ring-teal-200",
    num: "text-teal-600",
  },
}

/** Editorial stacked-row layout distinct from the card-grid Pillars on Home. */
export default function Pillars() {
  const { t } = useI18n()
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <Motif variant="markets" className="text-amber-600" />
      <div className={`${wrap} relative`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-amber-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-slate-500">
            {t.pillars.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-xl font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[44px]"
        >
          {t.pillars.heading}
        </Reveal>
        <Reveal delay={140} className="mt-4 max-w-2xl">
          <Paragraphs text={t.pillars.sub} className="text-base text-slate-600 sm:text-lg" />
        </Reveal>

        <div className="mt-16 border-t border-slate-200">
          {t.pillars.items.map((p, i) => {
            const a = ACCENT[PILLAR_ACCENTS[i]]
            return (
              <Reveal
                key={p.title}
                delay={i * 100}
                className="group grid gap-6 border-b border-slate-200 py-10 transition-colors sm:gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:py-12"
              >
                <div className="flex items-start gap-5">
                  <span className={`font-sans text-4xl font-extrabold tracking-tight sm:text-5xl ${a.num}`}>
                    {PILLAR_NUMS[i]}
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-[28px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-500">{p.lead}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 lg:pl-2">
                  <Paragraphs
                    text={p.body}
                    className="max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base"
                  />
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, ti) => (
                      <span
                        key={`${tag}-${ti}`}
                        className={`press cursor-default rounded-full px-3 py-1.5 text-[13px] font-semibold ring-1 transition-transform hover:-translate-y-0.5 ${a.chip}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={`group/cta inline-flex w-fit items-center gap-1.5 text-sm font-semibold ${a.text}`}
                  >
                    {p.cta}
                    <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
