import { FileText, ShieldCheck, TrendingUp, Database, Landmark } from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { HighlightSI } from "../../lib/highlightSI"

const NUMS = ["01", "02", "03", "04", "05"]
const ITEM_ICONS = [FileText, ShieldCheck, TrendingUp, Database, Landmark]

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
            <HighlightSI text={p} className="text-teal-deep" />
          </p>
        ))}
    </div>
  )
}

/** Numbered editorial rows for the five pillars of the market ecosystem,
    matching the stacked-row pattern used by Pillars/Approach on this page
    rather than the old 2x2 icon-card grid. Regulator entities render as
    white cards with teal icons per the Capital Markets light-section rule. */
export default function Regulatory() {
  const { t } = useI18n()
  const r = t.capitalMarketsPage.regulatory

  return (
    <section id="regulatory" className="relative overflow-hidden bg-mist py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-teal">
          {r.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-2xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-teal-deep sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {r.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={r.intro} className="leading-relaxed text-text-secondary" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {r.items.map((item, i) => {
            const Icon = ITEM_ICONS[i]
            return (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-deep">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-sans text-2xl font-extrabold tracking-tight text-teal-100">
                    {NUMS[i]}
                  </span>
                </div>
                <h3 className="mt-4 text-[20px] leading-[28px] font-semibold text-teal-deep lg:text-[24px] lg:leading-[32px]">{item.title}</h3>
                <p className="mt-1.5 text-sm font-semibold text-teal">{item.tagline}</p>

                <Paragraphs text={item.body} className="mt-3 text-[15px] leading-relaxed text-text-secondary" />
                {item.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-teal-50 px-3 py-1.5 text-[13px] font-semibold text-teal-deep ring-1 ring-teal-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
