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
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      <div aria-hidden className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=1000&fit=crop&auto=format"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-30"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.88) 45%, rgba(2,6,23,0.97) 100%), radial-gradient(55% 70% at 100% 0%, rgba(37,99,235,0.25) 0%, transparent 55%), radial-gradient(45% 60% at 0% 100%, rgba(2,132,199,0.18) 0%, transparent 50%)",
          }}
        />
      </div>
      <div className={`${wrap} relative`}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-blue-300">
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
          <Paragraphs text={a.body} className="leading-relaxed text-white/65" highlightClassName="text-blue-300" />
        </Reveal>

        <Reveal
          delay={180}
          className="mt-10 max-w-2xl rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-7 sm:p-9"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-blue-300">{a.outcomeEyebrow}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-white/70 sm:text-base">{a.outcomeBody}</p>
          <div className="mt-6">
            <FlowChips
              steps={a.flow}
              chipClassName="border-blue-400/30 bg-blue-500/10 text-blue-200"
              arrowClassName="text-white/25"
            />
          </div>
          <p className="mt-7 text-sm font-semibold text-white/70">{a.questionsIntro}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {a.questions.map((q) => (
              <li key={q} className="text-sm leading-relaxed text-white/60">
                {q}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={220}
          className="mt-8 max-w-2xl text-lg font-extrabold italic leading-snug tracking-tight text-blue-200 sm:text-xl"
        >
          {a.tagline}
        </Reveal>

        <Reveal delay={260} className="mt-16 border-t border-white/10 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.66px] text-blue-300">
            {t.training.capabilitiesOverview.eyebrow}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            {t.training.capabilitiesOverview.intro}
          </p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.training.capabilitiesOverview.areas.map((area, i) => {
              const Icon = AREA_ICONS[i]
              return (
                <div
                  key={area.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-500/15 text-blue-300 transition-colors duration-200 group-hover:bg-blue-500/25 group-hover:text-blue-200">
                    <Icon className="size-[18px]" strokeWidth={1.8} />
                  </span>
                  <p className="mt-4 font-mono text-xs text-white/30">{String(i + 1).padStart(2, "0")}</p>
                  <h4 className="mt-1 text-sm font-extrabold leading-tight text-white">{area.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">{area.desc}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
