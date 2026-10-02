import { ShieldCheck, Award, Lightbulb, Users, ClipboardCheck, Heart, BookOpen, TrendingUp } from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"

const ICONS = [ShieldCheck, Award, Lightbulb, Users, ClipboardCheck, Heart, BookOpen, TrendingUp]

/** Numbered list rows rather than a repeated 8-card icon grid, matches the
    editorial-row grammar used elsewhere (Pillars, Regulatory, Divisions)
    instead of adding an eighth variant of "everything is a card." */
export default function OurValues() {
  const { t } = useI18n()
  const v = t.aboutPage.ourValues

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold-text">
            {v.eyebrow}
          </span>
          <h2 className="font-display text-[24px] leading-[32px] font-bold tracking-tight text-green sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]">
            {v.heading}
          </h2>
          <p className="leading-relaxed text-text-secondary">{v.sub}</p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-10 border-t border-border pt-10 sm:grid-cols-2">
          {v.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={item.title} delay={i * 60} className="group flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-green-tint text-green transition-colors duration-200 group-hover:bg-green group-hover:text-white">
                  <Icon className="icon-pop size-[18px]" strokeWidth={2.2} />
                </span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-sm font-bold text-green">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-[20px] leading-[28px] font-semibold text-basalt lg:text-[24px] lg:leading-[32px]">{item.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
