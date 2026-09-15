import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Cpu,
  PiggyBank,
  Landmark,
  Users,
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
  Briefcase,
  Code2,
} from "lucide-react"
import { Reveal, wrap, usePrefersReducedMotion } from "../../lib/motion"
import Motif from "../../components/Motif"
import { useI18n, type Content } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"

type Sector = Content["training"]["sectors"][number]
type SectorProps = { sector: Sector; cta: string; hint: string }

const RESPONSIBILITY_IMAGES = [
  "https://images.unsplash.com/photo-1645736593731-4eef033ac37a?w=500&h=320&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1573164574511-73c773193279?w=500&h=320&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=320&fit=crop&auto=format",
]

const THEME: Record<string, "technology" | "capitalMarkets" | "softSkills" | "financialLiteracy"> = {
  technology: "technology",
  capitalMarkets: "capitalMarkets",
  softSkills: "softSkills",
  financialLiteracy: "financialLiteracy",
}

/** Sectors are keyed (sector.key) rather than positional, so this stays
    correct as sectors are added, removed, or reordered in i18n.tsx. Each
    theme keeps its own distinct colour, layout, and training-list shape;
    unrecognised keys fall back to the Capital Markets treatment so nothing
    silently disappears if a new sector is added without a matching theme. */
export default function TrainingSectors() {
  const { t } = useI18n()
  const tr = t.training

  return (
    <>
      {tr.sectors.map((sector) => {
        const theme = THEME[sector.key] ?? "capitalMarkets"
        const props: SectorProps = { sector, cta: tr.sectorsCta, hint: tr.sectorsHint }
        if (theme === "technology") return <TechnologySector key={sector.key} {...props} />
        if (theme === "softSkills") return <SoftSkillsSector key={sector.key} {...props} />
        if (theme === "financialLiteracy") return <FinancialLiteracySector key={sector.key} {...props} />
        return <CapitalMarketsSector key={sector.key} {...props} />
      })}
    </>
  )
}

/* Technology dark console feel, trainings as an independent-height tile
   masonry so each can expand to show its own description without stretching
   its neighbour. */
