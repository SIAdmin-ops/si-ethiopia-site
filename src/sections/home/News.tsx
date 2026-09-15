import { useEffect, useState } from "react"
import { Landmark, Cpu, GraduationCap, Building2, ArrowRight, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useAverageColor } from "../../lib/useAverageColor"
import { useI18n } from "../../i18n"
import { fetchPublishedNews, formatNewsDate, localize, type NewsItem } from "../../lib/news"

const CATEGORY_META = [
  { icon: Landmark, chip: "bg-white text-indigo-700" },
  { icon: Cpu, chip: "bg-white text-emerald-700" },
  { icon: GraduationCap, chip: "bg-white text-amber-700" },
  { icon: Building2, chip: "bg-white text-fuchsia-700" },
]

type DisplayItem = {
  cat: number
  date: string
  title: string
  summary: string
  imageUrl: string | null
}

/** Eye-catching, high-energy home teaser: a looping marquee ticker up top,
    then a featured story + a row of smaller ones, all on a bold gradient
    field so it reads as "live" against the surrounding light/dark sections.
    Content is admin-managed (Supabase) see src/lib/news.ts and /admin.
    When an item has an image, the card themes itself off that photo's
    average color (see useAverageColor) instead of the fixed category tint,
    and the image gradient-fades into that same color at its base. */
export default function News() {
  const { t, lang } = useI18n()
  const n = t.home.news
  const [items, setItems] = useState<NewsItem[] | null>(null)

  useEffect(() => {
    let cancelled = false
    fetchPublishedNews()
      .then((data) => {
        if (!cancelled) setItems(data)
      })
      .catch(() => {
        if (!cancelled) setItems([])
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (items === null) return null

  if (items.length === 0) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-500 to-amber-600 py-24 text-white sm:py-32">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.6) 1px, transparent 1.4px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className={`${wrap} relative flex flex-col items-center py-6 text-center`}>
          <Reveal className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-white" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-white/80">
              {n.eyebrow}
            </span>
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-4 max-w-2xl font-display text-[28px] font-extrabold leading-tight tracking-tight sm:text-[40px] lg:text-[44px]"
          >
            {n.heading}
          </Reveal>
          <Reveal
            delay={160}
            className="mt-8 rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-6 text-base font-semibold text-white/80"
          >
            {n.empty}
          </Reveal>
        </div>
      </section>
    )
  }

  const display: DisplayItem[] = items.slice(0, 4).map((item) => ({
    cat: item.category,
    date: formatNewsDate(item.itemDate, lang),
    title: localize(item.title, lang),
    summary: localize(item.summary, lang),
    imageUrl: item.imageUrl,
  }))
  const [featured, ...rest] = display

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-500 to-amber-600 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.6) 1px, transparent 1.4px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* looping headline ticker */}
      <div className="relative border-y border-white/15 bg-black/10 py-3">
        <div className="flex items-center gap-4 overflow-hidden">
          <span className="ml-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-700 sm:ml-8">
            <span className="relative flex size-2">
              <span
                className="absolute inline-flex size-full rounded-full bg-indigo-500 opacity-75"
                style={{ animation: "soft-pulse 1.6s ease-in-out infinite" }}
              />
              <span className="relative inline-flex size-2 rounded-full bg-indigo-600" />
            </span>
            {n.liveLabel}
          </span>
          <div className="flex min-w-0 flex-1 overflow-hidden">
            <div className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap text-sm font-semibold text-white/90">
              {[...items, ...items].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  {localize(item.title, lang)}
                  <span className="text-white/40">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${wrap} relative mt-14 sm:mt-16`}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-white" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-white/80">
            {n.eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-2xl font-display text-[28px] font-extrabold leading-tight tracking-tight sm:text-[40px] lg:text-[44px]"
        >
          {n.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-white/80 sm:text-lg">
          {n.sub}
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <FeaturedCard item={featured} categories={n.categories} readMore={n.readMore} />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-rows-3">
            {rest.map((item, i) => (
              <MinorCard key={item.title} item={item} categories={n.categories} delay={220 + i * 100} />
            ))}
          </div>
        </div>

        <Reveal
          delay={480}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-center sm:flex-row sm:text-left"
        >
          <p className="text-base font-semibold sm:text-lg">{n.ctaText}</p>
          <Link
            to="/contact"
            className="group press shine inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-indigo-700 transition-all hover:-translate-y-0.5"
          >
            {n.ctaButton}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function FeaturedCard({
  item,
  categories,
  readMore,
}: {
  item: DisplayItem
  categories: readonly string[]
  readMore: string
}) {
  const color = useAverageColor(item.imageUrl)
  const meta = CATEGORY_META[item.cat]
  const Icon = meta.icon
  const themed = Boolean(item.imageUrl && color)

  return (
    <Reveal variant="left" delay={180} className="block h-full">
      <div
        className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl ring-1 ring-white/15 backdrop-blur-md transition-all hover:-translate-y-1"
        style={{ backgroundColor: themed ? `rgba(${color}, 0.55)` : undefined }}
      >
        {item.imageUrl && (
          <div className="relative h-48 w-full shrink-0 sm:h-56">
            <img src={item.imageUrl} alt="" className="size-full object-cover" loading="lazy" />
            <div
              className="absolute inset-x-0 bottom-0 h-24"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, rgba(${color ?? "88, 28, 135"}, 0.9))`,
              }}
            />
          </div>
        )}
        <div className={`flex flex-1 flex-col justify-between ${item.imageUrl ? "-mt-8" : ""} p-7 sm:p-9`}>
          <div>
            <div className="flex items-center gap-3">
              <span
                className={
                  themed
                    ? "grid size-10 place-items-center rounded-xl bg-white"
                    : `grid size-10 place-items-center rounded-xl ${meta.chip}`
                }
                style={themed ? { color: `rgb(${color})` } : undefined}
              >
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                  {categories[item.cat]}
                </span>
                <span className="text-xs text-white/50">{item.date}</span>
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-extrabold leading-tight sm:text-3xl">{item.title}</h3>
            <p className="mt-4 max-w-lg leading-relaxed text-white/75">{item.summary}</p>
          </div>
          <span className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white">
            {readMore}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Reveal>
  )
}

