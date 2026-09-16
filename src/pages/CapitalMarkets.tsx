import { GraduationCap, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import PageIntro from "../components/PageIntro"
import Hero from "../sections/Hero"
import Pillars from "../sections/Pillars"
import Consulting from "../sections/Consulting"
import Approach from "../sections/capitalMarkets/Approach"
import Regulatory from "../sections/capitalMarkets/Regulatory"
import CapitalMarketsTechnology from "../sections/capitalMarkets/Technology"
import CapitalMarketsTraining from "../sections/capitalMarkets/Training"
import ServicesGrid from "../sections/ServicesGrid"
import Contact from "../sections/Contact"
import RelatedAreas from "../sections/RelatedAreas"
import FinalCta from "../sections/FinalCta"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"
import { HighlightSI } from "../lib/highlightSI"
import { useSeo } from "../lib/useSeo"

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
            <HighlightSI text={p} className="text-amber-100" />
          </p>
        ))}
    </div>
  )
}

export default function CapitalMarkets() {
  const { t } = useI18n()
  const m = t.capitalMarketsPage
  useSeo(
    "Capital Markets Advisory",
    "End-to-end capital markets advisory in Ethiopia — feasibility, licensing, business and operating model design, and market-infrastructure delivery from SIC.",
    "/capital-markets",
  )

  return (
    <>
      <Hero />
      <Pillars />
      <Consulting />

      <PageIntro
        eyebrow={m.eyebrow}
        heading={m.heading}
        gradient="linear-gradient(120deg, #5b4508 0%, #9e780d 100%)"
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {m.journey.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={160 + i * 80}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-white/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-extrabold leading-tight text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{item.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal
          delay={420}
          className="mt-8 max-w-2xl text-base font-semibold leading-relaxed text-white sm:text-lg"
        >
          {m.journey.closing}
        </Reveal>
      </PageIntro>

      <Regulatory />

      {/* academy teaser */}
      <section className="bg-white py-16 sm:py-20">
        <Reveal
          className={`${wrap} flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-amber-600 to-emerald-700 p-8 text-center text-white sm:p-12`}
        >
          <span className="grid size-12 place-items-center rounded-2xl bg-white/15">
            <GraduationCap className="size-6" strokeWidth={2} />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.66px] text-amber-100">
            {m.academy.eyebrow}
          </span>
          <h2 className="max-w-xl font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            {m.academy.heading}
          </h2>
          <Paragraphs text={m.academy.body} className="max-w-lg text-white/85" />
          <p className="max-w-lg text-base font-extrabold italic leading-snug tracking-tight text-white sm:text-lg">
            {m.academy.tagline}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/training"
              className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-amber-800 transition-all hover:-translate-y-0.5"
            >
              {m.academy.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group press inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white/10"
            >
              {m.academy.ctaSecondary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Approach />
      <ServicesGrid />
      <CapitalMarketsTechnology />
      <CapitalMarketsTraining />
      <Contact />
      <RelatedAreas current={0} />
      <FinalCta />
    </>
  )
}
