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
          <span className="h-px w-8 bg-indigo-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-indigo-600">
            {c.eyebrow}
          </span>
          <span className="h-px w-8 bg-indigo-600" />
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-[40px] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-[56px] lg:text-[72px]">
            {c.heading}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            {c.desc}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
