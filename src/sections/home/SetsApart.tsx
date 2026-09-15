import { useRef, useState } from "react"
import { Zap, Layers, Globe, GraduationCap } from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { HighlightSI } from "../../lib/highlightSI"
import { dotGrid } from "../../lib/glow"

const ICONS = [Zap, Layers, Globe, GraduationCap]
const NUMS = ["01", "02", "03", "04"]

/** Splits on explicit "\n" breaks so a field written as several distinct
    sentences renders as separate paragraphs instead of one run-on block. */
function Paragraphs({ text, className }: { text: string; className: string }) {
  return (
    <div className="flex flex-col gap-3">
      {text
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} className={className}>
            <HighlightSI text={p} />
          </p>
        ))}
    </div>
  )
}

export default function SetsApart() {
  const { t } = useI18n()
  const s = t.home.setsApart
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const [flashed, setFlashed] = useState<number | null>(null)

  const jumpTo = (i: number) => {
    rowRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
    setFlashed(i)
    window.setTimeout(() => setFlashed((v) => (v === i ? null : v)), 1400)
  }

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className={wrap}>
        <Reveal className="flex items-center justify-center gap-2">
          <span className="size-1.5 rounded-full bg-indigo-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-indigo-600">
            {s.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mx-auto mt-4 max-w-2xl text-center font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[42px]"
        >
          {s.heading}
        </Reveal>
        <Reveal
          as="p"
          delay={140}
          className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-slate-600 sm:text-lg"
        >
          {s.intro}
        </Reveal>

        {/* quick-nav: jump straight to any pillar below */}
        <Reveal delay={180} className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {s.items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => jumpTo(i)}
              className="press group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-4 text-xs font-bold text-slate-500 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md hover:shadow-indigo-900/5"
            >
              <span className="grid size-6 place-items-center rounded-full bg-indigo-50 text-[11px] text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                {NUMS[i]}
              </span>
              {item.title}
            </button>
          ))}
        </Reveal>

        <div className="mt-14 border-t border-slate-200">
          {s.items.map((item, i) => {
            const Icon = ICONS[i]
            const isFlashed = flashed === i
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="block"
              >
                <div
                  ref={(el) => {
                    rowRefs.current[i] = el
                  }}
                  className={`group relative grid gap-6 overflow-hidden border-b border-slate-200 py-10 transition-all duration-500 sm:gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:py-12 ${
                    isFlashed ? "bg-indigo-50/60" : "hover:bg-slate-50/80"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-indigo-600 transition-transform duration-300 group-hover:scale-y-100 ${
                      isFlashed ? "scale-y-100" : ""
                    }`}
                  />
                  <div className="flex items-start gap-5 pl-4 lg:pl-5">
                    <span
                      className={`font-display text-4xl font-extrabold tracking-tight transition-all duration-300 sm:text-5xl ${
                        isFlashed ? "scale-110 text-indigo-700" : "text-indigo-600 group-hover:scale-105"
                      }`}
                    >
                      {NUMS[i]}
                    </span>
                    <div>
                      <span className="grid size-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                        <Icon className="icon-pop size-5" strokeWidth={2} />
                      </span>
                      <h3 className="mt-4 text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="pl-4 lg:pl-2">
                    <Paragraphs
                      text={item.desc}
                      className="max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base"
                    />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal
          delay={200}
          className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 via-teal-800 to-teal-950 px-8 py-10 text-center sm:px-12 sm:py-12"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: dotGrid("255,255,255,0.6"),
              backgroundSize: "22px 22px",
            }}
          />
          <p className="relative mx-auto max-w-2xl font-display text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl">
            {s.closing}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
