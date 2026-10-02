import { useEffect, useState } from "react"
import { Landmark, Cpu, GraduationCap, Building2, ArrowRight, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { fetchPublishedNews, formatNewsDate, localize, type NewsItem } from "../../lib/news"

/* Division colour coding on the small icon chips only: Capital Markets green,
   Technology blue, Training gold text. */
const CATEGORY_META = [
  { icon: Landmark, chip: "bg-green/10 text-green" },
  { icon: Cpu, chip: "bg-blue-50 text-blue" },
  { icon: GraduationCap, chip: "bg-amber-50 text-gold-text" },
  { icon: Building2, chip: "bg-green/10 text-green" },
]

type DisplayItem = {
  cat: number
  date: string
  title: string
  summary: string
  imageUrl: string | null
}

/** Admin-managed news (Supabase) see src/lib/news.ts and /admin. The whole
    section is omitted until there is at least one published item. */
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

  if (!items || items.length === 0) return null

  const display: DisplayItem[] = items.slice(0, 4).map((item) => ({
    cat: item.category,
    date: formatNewsDate(item.itemDate, lang),
    title: localize(item.title, lang),
    summary: localize(item.summary, lang),
    imageUrl: item.imageUrl,
  }))
  const [featured, ...rest] = display

  return (
    <section className="news-section relative overflow-hidden bg-mist py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-gold-text">{n.eyebrow}</span>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-2xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-green sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        >
          {n.heading}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-4 max-w-2xl text-text-secondary sm:text-lg">
          {n.sub}
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <NewsCard item={featured} categories={n.categories} readMore={n.readMore} featured />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-rows-3">
            {rest.map((item, i) => (
              <NewsCard key={item.title} item={item} categories={n.categories} delay={220 + i * 100} />
            ))}
          </div>
        </div>

        <Reveal
          delay={480}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-white p-6 text-center sm:flex-row sm:text-left"
        >
          <p className="text-base font-semibold text-basalt sm:text-lg">{n.ctaText}</p>
          <Link
            to="/contact"
            className="group press inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-green px-6 py-3 text-[15px] font-bold uppercase tracking-wide text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-green-hover"
          >
            {n.ctaButton}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function NewsCard({
  item,
  categories,
  readMore,
  featured = false,
  delay = 180,
}: {
  item: DisplayItem
  categories: readonly string[]
  readMore?: string
  featured?: boolean
  delay?: number
}) {
  const meta = CATEGORY_META[item.cat]
  const Icon = meta.icon
  return (
    <Reveal variant={featured ? "left" : "right"} delay={delay} className="block h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-transform duration-300 hover:-translate-y-1">
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt=""
            className={`w-full shrink-0 object-cover ${featured ? "h-48 sm:h-56" : "h-28"}`}
            loading="lazy"
          />
        )}
        <div className={`flex flex-1 flex-col ${featured ? "p-7 sm:p-9" : "p-5"}`}>
          <div className="flex items-center gap-3">
            <span className={`grid shrink-0 place-items-center rounded-lg ${featured ? "size-10" : "size-8"} ${meta.chip}`}>
              <Icon className={featured ? "size-5" : "size-4"} strokeWidth={2} />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">{categories[item.cat]}</span>
            <span className="ml-auto shrink-0 text-xs text-text-secondary">{item.date}</span>
          </div>
          <h3 className={`mt-4 font-semibold text-basalt ${featured ? "text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px]" : "text-[15px] leading-snug"}`}>
            {item.title}
          </h3>
          <p className={`mt-3 flex-1 leading-relaxed text-text-secondary ${featured ? "" : "text-sm"}`}>{item.summary}</p>
          {readMore && (
            <span className="mt-6 inline-flex w-fit items-center gap-1.5 text-[15px] font-semibold text-blue">
              {readMore}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          )}
        </div>
      </article>
    </Reveal>
  )
}
