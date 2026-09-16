import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import type { Lang } from "../../i18n"
import {
  createNewsItem,
  fetchNewsById,
  updateNewsItem,
  type LocalizedText,
  type NewsItemInput,
} from "../../lib/news"
import { useSeo } from "../../lib/useSeo"

const CATEGORY_LABELS = ["Capital Markets", "Technology", "Training", "Company"]
const LANG_TABS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "am", label: "አማርኛ" },
  { code: "om", label: "Afaan Oromoo" },
  { code: "ti", label: "ትግርኛ" },
]

const emptyText: LocalizedText = { en: "", am: "", om: "", ti: "" }

export default function NewsEditor() {
  const { id } = useParams()
  const isNew = !id
  const navigate = useNavigate()
  useSeo(isNew ? "New News Item" : "Edit News Item", "", "/admin/news", { standaloneTitle: false, noindex: true })

  const [category, setCategory] = useState(0)
  const [itemDate, setItemDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [published, setPublished] = useState(true)
  const [title, setTitle] = useState<LocalizedText>(emptyText)
  const [summary, setSummary] = useState<LocalizedText>(emptyText)
  const [imageUrl, setImageUrl] = useState("")
  const [activeLang, setActiveLang] = useState<Lang>("en")

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isNew || !id) return
    fetchNewsById(id)
      .then((item) => {
        if (!item) {
          setError("News item not found.")
          return
        }
        setCategory(item.category)
        setItemDate(item.itemDate)
        setPublished(item.published)
        setTitle({ ...emptyText, ...item.title })
        setSummary({ ...emptyText, ...item.summary })
        setImageUrl(item.imageUrl ?? "")
      })
      .catch((e) => setError(e.message ?? "Failed to load."))
      .finally(() => setLoading(false))
  }, [id, isNew])

  const submit = async () => {
    if (!title.en?.trim() || !summary.en?.trim()) {
      setError("English title and summary are required.")
      return
    }
    setSaving(true)
    setError(null)
    const input: NewsItemInput = {
      category,
      itemDate,
      published,
      title,
      summary,
      imageUrl: imageUrl.trim() || null,
    }
    try {
      if (isNew) await createNewsItem(input)
      else await updateNewsItem(id!, input)
      navigate("/admin")
    } catch (e: any) {
      setError(e.message ?? "Failed to save.")
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="text-sm text-slate-500">Loading…</p>

  return (
    <div>
      <Link
        to="/admin"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900"
      >
        <ArrowLeft className="size-4" />
        Back to news
      </Link>

      <h1 className="mt-4 text-2xl font-extrabold text-slate-900">
        {isNew ? "Add news item" : "Edit news item"}
      </h1>

      {error && (
        <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
          {error}
        </p>
      )}

      <div className="mt-6 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-slate-600">Category</span>
            <select
              value={category}
              onChange={(e) => setCategory(Number(e.target.value))}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              {CATEGORY_LABELS.map((label, i) => (
                <option key={label} value={i}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-slate-600">Date</span>
            <input
              type="date"
              value={itemDate}
              onChange={(e) => setItemDate(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </label>
          <label className="flex items-end gap-2 pb-2.5">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm font-semibold text-slate-700">Published</span>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-slate-600">Image URL (optional)</span>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://…"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </label>
          {imageUrl.trim() && (
            <img
              src={imageUrl.trim()}
              alt=""
              className="h-[46px] w-20 shrink-0 rounded-lg border border-slate-200 object-cover"
              onError={(e) => (e.currentTarget.style.visibility = "hidden")}
              onLoad={(e) => (e.currentTarget.style.visibility = "visible")}
            />
          )}
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-3">
            {LANG_TABS.map((tab) => (
              <button
                key={tab.code}
                type="button"
                onClick={() => setActiveLang(tab.code)}
                className={`press rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  activeLang === tab.code
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
                {tab.code === "en" && <span className="ml-1 text-[10px] opacity-70">required</span>}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-slate-600">
                Title ({LANG_TABS.find((l) => l.code === activeLang)?.label})
              </span>
              <input
                value={title[activeLang] ?? ""}
                onChange={(e) => setTitle({ ...title, [activeLang]: e.target.value })}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-slate-600">
                Summary ({LANG_TABS.find((l) => l.code === activeLang)?.label})
              </span>
              <textarea
                value={summary[activeLang] ?? ""}
                onChange={(e) => setSummary({ ...summary, [activeLang]: e.target.value })}
                className="min-h-[110px] resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            to="/admin"
            className="press inline-flex items-center rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </Link>
          <button
            onClick={submit}
            disabled={saving}
            className="press shine inline-flex items-center rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white transition-all enabled:hover:-translate-y-0.5 enabled:hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  )
}
