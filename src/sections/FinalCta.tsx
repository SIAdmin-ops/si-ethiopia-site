import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"

export default function FinalCta() {
  const { t } = useI18n()
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundImage: "linear-gradient(120deg, #5b4508 0%, #c49610 100%)" }}
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
      <div className={`${wrap} relative py-20 text-center sm:py-24`}>
        <Reveal
          as="h2"
          className="mx-auto max-w-2xl font-sans text-[32px] font-extrabold leading-tight tracking-tight sm:text-[52px]"
        >
          {t.finalCta.heading}
        </Reveal>
        <Reveal as="p" delay={80} className="mx-auto mt-4 max-w-xl text-white/80">
          {t.finalCta.sub}
        </Reveal>
        <Reveal delay={160} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-amber-800 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/25"
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
