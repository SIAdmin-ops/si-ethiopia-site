import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react"
import {
  fetchAllNews,
  deleteNewsItem,
  setNewsPublished,
  localize,
  formatNewsDate,
  type NewsItem,
} from "../../lib/news"

const CATEGORY_LABELS = ["Capital Markets", "Technology", "Training", "Company"]

export default function AdminDashboard() {
  const [items, setItems] = useState<NewsItem[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)

  const load = () => {
    setError(null)
    fetchAllNews()
      .then(setItems)
      .catch((e) => setError(e.message ?? "Failed to load news items."))
  }

  useEffect(load, [])

  const togglePublished = async (item: NewsItem) => {
    setBusyId(item.id)
    try {
      await setNewsPublished(item.id, !item.published)
      load()
    } catch (e: any) {
      setError(e.message ?? "Failed to update.")
    } finally {
      setBusyId(null)
    }
  }

  const remove = async (item: NewsItem) => {
    if (!confirm(`Delete "${localize(item.title, "en")}"? This can't be undone.`)) return
    setBusyId(item.id)
    try {
      await deleteNewsItem(item.id)
      load()
    } catch (e: any) {
      setError(e.message ?? "Failed to delete.")
    } finally {
      setBusyId(null)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-extrabold text-slate-900">News items</h1>
        <Link
          to="/admin/news/new"
          className="press inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-indigo-500"
        >
          <Plus className="size-4" />
          Add news item
        </Link>
      </div>

      {error && (
        <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
          {error}
        </p>
      )}

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {items === null ? (
          <p className="p-6 text-sm text-slate-500">Loading…</p>
        ) : items.length === 0 ? (
          <p className="p-6 text-sm text-slate-500">
            No news items yet.{" "}
            <Link to="/admin/news/new" className="font-semibold text-indigo-600">
              Add the first one
            </Link>
            .
          </p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3" />
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((item) => (
                <tr key={item.id} className={busyId === item.id ? "opacity-50" : ""}>
                  <td className="px-5 py-4">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="h-10 w-14 rounded-md object-cover"
                      />
                    ) : (
                      <div className="h-10 w-14 rounded-md bg-slate-100" />
                    )}
                  </td>
                  <td className="max-w-xs truncate px-5 py-4 font-semibold text-slate-900">
                    {localize(item.title, "en")}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{CATEGORY_LABELS[item.category]}</td>
                  <td className="px-5 py-4 text-slate-600">{formatNewsDate(item.itemDate, "en")}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                        item.published
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {item.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => togglePublished(item)}
                        disabled={busyId === item.id}
                        title={item.published ? "Unpublish" : "Publish"}
                        className="press grid size-8 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                      >
                        {item.published ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>
                      <Link
                        to={`/admin/news/${item.id}`}
                        className="press grid size-8 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                        title="Edit"
                      >
                        <Pencil className="size-4" />
                      </Link>
                      <button
                        onClick={() => remove(item)}
                        disabled={busyId === item.id}
                        title="Delete"
                        className="press grid size-8 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-rose-50 hover:text-rose-600"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
