import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"

/** Highland Green figure strip directly under the hero. The figures are the
    ones already published on the About page (`aboutPage.ourStory.stats`). */
export default function StatStrip() {
  const { t } = useI18n()
  const stats = t.aboutPage.ourStory.stats
  return (
    <section aria-label="SIC at a glance" className="bg-green text-white">
      <div className={`${wrap} grid grid-cols-1 divide-y divide-white/20 py-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-0`}>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="flex flex-col items-center gap-1 px-6 py-6 text-center sm:py-10">
            <span className="font-display text-[40px] font-bold leading-[48px] tracking-tight text-gold">{s.value}</span>
            <span className="text-[15px] font-medium text-white/80">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
