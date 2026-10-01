import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"

export default function OurStory() {
  const { t } = useI18n()
  const s = t.aboutPage.ourStory

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className={`${wrap} relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16`}>
        <Reveal variant="left" className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.66px] text-teal-600">
              <span className="h-px w-8 bg-teal-600" />
              {s.eyebrow}
            </span>
            <h2 className="font-display text-[24px] leading-[32px] font-bold tracking-tight text-slate-900 sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]">
              {s.heading}
            </h2>
          </div>
          <p className="leading-relaxed text-slate-600 sm:text-lg">{s.body1}</p>
          <p className="leading-relaxed text-slate-600 sm:text-lg">{s.body2}</p>
          <p className="leading-relaxed text-slate-600 sm:text-lg">
            {s.parentPrefix}
            <a
              href="https://strategy-innovations.com"
              target="_blank"
              rel="noopener"
              className="text-teal-600 underline-offset-2 hover:underline"
            >
              Strategy Innovations
            </a>
            {s.parentSuffix}
          </p>
        </Reveal>

        <Reveal variant="right" delay={120} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=700&fit=crop&auto=format"
              alt=""
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-transparent to-transparent"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-6 -right-6 -z-10 hidden size-40 rounded-2xl bg-teal-50 sm:block"
          />
        </Reveal>
      </div>
    </section>
  )
}
