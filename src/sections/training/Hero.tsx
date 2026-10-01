import { ArrowRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"

export default function TrainingHero() {
  const { t } = useI18n()
  const h = t.training.hero

  return (
    <section id="top" className="relative -mt-[68px] overflow-hidden text-white">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=900&fit=crop&auto=format"
          alt=""
          className="hero-zoom absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(120deg, rgba(14,31,33,0.9) 0%, rgba(11,79,85,0.85) 100%)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.5) 1px, transparent 1.4px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      {/* On mobile, CTAs move directly after the heading, ahead of body copy,
          the focus-point checklist and the tagline, so the primary action is
          reachable immediately; desktop keeps the original order (CTAs last). */}
      <div className={`${wrap} relative flex flex-col gap-9 py-16 sm:gap-10 sm:py-24 lg:py-32`}>
        <Reveal className="order-1 inline-flex w-fit items-center rounded-full border border-amber-300/60 bg-amber-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.66px] text-amber-100">
          {h.tag}
        </Reveal>
        <Reveal
          as="h1"
          delay={80}
          className="order-2 max-w-3xl font-display text-[28px] leading-[36px] font-bold tracking-tight sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px]"
        >
          {h.heading}
        </Reveal>

        <Reveal delay={260} className="order-3 flex flex-wrap gap-3 sm:order-6">
          <a
            href="#programmes"
            className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-gold-text shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/25"
          >
            {h.ctaPrimary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            to="/financial-literacy"
            className="group press inline-flex items-center justify-center gap-2 rounded-lg border border-amber-300/60 bg-amber-500/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-amber-200 hover:bg-amber-500/20"
          >
            {h.ctaTertiary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group press inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white/10"
          >
            {h.ctaSecondary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={140} className="order-4 max-w-2xl sm:order-3">
          <Paragraphs text={h.body} className="text-base leading-relaxed text-amber-50/85 sm:text-lg" highlightClassName="text-amber-200" />
        </Reveal>

        <Reveal delay={180} className="order-5 max-w-2xl sm:order-4">
          <p className="text-sm font-semibold text-amber-100">{h.focusIntro}</p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {h.focusPoints.map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-sm leading-snug text-white/90">
                <Check className="size-4 shrink-0 text-gold" strokeWidth={2.5} />
                {point}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={220}
          className="order-6 max-w-2xl font-sans text-xl font-extrabold leading-snug tracking-tight text-white sm:order-5 sm:text-2xl"
        >
          {h.tagline}
        </Reveal>
      </div>
    </section>
  )
}
