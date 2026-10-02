import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"

/** Minimal "large title + whitespace, no photo" opening, the one hero
    pattern the site hadn't used yet. No image, no card, just type and room
    to breathe before the form/info section below. */
export default function ContactHero() {
  const { t } = useI18n()
  const c = t.contact

  return (
    <section className="relative bg-white pb-4 pt-32 sm:pb-8 sm:pt-40 lg:pt-48">
      <div className={`${wrap} flex flex-col items-center text-center`}>
        <Reveal className="inline-flex items-center gap-2.5">
          <span className="h-px w-8 bg-teal-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-green">
            {c.eyebrow}
          </span>
          <span className="h-px w-8 bg-teal-600" />
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-[28px] leading-[36px] font-bold tracking-tight text-green sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px]">
            {c.heading}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            {c.desc}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
