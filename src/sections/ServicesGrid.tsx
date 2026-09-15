import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"
import { SERVICE_CATEGORY_META } from "../lib/serviceCategoryIcons"
import { glow } from "../lib/glow"

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
    <section
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
      style={{ backgroundImage: glow("amber") }}
    >
      <div className={wrap}>
        <Reveal className="text-[11px] font-semibold uppercase tracking-[0.66px] text-amber-300">
          {t.services.eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[28px] font-extrabold leading-tight tracking-tight sm:text-[40px] lg:text-[46px]"
        >
          {t.services.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-white/65 sm:text-lg">
          {t.services.sub}
        </Reveal>

        <Reveal delay={180} className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h3 className="text-lg font-extrabold leading-tight text-white sm:text-xl">
            {t.services.outcome.heading}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            {t.services.outcome.body}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2">
            {t.services.outcome.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-1.5">
                <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-200 sm:text-sm">
                  {step}
                </span>
                {i < t.services.outcome.flow.length - 1 && (
                  <ArrowRight className="size-3.5 shrink-0 text-white/25" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-sm font-semibold italic leading-relaxed text-white/85 sm:text-base">
            {t.services.outcome.closing}
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-6">
          <Link
            to="/contact"
            className="flex items-center justify-center rounded-2xl border border-dashed border-amber-400/40 bg-amber-500/5 px-5 py-4 text-center text-sm font-semibold text-amber-200 transition-colors hover:border-amber-400/70 hover:bg-amber-500/10"
          >
            {t.services.banner}
          </Link>
        </Reveal>

        <div className="mt-14 border-t border-white/10 sm:mt-16">
          {groups.map((group, gi) => {
            const meta = SERVICE_CATEGORY_META[group.cat]
            const CatIcon = meta.icon
            return (
              <Reveal key={group.label} delay={gi * 30} className="block border-b border-white/10 py-10 first:pt-8">
                <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-10">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3">
                    <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${meta.color}`}>
                      <CatIcon className="size-[18px]" strokeWidth={2} />
                    </span>
                    <div className="flex items-baseline gap-2 lg:flex-col lg:items-start lg:gap-1">
                      <span className="font-mono text-xs text-white/30">{String(gi + 1).padStart(2, "0")}</span>
                      <h3 className="text-lg font-bold text-white sm:text-xl">{group.label}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {group.note?.intro && (
                      <p className="pb-3 text-sm font-semibold italic leading-relaxed text-white/70">
                        {group.note.intro}
                      </p>
                    )}
                    {group.items.map((item, ii) => (
                      <div
                        key={item.title}
                        className="group/item -mx-3 flex flex-col rounded-xl border-t border-white/5 px-3 py-3.5 first:border-t-0 hover:bg-white/[0.04]"
                      >
                        <span className="flex items-center gap-4 sm:gap-5">
                          <span className="w-6 shrink-0 font-mono text-xs text-white/25 sm:w-8 sm:text-sm">
                            {String(ii + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1 text-[15px] font-bold text-white sm:text-base">
                            {item.title}
                          </span>
                        </span>
                        <span className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover/item:grid-rows-[1fr]">
                          <span className="overflow-hidden">
                            <span className="block pl-10 pt-2 text-sm leading-relaxed text-white/55 sm:pl-[3.25rem]">
                              {item.desc}
                            </span>
                          </span>
                        </span>
                      </div>
                    ))}
                    {group.note?.note && (
                      <p className="mt-4 border-t border-white/5 pt-4 text-sm leading-relaxed text-white/55">
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
