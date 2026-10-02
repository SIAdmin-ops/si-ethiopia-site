import {
  TrendingUp,
  Users,
  Activity,
  ArrowLeftRight,
  ShieldCheck,
  Coins,
  LineChart,
  Network,
} from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { HighlightSI } from "../../lib/highlightSI"

const GROUP_ICONS = [TrendingUp, Users, Activity, ArrowLeftRight, ShieldCheck, Coins, LineChart, Network]

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
            <HighlightSI text={p} className="text-blue-600" />
          </p>
        ))}
    </div>
  )
}

/** Technology capability catalogue for the capital-markets transaction
    lifecycle, same grouped-list grammar as ServicesGrid, but Lake-Blue
    accented to read as the page's dedicated "technology" register (and to
    match the Technology division's own brand colour). */
export default function CapitalMarketsTechnology() {
  const { t } = useI18n()
  const tech = t.capitalMarketsPage.technology

  return (
    <section id="technology" className="relative overflow-hidden bg-mist py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-blue-600">
          {tech.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-green sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {tech.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={tech.intro} className="leading-relaxed text-text-secondary" />
        </Reveal>
        <Reveal
          delay={200}
          className="mt-6 max-w-2xl rounded-2xl border border-blue-100 bg-blue-50 p-5"
        >
          <p className="text-sm font-semibold italic leading-relaxed text-blue-600 sm:text-base">
            {tech.emphasis}
          </p>
        </Reveal>

        <div className="mt-14 border-t border-border sm:mt-16">
          {tech.groups.map((group, gi) => {
            const Icon = GROUP_ICONS[gi]
            return (
              <Reveal
                key={group.title}
                delay={gi * 30}
                className="block border-b border-border py-10 first:pt-8"
              >
                <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-10">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="size-[18px]" strokeWidth={2} />
                    </span>
                    <div className="flex items-baseline gap-2 lg:flex-col lg:items-start lg:gap-1">
                      <span className="font-mono text-xs text-slate-300">{String(gi + 1).padStart(2, "0")}</span>
                      <h3 className="text-[20px] leading-[28px] font-semibold text-basalt lg:text-[24px] lg:leading-[32px]">{group.title}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {group.intro && (
                      <p className="pb-4 text-sm leading-relaxed text-text-secondary">{group.intro}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-white px-3.5 py-2 text-[13px] font-semibold text-basalt"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {group.note && (
                      <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-text-secondary">
                        {group.note}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal
          delay={200}
          className="mt-10 text-center text-lg font-extrabold italic leading-snug tracking-tight text-blue-600 sm:text-xl"
        >
          {tech.closing}
        </Reveal>
      </div>
    </section>
  )
}
