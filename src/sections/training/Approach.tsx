import { FileText, Cpu, PiggyBank, Users } from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"
import FlowChips from "../../components/FlowChips"

const AREA_ICONS = [FileText, Cpu, PiggyBank, Users]

/** "Our Approach to Training", same flow-chip framework statement pattern
    already used on the Capital Markets and Technology pages, restated here
    with training-specific prose. Blue-accented to match this division's
    brand color. */
export default function TrainingApproach() {
  const { t } = useI18n()
  const a = t.training.approach

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className={`${wrap} relative`}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold-text">
          {a.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-basalt sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {a.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={a.body} className="leading-relaxed text-text-secondary" highlightClassName="text-gold-text" />
        </Reveal>

        <Reveal
          delay={180}
          className="mt-10 max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 p-7 sm:p-9"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-gold-text">{a.outcomeEyebrow}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-text-secondary sm:text-base">{a.outcomeBody}</p>
          <div className="mt-6">
            <FlowChips
              steps={a.flow}
              chipClassName="border-amber-300 bg-white text-gold-text"
              arrowClassName="text-amber-300"
            />
          </div>
          <p className="mt-7 text-sm font-semibold text-text-secondary">{a.questionsIntro}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {a.questions.map((q) => (
              <li key={q} className="text-sm leading-relaxed text-text-secondary">
                {q}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={220}
          className="mt-8 max-w-2xl text-lg font-extrabold italic leading-snug tracking-tight text-gold-text sm:text-xl"
        >
          {a.tagline}
        </Reveal>

        <Reveal delay={260} className="mt-16 border-t border-border pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold-text">
            {t.training.capabilitiesOverview.eyebrow}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
            {t.training.capabilitiesOverview.intro}
          </p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.training.capabilitiesOverview.areas.map((area, i) => {
              const Icon = AREA_ICONS[i]
              return (
                <div
                  key={area.title}
                  className="group rounded-2xl border border-border bg-mist p-6 transition-[color,background-color,border-color,opacity,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50"
                >
                  <span className="grid size-10 place-items-center rounded-lg bg-amber-100 text-gold-text transition-colors duration-200 group-hover:bg-amber-200">
                    <Icon className="size-[18px]" strokeWidth={1.8} />
                  </span>
                  <p className="mt-4 font-mono text-xs text-text-secondary/60">{String(i + 1).padStart(2, "0")}</p>
                  <h4 className="mt-1 text-[20px] leading-[28px] font-semibold text-basalt lg:text-[24px] lg:leading-[32px]">{area.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary">{area.desc}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
