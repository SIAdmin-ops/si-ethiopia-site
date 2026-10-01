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
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold-text">
          {d.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-slate-900 sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
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
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-amber-50 text-gold-text transition-colors duration-200 group-hover:bg-gold group-hover:text-white">
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
        <Reveal delay={220} className="relative mt-20 overflow-hidden rounded-2xl bg-slate-950 p-8 text-white sm:mt-24 sm:p-10">
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
                  "linear-gradient(180deg, rgba(14,31,33,0.92) 0%, rgba(14,31,33,0.88) 100%)",
              }}
            />
          </div>
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold">
              {d.embeddedEyebrow}
            </p>
            <h3 className="mt-3 font-sans text-[20px] leading-[28px] font-semibold tracking-tight lg:text-[24px] lg:leading-[32px]">
              {d.embeddedHeading}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">{d.embeddedIntro}</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.embedded.map((e, i) => (
                <div key={e.stage} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-1.5 text-sm font-bold text-white">{e.stage}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{e.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm font-semibold italic leading-relaxed text-amber-200 sm:text-base">
              {d.embeddedTagline}
            </p>
          </div>
        </Reveal>

        {/* training principles */}
        <Reveal delay={260} className="mt-20 sm:mt-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold-text">
            {d.principlesEyebrow}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.principles.map((p, i) => {
              const PrincipleIcon = PRINCIPLE_ICONS[i] ?? Target
              return (
                <div
                  key={p.title}
                  className="group rounded-2xl border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-200 hover:shadow-md hover:shadow-amber-900/5"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-amber-50 text-gold-text transition-colors duration-200 group-hover:bg-gold group-hover:text-white">
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
        <Reveal delay={300} className="mt-20 rounded-2xl border border-slate-200 bg-slate-50/60 p-8 sm:mt-24 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold-text">
            {d.qualityEyebrow}
          </p>
          <h3 className="mt-3 max-w-2xl font-sans text-[20px] leading-[28px] font-semibold tracking-tight text-slate-900 lg:text-[24px] lg:leading-[32px]">
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
