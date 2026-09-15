import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"
import FlowChips from "../../components/FlowChips"
import { glow } from "../../lib/glow"

/** "Our Approach" framework section, same flow-chip visual language as
    ServicesGrid.tsx's "From Requirement to Outcome" panel on the Capital
    Markets page, restated here with this page's own surrounding prose. */
export default function TechApproach() {
  const { t } = useI18n()
  const a = t.techPage.approach

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
      style={{ backgroundImage: glow("teal") }}
    >
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-teal-300">
          {a.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[28px] font-extrabold leading-tight tracking-tight sm:text-[40px] lg:text-[46px]"
        >
          {a.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={a.body} className="leading-relaxed text-white/65" highlightClassName="text-teal-300" />
        </Reveal>

        <Reveal delay={180} className="mt-6">
          <FlowChips
            steps={a.flow}
            chipClassName="border-teal-400/30 bg-teal-500/10 text-teal-200"
            arrowClassName="text-white/25"
          />
        </Reveal>

        <Reveal delay={210} className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          {a.closing}
        </Reveal>

        <Reveal
          delay={240}
          className="mt-8 max-w-2xl text-lg font-extrabold italic leading-snug tracking-tight text-teal-200 sm:text-xl"
        >
          {a.tagline}
        </Reveal>
      </div>
    </section>
  )
}
