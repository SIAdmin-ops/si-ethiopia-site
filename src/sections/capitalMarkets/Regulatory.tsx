import { FileText, ShieldCheck, TrendingUp, Database, Landmark } from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { HighlightSI } from "../../lib/highlightSI"
import { glow } from "../../lib/glow"

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
            <HighlightSI text={p} className="text-amber-300" />
          </p>
        ))}
    </div>
  )
}

/** Numbered editorial rows for the five pillars of the market ecosystem,
    matching the stacked-row pattern used by Pillars/Approach on this page
    rather than the old 2x2 icon-card grid. */
export default function Regulatory() {
  const { t } = useI18n()
  const r = t.capitalMarketsPage.regulatory

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
      style={{ backgroundImage: glow("amber") }}
    >
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-amber-300">
          {r.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-2xl font-display text-[24px] font-extrabold leading-tight tracking-tight sm:text-[32px] lg:text-[38px]"
        >
          {r.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={r.intro} className="leading-relaxed text-white/65" />
        </Reveal>

        <div className="mt-14 border-t border-white/10">
          {r.items.map((item, i) => {
            const Icon = ITEM_ICONS[i]
            return (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="grid gap-6 border-b border-white/10 py-10 sm:gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:py-12"
              >
                <div className="flex items-start gap-5">
                  <span className="font-sans text-3xl font-extrabold tracking-tight text-amber-300 sm:text-4xl">
                    {NUMS[i]}
                  </span>
                  <div>
                    <span className="grid size-11 place-items-center rounded-2xl bg-amber-500/20 text-amber-300">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold leading-tight sm:text-2xl">{item.title}</h3>
                    <p className="mt-1.5 text-sm font-semibold text-amber-300">{item.tagline}</p>
                  </div>
                </div>

                <div className="lg:pl-2">
                  <Paragraphs text={item.body} className="max-w-2xl text-[15px] leading-relaxed text-white/65 sm:text-base" />
                  {item.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-amber-500/10 px-3 py-1.5 text-[13px] font-semibold text-amber-200 ring-1 ring-amber-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
