import { useEffect, useRef, useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { useI18n, type Lang } from "../i18n"

const OPTIONS: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "am", label: "AM", native: "አማርኛ" },
  { code: "om", label: "OM", native: "Afaan Oromoo" },
  { code: "ti", label: "TI", native: "ትግርኛ" },
]

export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const current = OPTIONS.find((o) => o.code === lang) ?? OPTIONS[0]

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="press flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-indigo-600"
      >
        {current.label}
        <ChevronDown className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        role="listbox"
        className={`absolute right-0 top-full z-50 mt-2 w-48 origin-top-right rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10 transition-all duration-150 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {OPTIONS.map((o) => (
          <button
            key={o.code}
            type="button"
            role="option"
            aria-selected={lang === o.code}
            onClick={() => {
              setLang(o.code)
              setOpen(false)
            }}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-indigo-50 hover:text-indigo-600 ${
              lang === o.code ? "font-semibold text-indigo-600" : "text-slate-600"
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                {o.label}
              </span>
              {o.native}
            </span>
            {lang === o.code && <Check className="size-4" />}
          </button>
        ))}
      </div>
    </div>
  )
}
