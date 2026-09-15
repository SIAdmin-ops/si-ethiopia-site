import {
  Presentation,
  Users2,
  Lightbulb,
  Monitor,
  BadgeCheck,
  UserCheck,
  Wrench,
  Repeat,
  BookOpen,
  Target,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  RefreshCw,
} from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"

const METHOD_ICONS = [Presentation, Users2, Lightbulb, Monitor, BadgeCheck, UserCheck, Wrench, Repeat, BookOpen]
const PRINCIPLE_ICONS = [Target, ShieldCheck, Globe2, CheckCircle2, RefreshCw]

/** "How We Deliver Training", delivery methods, training embedded across
    an engagement's lifecycle, our training principles, and a short quality
    statement. Compact grouped-chip / numbered-row grammar matching the
    ServicesGrid.tsx / capitalMarkets/Technology.tsx pattern used elsewhere
    this session. */
export default function TrainingDelivery() {
  const { t } = useI18n()
  const d = t.training.delivery

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-blue-600">
          {d.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[26px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[44px]"
        >
          {d.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-slate-600 sm:text-lg">
          {d.intro}
        </Reveal>

        {/* compact icon list rather than 9 same-weight cards */}
        <Reveal delay={180} className="mt-9 grid gap-x-8 gap-y-6 border-t border-slate-200 pt-7 sm:grid-cols-2 lg:grid-cols-3">
          {d.methods.map((m, i) => {
            const MethodIcon = METHOD_ICONS[i] ?? Presentation
            return (
              <div key={m.title} className="group flex items-start gap-3.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700 transition-colors duration-200 group-hover:bg-blue-700 group-hover:text-white">
                  <MethodIcon className="size-4" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">{m.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{m.desc}</p>
                </div>
              </div>
            )
          })}
        </Reveal>

        {/* training embedded in delivery */}
        <Reveal delay={220} className="relative mt-20 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:mt-24 sm:p-10">
          <div aria-hidden className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&h=900&fit=crop&auto=format"
              alt=""
              className="absolute inset-0 size-full object-cover opacity-20"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.88) 100%)",
              }}
            />
          </div>
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.66px] text-blue-300">
              {d.embeddedEyebrow}
            </p>
            <h3 className="mt-3 font-sans text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">
              {d.embeddedHeading}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">{d.embeddedIntro}</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.embedded.map((e, i) => (
                <div key={e.stage} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="font-mono text-xs text-blue-300">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-1.5 text-sm font-bold text-white">{e.stage}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{e.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm font-semibold italic leading-relaxed text-blue-200 sm:text-base">
              {d.embeddedTagline}
            </p>
          </div>
        </Reveal>

        {/* training principles */}
        <Reveal delay={260} className="mt-20 sm:mt-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.66px] text-blue-600">
            {d.principlesEyebrow}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.principles.map((p, i) => {
              const PrincipleIcon = PRINCIPLE_ICONS[i] ?? Target
              return (
                <div
                  key={p.title}
                  className="group rounded-2xl border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md hover:shadow-blue-900/5"
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-blue-700 transition-colors duration-200 group-hover:bg-blue-700 group-hover:text-white">
                    <PrincipleIcon className="size-[18px]" strokeWidth={1.8} />
                  </span>
                  <p className="mt-3 text-sm font-extrabold text-slate-900">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* quality & client service */}
        <Reveal delay={300} className="mt-20 rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:mt-24 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.66px] text-blue-600">
            {d.qualityEyebrow}
          </p>
          <h3 className="mt-3 max-w-2xl font-sans text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl">
            {d.qualityHeading}
          </h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {d.qualityItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">{d.qualityClosing}</p>
        </Reveal>
      </div>
    </section>
  )
}
