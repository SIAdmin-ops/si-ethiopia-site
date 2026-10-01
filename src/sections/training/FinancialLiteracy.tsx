import { useState } from "react"
import { Link } from "react-router-dom"
import { GraduationCap, BadgeCheck, ArrowRight, ChevronDown, TrendingUp, PiggyBank, Building2 } from "lucide-react"
import { Reveal, wrap, usePrefersReducedMotion } from "../../lib/motion"
import { useI18n } from "../../i18n"

/** Flagship national-impact initiative: financial literacy for all
    Ethiopians, delivered with New Generation University College (NGUC).
    Each course expands in place to show its own description, matching the
    accordion pattern used across the sector sections above it. */
const JOURNEY_ICONS = [TrendingUp, PiggyBank, Building2]
const JOURNEY_IMAGES = [
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=320&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=500&h=320&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=320&fit=crop&auto=format",
]

export default function FinancialLiteracy() {
  const { t } = useI18n()
  const fl = t.training.financialLiteracy
  const [open, setOpen] = useState<number | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  return (
    <>
    <section
      id="top"
      className="relative -mt-[68px] overflow-hidden bg-gradient-to-br from-teal-800 via-teal-900 to-slate-950 py-16 pt-24 text-white sm:py-24 sm:pt-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.6) 1px, transparent 1.4px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className={`${wrap} relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center`}>
        <Reveal variant="left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            {fl.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-[24px] leading-[32px] font-bold tracking-tight sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]">
            {fl.heading}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-white/85 sm:text-lg">{fl.body}</p>
          <p className="mt-5 max-w-xl font-sans text-lg font-extrabold leading-snug tracking-tight text-white sm:text-xl">
            {fl.mission}
          </p>
          <p className="mt-3 max-w-xl text-xs italic text-white/60">{fl.disclaimer}</p>
          <Link
            to="/contact"
            className="group press shine mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[15px] font-bold uppercase tracking-wide text-gold-text transition-all hover:-translate-y-0.5"
          >
            {fl.ctaButton}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal
          variant="right"
          delay={120}
          className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="relative h-40 sm:h-48">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&h=500&fit=crop&auto=format"
              alt=""
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
            />
          </div>
          <div className="p-7 pt-6 sm:p-8 sm:pt-7">
          <div className="group flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white/15">
              <GraduationCap className="icon-pop size-5" strokeWidth={2} />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
                {fl.partnerLabel}
              </p>
              <p className="text-base font-bold leading-tight">{fl.partnerName}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <BadgeCheck className="size-4 shrink-0 text-gold" />
            {fl.accreditation}
          </div>
          <div className="mt-6 flex flex-col gap-2 border-t border-white/15 pt-6">
            {fl.courses.map((course, i) => {
              const isOpen = open === i
              return (
                <div
                  key={course.title}
                  className={`rounded-lg transition-colors ${isOpen ? "bg-white/15" : "hover:bg-white/[0.08]"}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group/row press flex w-full items-center gap-2 px-3.5 py-2.5 text-left"
                  >
                    <span className="min-w-0 flex-1 text-sm font-semibold">{course.title}</span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-white/50 transition-all group-hover/row:text-white/80 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid ${reducedMotion ? "" : "transition-[grid-template-rows] duration-300 ease-out"} ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-3.5 pb-3.5">
                        <p className="text-sm leading-relaxed text-white/70">{course.desc}</p>
                        {course.bullets && (
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {course.bullets.map((b) => (
                              <span
                                key={b}
                                className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/80"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          </div>
        </Reveal>
      </div>

    </section>

    {/* three financial education journeys */}
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className={`${wrap} relative`}>
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold-text">
            {fl.journeysLabel}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {fl.journeys.map((journey, i) => {
            const JourneyIcon = JOURNEY_ICONS[i] ?? TrendingUp
            return (
              <Reveal
                key={journey.title}
                delay={i * 80}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 transition-all duration-200 hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-lg hover:shadow-amber-900/5"
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={JOURNEY_IMAGES[i] ?? JOURNEY_IMAGES[0]}
                    alt=""
                    className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 grid size-9 place-items-center rounded-lg bg-white/95 text-gold-text shadow-sm backdrop-blur-sm">
                    <JourneyIcon className="size-[18px]" strokeWidth={1.8} />
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-[20px] leading-[28px] font-semibold text-slate-900 lg:text-[24px] lg:leading-[32px]">{journey.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{journey.intro}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {journey.points.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-gold-text"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>

    {/* deliver financial literacy to your community */}
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <div aria-hidden className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=900&fit=crop&auto=format"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-25"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(14,31,33,0.92) 0%, rgba(14,31,33,0.85) 50%, rgba(14,31,33,0.95) 100%)",
          }}
        />
      </div>
      <div className={`${wrap} relative`}>
        <Reveal className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/[0.05] p-8 text-center backdrop-blur-sm sm:p-10">
          <h3 className="font-sans text-[20px] leading-[28px] font-semibold tracking-tight text-white lg:text-[24px] lg:leading-[32px]">
            {fl.community.heading}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{fl.community.intro}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {fl.community.audiences.map((a) => (
              <span
                key={a}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[13px] font-semibold text-white/85"
              >
                {a}
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            className="group press shine mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[15px] font-bold uppercase tracking-wide text-gold-text transition-all hover:-translate-y-0.5"
          >
            {fl.community.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
    </>
  )
}
