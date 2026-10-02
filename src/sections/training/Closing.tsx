import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import FlowChips from "../../components/FlowChips"

/** "From Training to Capability", the closing section, mirroring the
    Technology page's Closing.tsx: two short flow chains (the training
    journey, and the wider SIC model), a tagline, and dual CTAs. */
export default function TrainingClosing() {
  const { t } = useI18n()
  const c = t.training.closing

  return (
    <section className="relative overflow-hidden bg-green py-16 sm:py-24">
      <div aria-hidden className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758270705290-62b6294dd044?w=1600&h=900&fit=crop&auto=format"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-10"
          loading="lazy"
        />
      </div>
      <div className={`${wrap} relative`}>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-7 text-center text-white">
          <h2 className="font-display text-[24px] leading-[32px] font-bold tracking-tight sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]">
            {c.heading}
          </h2>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">{c.body}</p>

          <div className="w-full">
            <p className="text-xs font-bold uppercase tracking-wider text-white/60">{c.journeyLabel}</p>
            <div className="mt-3 flex justify-center">
              <FlowChips
                steps={c.journeyFlow}
                chipClassName="border-white/30 bg-white/10 text-white"
                arrowClassName="text-white/40"
              />
            </div>
          </div>

          <div className="w-full">
            <p className="text-xs font-bold uppercase tracking-wider text-white/60">{c.modelLabel}</p>
            <div className="mt-3 flex justify-center">
              <FlowChips
                steps={c.modelFlow}
                chipClassName="border-white/30 bg-white/10 text-white"
                arrowClassName="text-white/40"
              />
            </div>
          </div>

          <p className="font-sans text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">{c.tagline}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#programmes"
              className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-basalt transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold/90"
            >
              {c.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/contact"
              className="group press inline-flex items-center justify-center gap-2 rounded-lg border border-white px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-white/10"
            >
              {c.ctaSecondary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
