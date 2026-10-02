import { useState } from "react"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"

/* Gradient badge colors cycled across the 14 numbered capability items. */
const BADGES = [
  "from-blue-600 to-blue-900",
  "from-blue-300 to-blue-600",
  "from-amber-400 to-amber-700",
  "from-blue-800 to-slate-950",
  "from-blue-400 to-blue-700",
  "from-amber-500 to-amber-800",
  "from-blue-500 to-blue-800",
  "from-blue-300 to-blue-700",
  "from-amber-300 to-amber-600",
  "from-blue-700 to-blue-900",
  "from-amber-600 to-amber-900",
  "from-blue-400 to-blue-800",
  "from-blue-600 to-blue-400",
  "from-amber-700 to-amber-500",
]

/** Master–detail layout (numbered list drives a persistent preview panel)
    matching Consulting.tsx on the Capital Markets page, recolored teal and
    without photos since 14 dense multi-group items leave no clean room for
    a photo panel. */
export default function TechCapabilities() {
  const { t } = useI18n()
  const c = t.techPage.capabilities
  const [active, setActive] = useState(0)
  const item = c.items[active]

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-mist py-16 sm:py-24"
    >
      <div className={`${wrap} relative`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-blue-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-blue-600">
            {c.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-4xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-green sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {c.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-text-secondary sm:text-lg">
          {c.intro}
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* master list */}
          <Reveal variant="left" className="flex flex-col gap-2">
            {c.items.map((it, i) => {
              const on = i === active
              return (
                <button
                  key={it.title}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={on}
                  className={`press group flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-[color,background-color,border-color,opacity,transform,box-shadow] ${
                    on
                      ? "border-blue-200 bg-blue-50 translate-x-1"
                      : "border-border bg-white hover:translate-x-1 hover:border-blue-200"
                  }`}
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br text-xs font-extrabold text-white transition-transform ${
                      BADGES[i % BADGES.length]
                    } ${on ? "scale-105" : "opacity-80 group-hover:opacity-100"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 text-sm font-semibold transition-colors ${
                      on ? "text-blue-600" : "text-text-secondary"
                    }`}
                  >
                    {it.title}
                  </span>
                  <ChevronRight
                    className={`size-4 shrink-0 transition-[color,background-color,border-color,opacity,transform,box-shadow] ${
                      on ? "translate-x-0 text-blue-600" : "-translate-x-1 text-slate-300"
                    }`}
                  />
                </button>
              )
            })}
          </Reveal>

          {/* detail preview */}
          <Reveal variant="right" className="lg:sticky lg:top-24 lg:self-start">
            <div
              key={active}
              className="detail-fade flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white p-8 sm:p-10"
            >
              <div>
                <span
                  className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-lg font-extrabold text-white ${BADGES[active % BADGES.length]}`}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-[20px] leading-[28px] font-semibold text-green lg:text-[24px] lg:leading-[32px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-blue-600 sm:text-base">{item.tagline}</p>
                <div className="mt-4">
                  <Paragraphs text={item.intro} className="leading-relaxed text-text-secondary" highlightClassName="text-blue-600" />
                </div>

                {item.teaserChips ? (
                  <>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.teaserChips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-blue-200 bg-blue-50 px-3.5 py-2 text-[13px] font-semibold text-blue-600"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="mt-6 flex flex-col gap-6">
                    {item.groups.map((group, gi) => (
                      <div key={group.title ?? gi}>
                        {group.title && (
                          <p className="text-xs font-bold uppercase tracking-wider text-text-secondary/70">
                            {group.title}
                          </p>
                        )}
                        {group.intro && (
                          <div className={group.title ? "mt-2" : ""}>
                            <Paragraphs
                              text={group.intro}
                              className="text-sm leading-relaxed text-text-secondary"
                              highlightClassName="text-blue-600"
                            />
                          </div>
                        )}
                        {group.items.length > 0 && (
                          <div className={group.title || group.intro ? "mt-3 flex flex-wrap gap-2" : "flex flex-wrap gap-2"}>
                            {group.items.map((chip) => (
                              <span
                                key={chip}
                                className="rounded-full border border-border bg-white px-3.5 py-2 text-[13px] font-semibold text-basalt"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {item.disclaimer && (
                  <p className="mt-6 text-xs italic leading-relaxed text-text-secondary/70">{item.disclaimer}</p>
                )}

                {item.closing.length > 0 && (
                  <div className="mt-6 border-t border-border pt-6">
                    {item.closing.length === 1 ? (
                      <p className="text-sm font-semibold italic leading-relaxed text-green sm:text-base">
                        {item.closing[0]}
                      </p>
                    ) : (
                      <div className="flex flex-col gap-1.5">
                        {item.closing.map((line, li) => (
                          <p
                            key={li}
                            className={`text-sm leading-relaxed sm:text-base ${
                              li === item.closing.length - 1
                                ? "font-bold text-green"
                                : "text-text-secondary"
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <Link
                  to={item.ctaOverride?.to ?? "/contact"}
                  className="group/cta mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-green px-6 py-3 text-[15px] font-bold uppercase tracking-wide text-white transition-[color,background-color,border-color,opacity,transform,box-shadow] hover:-translate-y-0.5 hover:bg-green-hover"
                >
                  {item.ctaOverride?.label ?? c.cta}
                  <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/70">
                <span>
                  {String(active + 1).padStart(2, "0")} / {String(c.items.length).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
