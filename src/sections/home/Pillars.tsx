import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import Motif from "../../components/Motif"

const PILLAR_ACCENTS = ["emerald", "indigo", "amber"] as const
const PILLAR_NUMS = ["01", "02", "03"]

const ACCENT: Record<string, { text: string; chip: string; num: string }> = {
  indigo: {
    text: "text-indigo-600",
    chip: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    num: "text-indigo-600",
  },
  emerald: {
    text: "text-emerald-600",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    num: "text-emerald-600",
  },
  amber: {
    text: "text-amber-600",
    chip: "bg-amber-50 text-amber-700 ring-amber-200",
    num: "text-amber-600",
  },
}

/** Stacked full-width rows rather than an equal-height 3-up card grid, so a
    pillar with a much longer tag list (e.g. "We Consult") doesn't force its
    neighbours to stretch into oversized, mostly-empty cards. */
export default function HomePillars() {
  const { t } = useI18n()
  const p = t.home.pillars

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      <Motif variant="network" className="text-indigo-600" />
      <div className={`${wrap} relative`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-indigo-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-slate-500">
            {p.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-xl font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[44px]"
        >
          {p.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          {p.sub}
        </Reveal>

        <div className="mt-16 border-t border-slate-200">
          {p.items.map((item, i) => {
            const a = ACCENT[PILLAR_ACCENTS[i]]
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="group grid gap-6 border-b border-slate-200 py-10 transition-colors sm:gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:py-12"
              >
                <div className="flex items-start gap-5">
                  <span className={`font-sans text-4xl font-extrabold tracking-tight sm:text-5xl ${a.num}`}>
                    {PILLAR_NUMS[i]}
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-[28px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-500">{item.lead}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 lg:pl-2">
                  <p className="max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
                    {item.body}
                  </p>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {p.keySubServices}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {item.tags.map((tag, ti) => (
                        <span
                          key={`${tag}-${ti}`}
                          className={`press cursor-default rounded-full px-3 py-1.5 text-[13px] font-semibold ring-1 transition-transform hover:-translate-y-0.5 ${a.chip}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className={`group/cta inline-flex w-fit items-center gap-2 text-lg font-bold sm:text-xl ${a.text}`}
                  >
                    {item.cta}
                    <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
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
