import { ArrowRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"

export default function TrainingHero() {
  const { t } = useI18n()
  const h = t.training.hero

  return (
    <section id="top" className="relative overflow-hidden text-white">
      <div aria-hidden className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=900&fit=crop&auto=format"
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(120deg, rgba(30,58,138,0.9) 0%, rgba(2,132,199,0.85) 100%)" }}
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

      <div className={`${wrap} relative flex flex-col gap-9 py-24 sm:gap-10 sm:py-32 lg:py-40`}>
        <Reveal className="inline-flex w-fit items-center rounded-full border border-sky-300/60 bg-sky-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.66px] text-sky-100">
          {h.tag}
        </Reveal>
        <Reveal
          as="h1"
          delay={80}
          className="max-w-3xl font-display text-[36px] font-extrabold leading-[1.1] tracking-tight sm:text-[52px] lg:text-[64px]"
        >
          {h.heading}
        </Reveal>
        <Reveal delay={140} className="max-w-2xl">
          <Paragraphs text={h.body} className="text-base leading-relaxed text-sky-50/85 sm:text-lg" highlightClassName="text-sky-200" />
        </Reveal>

        <Reveal delay={180} className="max-w-2xl">
          <p className="text-sm font-semibold text-sky-100">{h.focusIntro}</p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {h.focusPoints.map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-sm leading-snug text-white/90">
                <Check className="size-4 shrink-0 text-sky-300" strokeWidth={2.5} />
                {point}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={220}
          className="max-w-2xl font-sans text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl"
        >
          {h.tagline}
        </Reveal>

        <Reveal delay={260} className="flex flex-wrap gap-3">
          <a
            href="#programmes"
            className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-blue-800 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/25"
          >
            {h.ctaPrimary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            to="/financial-literacy"
            className="group press inline-flex items-center justify-center gap-2 rounded-lg border border-sky-300/60 bg-sky-500/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-sky-200 hover:bg-sky-500/20"
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
      </div>
    </section>
  )
}
