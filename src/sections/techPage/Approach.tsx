import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"
import FlowChips from "../../components/FlowChips"

/** "Our Approach" framework section, same flow-chip visual language as
    ServicesGrid.tsx's "From Requirement to Outcome" panel on the Capital
    Markets page, restated here with this page's own surrounding prose. */
export default function TechApproach() {
  const { t } = useI18n()
  const a = t.techPage.approach

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-teal">
          {a.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-teal-deep sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {a.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={a.body} className="leading-relaxed text-text-secondary" highlightClassName="text-teal-deep" />
        </Reveal>

        <Reveal delay={180} className="mt-6">
          <FlowChips
            steps={a.flow}
            chipClassName="border-teal-100 bg-teal-50 text-teal-deep"
            arrowClassName="text-slate-300"
          />
        </Reveal>

        <Reveal delay={210} className="mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
          {a.closing}
        </Reveal>

        <Reveal
          delay={240}
          className="mt-8 max-w-2xl text-lg font-extrabold italic leading-snug tracking-tight text-teal-deep sm:text-xl"
        >
          {a.tagline}
        </Reveal>
      </div>
    </section>
  )
}
