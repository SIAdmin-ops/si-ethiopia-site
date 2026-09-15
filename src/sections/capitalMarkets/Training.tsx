import { ArrowRight, GraduationCap, Users, UserCog, Briefcase, User } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { HighlightSI } from "../../lib/highlightSI"

const LEVEL_ICONS = [Users, UserCog, Briefcase, User]
const LEVEL_IMAGES = [
  "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=500&h=320&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1655720357872-ce227e4164ba?w=500&h=320&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=320&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1573164574397-dd250bc8a598?w=500&h=320&fit=crop&auto=format",
]

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

/** Capital-markets training deep dive: subject coverage, audience-level
    tailoring, and a governance-specific spotlight, closing on a CTA to the
    dedicated Training division page. Blue-accented to read as this page's
    "training" register, matching the Training division's brand color. */
export default function CapitalMarketsTraining() {
  const { t } = useI18n()
  const tr = t.capitalMarketsPage.training

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-blue-600">
          {tr.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[40px] lg:text-[46px]"
        >
          {tr.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={tr.intro} className="leading-relaxed text-slate-600" />
        </Reveal>

        {/* training areas */}
        <Reveal delay={200} className="mt-12">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{tr.areasLabel}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tr.areas.map((area, i) => (
              <div
                key={area}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4"
              >
                <span className="font-mono text-xs font-bold text-blue-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold leading-snug text-slate-800">{area}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* training appropriate to your responsibility */}
        <Reveal delay={220} className="mt-16">
          <h3 className="text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
            {tr.responsibility.heading}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {tr.responsibility.intro}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tr.responsibility.levels.map((level, i) => {
              const Icon = LEVEL_ICONS[i]
              return (
                <div
                  key={level.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10"
                >
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={LEVEL_IMAGES[i]}
                      alt=""
                      className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 grid size-9 place-items-center rounded-xl bg-white/95 text-blue-600 shadow-sm backdrop-blur-sm">
                      <Icon className="size-[18px]" strokeWidth={2} />
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-extrabold leading-tight text-slate-900">
                      {level.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{level.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-6 text-sm font-semibold italic leading-relaxed text-blue-700 sm:text-base">
            {tr.responsibility.tagline}
          </p>
        </Reveal>

        {/* governance spotlight */}
        <Reveal
          delay={240}
          className="mt-16 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10"
        >
          <h3 className="max-w-xl font-sans text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">
            {tr.governance.heading}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            {tr.governance.intro}
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-white/40">{tr.governance.lead}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tr.governance.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[13px] font-semibold text-white/85"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">{tr.governance.closing}</p>
          <p className="mt-3 max-w-2xl text-sm font-semibold italic leading-relaxed text-blue-300 sm:text-base">
            {tr.governance.tagline}
          </p>
        </Reveal>

        <Reveal delay={260} className="mt-12 flex justify-center">
          <Link
            to="/training"
            className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-blue-700/20 transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-700/30"
          >
            <GraduationCap className="size-4" strokeWidth={2} />
            {tr.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
