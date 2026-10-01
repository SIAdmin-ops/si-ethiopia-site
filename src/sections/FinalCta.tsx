import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"

export default function FinalCta() {
  const { t } = useI18n()
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundImage: "linear-gradient(120deg, #0e1f21 0%, #0b4f55 100%)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.6) 1px, transparent 1.4px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className={`${wrap} relative py-16 text-center sm:py-24`}>
        <Reveal
          as="h2"
          className="mx-auto max-w-2xl font-sans text-[24px] leading-[32px] font-bold tracking-tight sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {t.finalCta.heading}
        </Reveal>
        <Reveal as="p" delay={80} className="mx-auto mt-4 max-w-xl text-white/80">
          {t.finalCta.sub}
        </Reveal>
        <Reveal delay={160} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-ink shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/25"
          >
            {t.finalCta.contactPartners}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="press inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white/10"
          >
            {t.finalCta.scheduleCall}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
