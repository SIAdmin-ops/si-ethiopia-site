import { BarChart3, Cpu, BookOpen, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"

const DIVISIONS_META = [
  { icon: BarChart3, route: "/capital-markets", accent: "amber" },
  { icon: Cpu, route: "/technology", accent: "teal" },
  { icon: BookOpen, route: "/training", accent: "blue" },
] as const

const ACCENT: Record<string, { chip: string; border: string }> = {
  amber: { chip: "bg-amber-50 text-amber-700", border: "hover:border-amber-300" },
  teal: { chip: "bg-teal-50 text-teal-700", border: "hover:border-teal-300" },
  blue: { chip: "bg-blue-50 text-blue-700", border: "hover:border-blue-300" },
}

/** Cross-links to the organization's other two divisions, appended near the
    end of each division page so a visitor exploring one area is one click
    from the others closing the loop the home page's Divisions section
    opens. Uses the same division data as `home/Divisions.tsx`. */
export default function RelatedAreas({ current }: { current: 0 | 1 | 2 }) {
  const { t } = useI18n()
  const items = t.home.divisions.items
    .map((item, i) => ({ item, i }))
    .filter(({ i }) => i !== current)

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className={wrap}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-slate-400" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-slate-500">
            {t.home.divisions.eyebrow}
          </span>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map(({ item, i }, idx) => {
            const meta = DIVISIONS_META[i]
            const Icon = meta.icon
            const a = ACCENT[meta.accent]
            return (
              <Reveal key={item.title} delay={idx * 100} className="min-w-0">
                <Link
                  to={meta.route}
                  className={`group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 ${a.border}`}
                >
                  <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${a.chip}`}>
                    <Icon className="icon-pop size-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                    <p className="mt-0.5 truncate text-sm text-slate-500">{item.tagline}</p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