function TechnologySector({ sector, cta, hint }: SectorProps) {
  const [open, setOpen] = useState<number | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: "linear-gradient(300deg, rgba(30,58,138,0.45) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.6) 1px, transparent 1.4px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className={`${wrap} relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16`}>
        <Reveal variant="left" className="lg:sticky lg:top-24">
          <div className="relative mb-6 h-40 overflow-hidden rounded-2xl sm:h-48">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop&auto=format"
              alt=""
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-slate-950 via-blue-950/20 to-transparent"
            />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            {sector.eyebrow}
          </span>
          <span className="mt-5 grid size-12 place-items-center rounded-2xl bg-blue-500/15 text-blue-300">
            <Cpu className="size-5" strokeWidth={1.8} />
          </span>
          <h2 className="mt-5 font-display text-[26px] font-extrabold leading-tight tracking-tight sm:text-[36px] lg:text-[42px]">
            {sector.title}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/65 sm:text-lg">{sector.desc}</p>
          <Link
            to="/contact"
            className="group press shine mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-blue-700 transition-all hover:-translate-y-0.5"
          >
            {cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/40">{hint}</p>
          <div className="mt-4 columns-1 gap-4 sm:columns-2">
            {sector.trainings.map((training, i) => {
              const isOpen = open === i
              return (
                <div
                  key={training.title}
                  className={`mb-4 break-inside-avoid rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-blue-400 bg-blue-500/15"
                      : "border-white/10 bg-white/[0.03] hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="press flex w-full items-start gap-3 p-5 text-left"
                  >
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-lg transition-colors ${
                        isOpen ? "bg-blue-400 text-slate-950" : "bg-white/10 text-white/40"
                      }`}
                    >
                      <Check className="size-4" strokeWidth={2.5} />
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-bold leading-snug">{training.title}</span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-white/40 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid ${reducedMotion ? "" : "transition-[grid-template-rows] duration-300 ease-out"} ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 pl-16">
                        <p className="text-sm leading-relaxed text-white/60">{training.desc}</p>
                        {training.bullets && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {training.bullets.map((b) => (
                              <span
                                key={b}
                                className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-semibold text-white/70"
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

          {sector.byResponsibility && (
            <div className="mt-10 border-t border-white/10 pt-10">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/40">
                Technology Training by Responsibility
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {sector.byResponsibility.map((level, i) => {
                  const RespIcon = [ShieldCheck, Briefcase, Code2][i] ?? ShieldCheck
                  return (
                    <div
                      key={level.title}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-200 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
                    >
                      <div className="relative h-24 overflow-hidden">
                        <img
                          src={RESPONSIBILITY_IMAGES[i] ?? RESPONSIBILITY_IMAGES[0]}
                          alt=""
                          className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                        <span className="absolute bottom-2 left-2 grid size-8 place-items-center rounded-lg bg-blue-500/25 text-blue-200 backdrop-blur-sm">
                          <RespIcon className="size-4" strokeWidth={1.8} />
                        </span>
                      </div>
                      <div className="p-5">
                        <p className="text-sm font-bold text-white">{level.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-white/55">{level.desc}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {level.points.map((p) => (
                            <span
                              key={p}
                              className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold text-blue-200"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {sector.buildTraining && (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <h4 className="text-base font-extrabold leading-tight text-white">
                {sector.buildTraining.heading}
              </h4>
              <div className="mt-2.5">
                <Paragraphs text={sector.buildTraining.intro} className="text-sm leading-relaxed text-white/60" />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/[0.04] p-5">
                  <p className="text-sm font-bold text-blue-300">{sector.buildTraining.technical.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                    {sector.buildTraining.technical.desc}
                  </p>
                </div>
                <div className="rounded-xl bg-white/[0.04] p-5">
                  <p className="text-sm font-bold text-blue-300">{sector.buildTraining.operational.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                    {sector.buildTraining.operational.desc}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <Paragraphs
                  text={sector.buildTraining.closing}
                  className="text-sm leading-relaxed text-white/60"
                />
              </div>
              <p className="mt-4 text-sm font-bold italic text-blue-200">{sector.buildTraining.tagline}</p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}

/* Capital Markets the firm's own brand navy, a formal numbered accordion. */
function CapitalMarketsSector({ sector, cta, hint }: SectorProps) {
  const [open, setOpen] = useState<number | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(7,89,133,0.9) 1px, transparent 1.4px)",
          backgroundSize: "26px 26px",
        }}
      />
      <Motif variant="markets" className="text-sky-700" />
      <div className={`${wrap} relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16`}>
        <Reveal variant="left" className="lg:sticky lg:top-24">
          <div className="relative mb-6 h-40 overflow-hidden rounded-2xl sm:h-48">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop&auto=format"
              alt=""
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-800">
            {sector.eyebrow}
          </span>
          <span className="mt-5 grid size-12 place-items-center rounded-2xl bg-sky-50 text-sky-700">
            <Landmark className="size-5" strokeWidth={1.8} />
          </span>
          <h2 className="mt-5 font-display text-[26px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[42px]">
            {sector.title}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-600 sm:text-lg">{sector.desc}</p>
          <Link
            to="/contact"
            className="group press shine mt-7 inline-flex items-center gap-2 rounded-lg bg-sky-800 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-sky-700"
          >
            {cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal
          variant="right"
          delay={120}
          className="rounded-3xl border border-slate-200 bg-white p-2 shadow-sm sm:p-3"
        >
          <p className="px-3.5 pt-3.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            {hint}
          </p>
          <div className="mt-1 flex flex-col">
            {sector.trainings.map((training, i) => {
              const isOpen = open === i
              return (
                <div key={training.title} className="border-t border-slate-100 first:border-t-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={`group/row press flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition-colors ${
                      isOpen ? "bg-sky-50" : "hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`font-mono text-sm transition-colors ${isOpen ? "text-sky-700" : "text-slate-300 group-hover/row:text-sky-700"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 text-sm font-semibold ${isOpen ? "text-slate-900" : "text-slate-700"}`}>
                      {training.title}
                    </span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-slate-300 transition-all group-hover/row:translate-y-0.5 ${isOpen ? "rotate-180 text-sky-700" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid ${reducedMotion ? "" : "transition-[grid-template-rows] duration-300 ease-out"} ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-5 pl-[3.5rem]">
                        <p className="text-sm leading-relaxed text-slate-600">{training.desc}</p>
                        {training.bullets && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {training.bullets.map((b) => (
                              <span
                                key={b}
                                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
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

          {sector.moreLabel && (
            <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
              <p className="text-sm leading-relaxed text-slate-700">{sector.moreLabel}</p>
              {sector.moreCta && sector.moreLink && (
                <Link
                  to={sector.moreLink}
                  className="group/more mt-3 inline-flex items-center gap-2 text-sm font-bold text-sky-800 transition-colors hover:text-sky-700"
                >
                  {sector.moreCta}
                  <ArrowRight className="size-3.5 transition-transform group-hover/more:translate-x-1" />
                </Link>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}

/* Soft Skills light and warm, a badge cluster with a single shared detail
   panel (expanding a badge in place would break the flowing cluster). */
function SoftSkillsSector({ sector, cta, hint }: SectorProps) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-stone-50 py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(29,78,216,0.8) 1px, transparent 1.4px)",
          backgroundSize: "26px 26px",
        }}
      />
      <Motif variant="network" className="text-blue-700" />
      <div className={`${wrap} relative grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16`}>
        <Reveal variant="left">
          <div className="relative mb-6 h-40 overflow-hidden rounded-2xl sm:h-48">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&auto=format"
              alt=""
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
            {sector.eyebrow}
          </span>
          <span className="mt-5 grid size-12 place-items-center rounded-2xl bg-blue-50 text-blue-700">
            <Users className="size-5" strokeWidth={1.8} />
          </span>
          <h2 className="mt-5 font-display text-[26px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[42px]">
            {sector.title}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-600 sm:text-lg">{sector.desc}</p>
          {sector.tagline && (
            <p className="mt-4 max-w-md text-base font-extrabold leading-snug tracking-tight text-blue-700">
              {sector.tagline}
            </p>
          )}
          <Link
            to="/contact"
            className="group press shine mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-blue-600"
          >
            {cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{hint}</p>
          <div className="mt-4 flex flex-wrap gap-3.5">
            {sector.trainings.map((training, i) => {
              const isActive = active === i
              return (
                <button
                  key={training.title}
                  onClick={() => setActive(isActive ? null : i)}
                  aria-pressed={isActive}
                  className={`press flex items-center gap-2.5 rounded-2xl border-2 px-5 py-[18px] text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "border-blue-700 bg-blue-700 text-white shadow-lg shadow-blue-700/20"
                      : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:shadow-blue-900/5"
                  }`}
                >
                  <span
                    className={`grid size-6 shrink-0 place-items-center rounded-full transition-colors ${
                      isActive ? "bg-white text-blue-700" : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {training.title}
                </button>
              )
            })}
          </div>

          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              active !== null ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              {active !== null && (
                <div className="mt-4 rounded-2xl border-2 border-blue-100 bg-white p-5">
                  <p className="text-sm font-bold text-blue-700">{sector.trainings[active].title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{sector.trainings[active].desc}</p>
                  {sector.trainings[active].bullets && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {sector.trainings[active].bullets!.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* Financial Literacy light, centered, trust-and-growth palette. Kept for
   when a sector with this key is present. */
function FinancialLiteracySector({ sector, cta, hint }: SectorProps) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <Motif variant="training" className="text-emerald-700" />
      <div className={`${wrap} relative mx-auto max-w-2xl text-center`}>
        <Reveal className="flex flex-col items-center">
          <span className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
            <PiggyBank className="size-5" strokeWidth={1.8} />
          </span>
          <h2 className="mt-5 font-display text-[26px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[42px]">
            {sector.title}
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600 sm:text-lg">{sector.desc}</p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{hint}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            {sector.trainings.map((training, i) => {
              const isActive = active === i
              return (
                <button
                  key={training.title}
                  onClick={() => setActive(isActive ? null : i)}
                  aria-pressed={isActive}
                  className={`press inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-emerald-700 bg-emerald-700 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
                  }`}
                >
                  {training.title}
                </button>
              )
            })}
          </div>

          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              active !== null ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              {active !== null && (
                <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-slate-600">
                  {sector.trainings[active].desc}
                </p>
              )}
            </div>
          </div>

          <Link
            to="/contact"
            className="group press shine mt-9 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-amber-400"
          >
            {cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
