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
    <section className="bg-white py-24 sm:py-32">
      <div className={wrap}>
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-indigo-600">
            {v.eyebrow}
          </span>
          <h2 className="font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[40px] lg:text-[46px]">
            {v.heading}
          </h2>
          <p className="leading-relaxed text-slate-600">{v.sub}</p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-10 border-t border-slate-200 pt-10 sm:grid-cols-2">
          {v.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={item.title} delay={i * 60} className="group flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-200 group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon className="icon-pop size-[18px]" strokeWidth={2.2} />
                </span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-slate-300">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
