import { BarChart3, Cpu, BookOpen, ArrowRight, ArrowDown } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, useParallax, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { HighlightSI } from "../../lib/highlightSI"

const NUMS = ["01", "02", "03"]

const DIVISIONS_META = [
  { icon: BarChart3, route: "/capital-markets", accent: "amber" },
  { icon: Cpu, route: "/technology", accent: "teal" },
  { icon: BookOpen, route: "/training", accent: "blue" },
] as const

const DIVISION_IMAGES = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=560&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1739303987830-ca19742b19bc?w=700&h=560&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1758691737584-a8f17fb34475?w=700&h=560&fit=crop&auto=format",
]

const ACCENT: Record<string, { icon: string; num: string; bar: string; chip: string; link: string }> = {
  amber: {
    icon: "bg-amber-500/20 text-amber-300",
    num: "text-amber-300",
    bar: "bg-amber-500",
    chip: "bg-amber-500/10 text-amber-200 ring-1 ring-amber-400/20",
    link: "border-amber-400/40 text-amber-300 hover:bg-amber-500 hover:text-white hover:border-amber-500",
  },
  teal: {
    icon: "bg-teal-500/20 text-teal-300",
    num: "text-teal-300",
    bar: "bg-teal-500",
    chip: "bg-teal-500/10 text-teal-200 ring-1 ring-teal-400/20",
    link: "border-teal-400/40 text-teal-300 hover:bg-teal-500 hover:text-white hover:border-teal-500",
  },
  blue: {
    icon: "bg-blue-500/20 text-blue-300",
    num: "text-blue-300",
    bar: "bg-blue-500",
    chip: "bg-blue-500/10 text-blue-200 ring-1 ring-blue-400/20",
    link: "border-blue-400/40 text-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500",
  },
}

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
            <HighlightSI text={p} className="text-indigo-300" />
          </p>
        ))}
    </div>
  )
}

export default function Divisions() {
  const { t } = useI18n()
  const d = t.home.divisions
  /* Fixed count (always 3 divisions) so calling the hook 3 times up front,
     rather than inside .map(), stays rules-of-hooks compliant. */
  const photoParallax = [useParallax<HTMLDivElement>(0.06), useParallax<HTMLDivElement>(0.06), useParallax<HTMLDivElement>(0.06)]

  /* Capability chips and stats are sampled from each division's OWN real
     catalogue never the CM page's "We Consult/Build/Train" methodology
     tags, which span all divisions and would misattribute e.g. "Hospitality"
     under the Consultancy row. */
  const techItems = t.techPage.capabilities.items
  const CHIPS: string[][] = [
    t.services.categories.slice(1, 6),
    [...techItems.slice(0, 4).map((s) => s.title), techItems[techItems.length - 1].title],
    t.training.sectors.flatMap((s) => s.trainings.map((tr) => tr.title)).slice(0, 5),
  ]
  const STATS: string[] = [
    `${t.services.items.length} services across ${t.services.categories.length - 1} practice areas`,
    `${t.techPage.capabilities.items.length} technology capability areas`,
    `${t.training.sectors.reduce((n, s) => n + s.trainings.length, 0)} training modules across ${t.training.sectors.length} tracks`,
  ]

  return (
    <section
      id="divisions"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(55% 60% at 15% 0%, rgba(25,131,136,0.24) 0%, transparent 55%), radial-gradient(50% 60% at 100% 100%, rgba(255,205,66,0.14) 0%, transparent 55%)",
        }}
      />
      <div className={`${wrap} relative`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-indigo-400" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-indigo-300">
            {d.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[28px] font-extrabold leading-tight tracking-tight sm:text-[40px] lg:text-[44px]"
        >
          {d.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={d.intro} className="leading-relaxed text-white/70" />
        </Reveal>

        <div className="mt-16 border-t border-white/10">
          {d.items.map((item, i) => {
            const meta = DIVISIONS_META[i]
            const Icon = meta.icon
            const a = ACCENT[meta.accent]
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="group relative grid gap-6 overflow-hidden border-b border-white/10 py-10 transition-colors sm:gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-center lg:py-12 xl:grid-cols-[minmax(0,300px)_1fr_280px]"
              >
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 w-1 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100 ${a.bar}`}
                />
                <div className="flex items-start gap-5 pl-4 lg:pl-5">
                  <span className={`font-sans text-4xl font-extrabold tracking-tight sm:text-5xl ${a.num}`}>
                    {NUMS[i]}
                  </span>
                  <div>
                    <span className={`grid size-12 place-items-center rounded-2xl ${a.icon}`}>
                      <Icon className="icon-pop size-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold leading-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className={`mt-1.5 text-sm font-semibold ${a.num}`}>{item.tagline}</p>
                  </div>
                </div>

                <div className="pl-4 lg:pl-2">
                  <Paragraphs text={item.body} className="max-w-2xl text-[15px] leading-relaxed text-white/65 sm:text-base" />

                  <div className="mt-5 flex flex-wrap gap-2">
                    {CHIPS[i].map((chip) => (
                      <span
                        key={chip}
                        className={`rounded-full px-3 py-1.5 text-[13px] font-semibold ${a.chip}`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-white/40">
                    {STATS[i]}
                  </p>

                  <Link
                    to={meta.route}
                    className={`group/cta mt-6 inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all ${a.link}`}
                  >
                    {item.link}
                    <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>

                <div className="pl-4 lg:col-span-2 lg:pl-5 xl:col-span-1 xl:pl-0">
                  <div className="relative h-48 overflow-hidden rounded-2xl sm:h-56 lg:h-64 xl:h-full xl:min-h-[240px]">
                    {/* parallax (translate3d, via ref) and hover-zoom (scale, via class)
                        both touch `transform`, so they're split across two elements —
                        an inline style always beats a class for the same property. */}
                    <div ref={photoParallax[i]} className="parallax absolute inset-x-0 -top-[8%] h-[116%] w-full">
                      <img
                        src={DIVISION_IMAGES[i]}
                        alt=""
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* connected capabilities: how the three divisions flow together */}
        <Reveal
          delay={200}
          className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
        >
          <h3 className="max-w-xl font-sans text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
            {d.connected.heading}
          </h3>
          <p className="mt-3 max-w-xl leading-relaxed text-white/70">
            <HighlightSI text={d.connected.intro} className="text-indigo-300" />
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            {d.connected.points.map((point, i) => (
              <div key={point} className="flex items-center gap-2 sm:flex-1">
                <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="grid size-9 place-items-center rounded-xl bg-indigo-500/20 text-indigo-300">
                    {(() => {
                      const Icon = DIVISIONS_META[i].icon
                      return <Icon className="size-4" strokeWidth={1.8} />
                    })()}
                  </span>
                  <p className="text-sm font-semibold leading-snug text-white/90">{point}</p>
                </div>
                {i < d.connected.points.length - 1 && (
                  <>
                    <ArrowRight className="hidden size-5 shrink-0 text-white/30 sm:block" />
                    <ArrowDown className="mx-auto size-5 shrink-0 text-white/30 sm:hidden" />
                  </>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-base font-semibold leading-relaxed text-white sm:text-lg">
            <HighlightSI text={d.connected.closing} className="text-indigo-300" />
          </p>
        </Reveal>
      </div>
    </section>
  )
}
