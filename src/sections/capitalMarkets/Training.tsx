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
            <HighlightSI text={p} className="text-gold-text" />
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
    <section id="training-programs" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold-text">
          {tr.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-slate-900 sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
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
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4"
              >
                <span className="font-mono text-xs font-bold text-gold-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold leading-snug text-slate-800">{area}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* training appropriate to your responsibility */}
        <Reveal delay={220} className="mt-16">
          <h3 className="text-[20px] leading-[28px] font-semibold text-slate-900 lg:text-[24px] lg:leading-[32px]">
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
                  className="group overflow-hidden rounded-2xl border border-slate-200 transition-[color,background-color,border-color,opacity,transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/10"
                >
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={LEVEL_IMAGES[i]}
                      alt=""
                      className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 grid size-9 place-items-center rounded-lg bg-white/95 text-gold-text shadow-sm backdrop-blur-sm">
                      <Icon className="size-[18px]" strokeWidth={2} />
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-[20px] leading-[28px] font-semibold text-slate-900 lg:text-[24px] lg:leading-[32px]">
                      {level.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{level.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-6 text-sm font-semibold italic leading-relaxed text-gold-text sm:text-base">
            {tr.responsibility.tagline}
          </p>
        </Reveal>

        {/* governance spotlight */}
        <Reveal
          delay={240}
          className="mt-16 rounded-2xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10"
        >
          <h3 className="max-w-xl font-sans text-[20px] leading-[28px] font-semibold tracking-tight lg:text-[24px] lg:leading-[32px]">
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
          <p className="mt-3 max-w-2xl text-sm font-semibold italic leading-relaxed text-gold sm:text-base">
            {tr.governance.tagline}
          </p>
        </Reveal>

        <Reveal delay={260} className="mt-12 flex justify-center">
          <Link
            to="/training"
            className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-green px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-green-hover"
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
