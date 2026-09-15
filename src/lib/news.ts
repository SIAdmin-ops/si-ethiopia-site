import type { Lang } from "../i18n"
import { isSupabaseConfigured, supabase } from "./supabase"

export type LocalizedText = Partial<Record<Lang, string>>

export type NewsItem = {
  id: string
  category: number // 0 Capital Markets · 1 Technology · 2 Training · 3 Company
  itemDate: string // ISO date, e.g. "2026-08-01"
  published: boolean
  title: LocalizedText
  summary: LocalizedText
  imageUrl: string | null
}

type NewsRow = {
  id: string
  category: number
  item_date: string
  published: boolean
  title: LocalizedText
  summary: LocalizedText
  image_url: string | null
}

function fromRow(row: NewsRow): NewsItem {
  return {
    id: row.id,
    category: row.category,
    itemDate: row.item_date,
    published: row.published,
    title: row.title ?? {},
    summary: row.summary ?? {},
    imageUrl: row.image_url ?? null,
  }
}

/** Text in the active language, falling back to English, then any language present. */
export function localize(text: LocalizedText, lang: Lang): string {
  return text[lang] || text.en || Object.values(text).find(Boolean) || ""
}

export function formatNewsDate(iso: string, lang: Lang): string {
  const date = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat(lang, { month: "long", year: "numeric" }).format(date)
}

export async function fetchPublishedNews(): Promise<NewsItem[]> {
  if (!isSupabaseConfigured) return []
  const { data, error } = await supabase
    .from("news_items")
    .select("id, category, item_date, published, title, summary, image_url")
    .eq("published", true)
    .order("item_date", { ascending: false })
  if (error) throw error
  return (data as NewsRow[]).map(fromRow)
}

export async function fetchAllNews(): Promise<NewsItem[]> {
  if (!isSupabaseConfigured) return []
  const { data, error } = await supabase
    .from("news_items")
    .select("id, category, item_date, published, title, summary, image_url")
    .order("item_date", { ascending: false })
  if (error) throw error
  return (data as NewsRow[]).map(fromRow)
}

export async function fetchNewsById(id: string): Promise<NewsItem | null> {
  const { data, error } = await supabase
    .from("news_items")
    .select("id, category, item_date, published, title, summary, image_url")
    .eq("id", id)
    .maybeSingle()
  if (error) throw error
  return data ? fromRow(data as NewsRow) : null
}

export type NewsItemInput = {
  category: number
  itemDate: string
  published: boolean
  title: LocalizedText
  summary: LocalizedText
  imageUrl: string | null
}

export async function createNewsItem(input: NewsItemInput): Promise<void> {
  const { error } = await supabase.from("news_items").insert({
    category: input.category,
    item_date: input.itemDate,
    published: input.published,
    title: input.title,
    summary: input.summary,
    image_url: input.imageUrl,
  })
  if (error) throw error
}

export async function updateNewsItem(id: string, input: NewsItemInput): Promise<void> {
  const { error } = await supabase
    .from("news_items")
    .update({
      category: input.category,
      item_date: input.itemDate,
      published: input.published,
      title: input.title,
      summary: input.summary,
      image_url: input.imageUrl,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
  if (error) throw error
}

export async function setNewsPublished(id: string, published: boolean): Promise<void> {
  const { error } = await supabase
    .from("news_items")
    .update({ published, updated_at: new Date().toISOString() })
    .eq("id", id)
  if (error) throw error
}

export async function deleteNewsItem(id: string): Promise<void> {
  const { error } = await supabase.from("news_items").delete().eq("id", id)
  if (error) throw error
}
