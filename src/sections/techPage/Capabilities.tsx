import { useState } from "react"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"
import { glow } from "../../lib/glow"

/* Gradient badge colors cycled across the 14 numbered capability items. */
const BADGES = [
  "from-teal-500 to-emerald-600",
  "from-cyan-500 to-teal-600",
  "from-emerald-400 to-teal-500",
  "from-teal-400 to-cyan-500",
  "from-emerald-500 to-teal-600",
  "from-cyan-400 to-emerald-500",
  "from-teal-500 to-cyan-600",
  "from-emerald-400 to-cyan-500",
  "from-teal-600 to-emerald-500",
  "from-cyan-500 to-emerald-600",
  "from-emerald-500 to-cyan-600",
  "from-teal-400 to-emerald-600",
  "from-cyan-600 to-teal-500",
  "from-emerald-600 to-teal-400",
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
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
      style={{ backgroundImage: glow("teal") }}
    >
      <div className={`${wrap} relative`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-teal-400" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-teal-300">
            {c.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-4xl font-display text-[28px] font-extrabold leading-tight tracking-tight sm:text-[44px]"
        >
          {c.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-white/65 sm:text-lg">
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
                  className={`press group flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all ${
                    on
                      ? "border-white/25 bg-white/[0.08] translate-x-1"
                      : "border-white/10 bg-white/[0.02] hover:translate-x-1 hover:border-white/20"
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
                      on ? "text-white" : "text-white/70"
                    }`}
                  >
                    {it.title}
                  </span>
                  <ChevronRight
                    className={`size-4 shrink-0 transition-all ${
                      on ? "translate-x-0 text-teal-300" : "-translate-x-1 text-white/30"
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
              className="detail-fade flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm sm:p-10"
            >
              <div>
                <span
                  className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-lg font-extrabold text-white ${BADGES[active % BADGES.length]}`}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-[28px] font-extrabold leading-tight sm:text-[34px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-teal-300 sm:text-base">{item.tagline}</p>
                <div className="mt-4">
                  <Paragraphs text={item.intro} className="leading-relaxed text-white/70" highlightClassName="text-teal-300" />
                </div>

                {item.teaserChips ? (
                  <>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.teaserChips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-teal-400/20 bg-teal-500/10 px-3.5 py-2 text-[13px] font-semibold text-teal-200"
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
                          <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                            {group.title}
                          </p>
                        )}
                        {group.intro && (
                          <div className={group.title ? "mt-2" : ""}>
                            <Paragraphs
                              text={group.intro}
                              className="text-sm leading-relaxed text-white/60"
                              highlightClassName="text-teal-300"
                            />
                          </div>
                        )}
                        {group.items.length > 0 && (
                          <div className={group.title || group.intro ? "mt-3 flex flex-wrap gap-2" : "flex flex-wrap gap-2"}>
                            {group.items.map((chip) => (
                              <span
                                key={chip}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[13px] font-semibold text-white/85"
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
                  <p className="mt-6 text-xs italic leading-relaxed text-white/40">{item.disclaimer}</p>
                )}

                {item.closing.length > 0 && (
                  <div className="mt-6 border-t border-white/10 pt-6">
                    {item.closing.length === 1 ? (
                      <p className="text-sm font-semibold italic leading-relaxed text-teal-200 sm:text-base">
                        {item.closing[0]}
                      </p>
                    ) : (
                      <div className="flex flex-col gap-1.5">
                        {item.closing.map((line, li) => (
                          <p
                            key={li}
                            className={`text-sm leading-relaxed sm:text-base ${
                              li === item.closing.length - 1
                                ? "font-bold text-teal-200"
                                : "text-white/70"
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
                  className="group/cta mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-teal-500"
                >
                  {item.ctaOverride?.label ?? c.cta}
                  <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                <span>
                  {String(active + 1).padStart(2, "0")} / {String(c.items.length).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