function MinorCard({
  item,
  categories,
  delay,
}: {
  item: DisplayItem
  categories: readonly string[]
  delay: number
}) {
  const color = useAverageColor(item.imageUrl)
  const meta = CATEGORY_META[item.cat]
  const Icon = meta.icon
  const themed = Boolean(item.imageUrl && color)

  return (
    <Reveal variant="right" delay={delay} className="block h-full">
      <div
        className="group flex h-full flex-col overflow-hidden rounded-2xl ring-1 ring-white/15 backdrop-blur-md transition-all hover:-translate-y-1"
        style={{ backgroundColor: themed ? `rgba(${color}, 0.55)` : undefined }}
      >
        {item.imageUrl && (
          <div className="relative h-28 w-full shrink-0">
            <img src={item.imageUrl} alt="" className="size-full object-cover" loading="lazy" />
            <div
              className="absolute inset-x-0 bottom-0 h-14"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, rgba(${color ?? "88, 28, 135"}, 0.9))`,
              }}
            />
          </div>
        )}
        <div className={`flex flex-1 flex-col p-5 ${item.imageUrl ? "-mt-5" : ""}`}>
          <div className="flex items-center gap-2.5">
            <span
              className={
                themed
                  ? "grid size-8 shrink-0 place-items-center rounded-lg bg-white"
                  : `grid size-8 shrink-0 place-items-center rounded-lg ${meta.chip}`
              }
              style={themed ? { color: `rgb(${color})` } : undefined}
            >
              <Icon className="size-4" strokeWidth={2} />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/60">
              {categories[item.cat]}
            </span>
            <span className="ml-auto shrink-0 text-[11px] text-white/45">{item.date}</span>
          </div>
          <h3 className="mt-3 text-[15px] font-bold leading-snug">{item.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{item.summary}</p>
        </div>
      </div>
    </Reveal>
  )
}
