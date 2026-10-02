import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"
import { SERVICE_CATEGORY_META } from "../lib/serviceCategoryIcons"

/** Category indices in display order, stable identifiers into
    t.services.categories/items, independent of that array's own order. */
const DISPLAY_ORDER = [1, 2, 3, 4, 5, 6, 7, 8]

/** Services organized by hierarchy, not by count: a numbered module index
    grouped under each category (one category icon per group, not repeated
    per row). */
export default function ServicesGrid() {
  const { t } = useI18n()

  const groups = DISPLAY_ORDER
    .map((i) => ({
      label: t.services.categories[i],
      cat: i,
      note: t.services.categoryNotes[i],
      items: t.services.items.filter((s) => s.cat === i),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-green">
          {t.services.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-green sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {t.services.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-text-secondary sm:text-lg">
          {t.services.sub}
        </Reveal>

        <Reveal delay={180} className="mt-8 rounded-2xl border border-border bg-mist p-6 sm:p-8">
          <h3 className="text-[20px] leading-[28px] font-semibold text-green lg:text-[24px] lg:leading-[32px]">
            {t.services.outcome.heading}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
            {t.services.outcome.body}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2">
            {t.services.outcome.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-1.5">
                <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-bold text-green sm:text-sm">
                  {step}
                </span>
                {i < t.services.outcome.flow.length - 1 && (
                  <ArrowRight className="size-3.5 shrink-0 text-slate-300" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-sm font-semibold italic leading-relaxed text-basalt/85 sm:text-base">
            {t.services.outcome.closing}
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-6">
          <Link
            to="/contact"
            className="flex items-center justify-center rounded-2xl border border-dashed border-teal-200 bg-teal-50/60 px-5 py-4 text-center text-sm font-semibold text-green transition-colors hover:border-teal-300 hover:bg-teal-50"
          >
            {t.services.banner}
          </Link>
        </Reveal>

        <div className="mt-14 border-t border-border sm:mt-16">
          {groups.map((group, gi) => {
            const meta = SERVICE_CATEGORY_META[group.cat]
            const CatIcon = meta.icon
            return (
              <Reveal key={group.label} delay={gi * 30} className="block border-b border-border py-10 first:pt-8">
                <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-10">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-teal-50 text-green">
                      <CatIcon className="size-[18px]" strokeWidth={2} />
                    </span>
                    <div className="flex items-baseline gap-2 lg:flex-col lg:items-start lg:gap-1">
                      <span className="font-mono text-xs text-slate-300">{String(gi + 1).padStart(2, "0")}</span>
                      <h3 className="text-[20px] leading-[28px] font-semibold text-basalt lg:text-[24px] lg:leading-[32px]">{group.label}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {group.note?.intro && (
                      <p className="pb-3 text-sm font-semibold italic leading-relaxed text-text-secondary">
                        {group.note.intro}
                      </p>
                    )}
                    {group.items.map((item, ii) => (
                      <div
                        key={item.title}
                        className="group/item -mx-3 flex flex-col rounded-2xl border-t border-border px-3 py-3.5 first:border-t-0 hover:bg-mist"
                      >
                        <span className="flex items-center gap-4 sm:gap-5">
                          <span className="w-6 shrink-0 font-mono text-xs text-slate-300 sm:w-8 sm:text-sm">
                            {String(ii + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1 text-[15px] font-bold text-basalt sm:text-base">
                            {item.title}
                          </span>
                        </span>
                        <span className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover/item:grid-rows-[1fr]">
                          <span className="overflow-hidden">
                            <span className="block pl-10 pt-2 text-sm leading-relaxed text-text-secondary sm:pl-[3.25rem]">
                              {item.desc}
                            </span>
                          </span>
                        </span>
                      </div>
                    ))}
                    {group.note?.note && (
                      <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-text-secondary">
                        {group.note.note}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
