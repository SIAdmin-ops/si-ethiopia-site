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

/* Division accent colors per the brand's division coding on light/Mist
   backgrounds: Capital Markets = Deep Teal, Technology = Teal, Training =
   Gold-text (gold is reserved for dark backgrounds). */
const ACCENT: Record<string, { icon: string; num: string; topBorder: string; chip: string; link: string }> = {
  amber: {
    icon: "bg-teal-deep/10 text-teal-deep",
    num: "text-teal-deep",
    topBorder: "border-t-teal-deep",
    chip: "bg-teal-deep/10 text-teal-deep ring-1 ring-teal-deep/20",
    link: "border-teal-deep/40 text-teal-deep hover:bg-teal-deep hover:text-white hover:border-teal-deep",
  },
  teal: {
    icon: "bg-teal/10 text-teal",
    num: "text-teal",
    topBorder: "border-t-teal",
    chip: "bg-teal/10 text-teal ring-1 ring-teal/20",
    link: "border-teal/40 text-teal hover:bg-teal hover:text-white hover:border-teal",
  },
  blue: {
    icon: "bg-gold-text/10 text-gold-text",
    num: "text-gold-text",
    topBorder: "border-t-gold-text",
    chip: "bg-gold-text/10 text-gold-text ring-1 ring-gold-text/20",
    link: "border-gold-text/40 text-gold-text hover:bg-gold-text hover:text-white hover:border-gold-text",
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
            <HighlightSI text={p} className="text-teal-deep" />
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
      className="relative overflow-hidden bg-mist py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(55% 60% at 15% 0%, rgba(25,131,136,0.1) 0%, transparent 55%), radial-gradient(50% 60% at 100% 100%, rgba(148,104,0,0.08) 0%, transparent 55%)",
        }}
      />
      <div className={`${wrap} relative`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-teal-deep" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-teal-deep">
            {d.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-3 max-w-3xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-ink sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {d.heading}
        </Reveal>
        <Reveal delay={140} className="mt-5 max-w-2xl">
          <Paragraphs text={d.intro} className="leading-relaxed text-text-secondary" />
        </Reveal>

        <div className="mt-16 flex flex-col gap-8">
          {d.items.map((item, i) => {
            const meta = DIVISIONS_META[i]
            const Icon = meta.icon
            const a = ACCENT[meta.accent]
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className={`group relative grid gap-6 overflow-hidden rounded-2xl border border-border border-t-4 bg-white p-6 shadow-sm transition-colors sm:gap-10 sm:p-8 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-center lg:p-10 xl:grid-cols-[minmax(0,300px)_1fr_280px] ${a.topBorder}`}
              >
                <div className="flex items-start gap-5">
                  <span className={`font-sans text-4xl font-extrabold tracking-tight sm:text-5xl ${a.num}`}>
                    {NUMS[i]}
                  </span>
                  <div>
                    <span className={`grid size-12 place-items-center rounded-2xl ${a.icon}`}>
                      <Icon className="icon-pop size-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-4 text-[20px] leading-[28px] font-semibold text-ink lg:text-[24px] lg:leading-[32px]">
                      {item.title}
                    </h3>
                    <p className={`mt-1.5 text-sm font-semibold ${a.num}`}>{item.tagline}</p>
                  </div>
                </div>

                <div>
                  <Paragraphs text={item.body} className="max-w-2xl text-[15px] leading-relaxed text-text-secondary sm:text-base" />

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

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
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

                <div className="lg:col-span-2 xl:col-span-1">
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
          className="mt-14 rounded-2xl border border-border bg-white p-8 sm:p-10"
        >
          <h3 className="max-w-xl font-sans text-[20px] leading-[28px] font-semibold tracking-tight text-ink lg:text-[24px] lg:leading-[32px]">
            {d.connected.heading}
          </h3>
          <p className="mt-3 max-w-xl leading-relaxed text-text-secondary">
            <HighlightSI text={d.connected.intro} className="text-teal-deep" />
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            {d.connected.points.map((point, i) => (
              <div key={point} className="flex items-center gap-2 sm:flex-1">
                <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-border bg-mist p-5">
                  <span className="grid size-9 place-items-center rounded-lg bg-teal-deep/10 text-teal-deep">
                    {(() => {
                      const Icon = DIVISIONS_META[i].icon
                      return <Icon className="size-4" strokeWidth={1.8} />
                    })()}
                  </span>
                  <p className="text-sm font-semibold leading-snug text-ink">{point}</p>
                </div>
                {i < d.connected.points.length - 1 && (
                  <>
                    <ArrowRight className="hidden size-5 shrink-0 text-text-secondary sm:block" />
                    <ArrowDown className="mx-auto size-5 shrink-0 text-text-secondary sm:hidden" />
                  </>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-base font-semibold leading-relaxed text-ink sm:text-lg">
            <HighlightSI text={d.connected.closing} className="text-teal-deep" />
          </p>
        </Reveal>
      </div>
    </section>
  )
}
