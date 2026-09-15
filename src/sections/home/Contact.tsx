import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Clock, Check, ChevronDown, ArrowRight } from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"

export default function HomeContact() {
  const { t } = useI18n()
  const c = t.home.contact
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", company: "", division: "", msg: "" })
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!valid) return
    setSent(true)
  }

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"

  const infoRows = [
    { icon: Mail, label: c.emailLabel, value: c.email },
    { icon: Phone, label: c.phoneLabel, value: c.phone },
    { icon: MapPin, label: c.addressLabel, value: c.address },
    { icon: Clock, label: c.hoursLabel, value: c.hours },
  ]

  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
        <Reveal variant="left">
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-indigo-600">
            {c.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[40px] lg:text-[44px]">
            {c.heading}
          </h2>

          <div className="mt-8 space-y-4">
            {infoRows.map((row) => (
              <div key={row.label} className="group flex items-center gap-3 text-slate-700">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <row.icon className="icon-pop size-[18px]" strokeWidth={2} />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {row.label}
                  </span>
                  <span className="whitespace-pre-line text-sm font-medium">{row.value}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={120}
          variant="right"
          className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 sm:p-8"
        >
          {sent ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
              <span className="grid size-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                <Check className="size-7" strokeWidth={2.5} />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                {c.successTitle.replace("{name}", form.name.split(" ")[0])}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-slate-600">{c.successBody}</p>
              <button
                onClick={() => {
                  setSent(false)
                  setForm({ name: "", email: "", company: "", division: "", msg: "" })
                }}
                className="mt-6 text-sm font-semibold text-indigo-600"
              >
                {c.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
              <h3 className="text-lg font-extrabold text-slate-900">{c.formTitle}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-600">{c.nameLabel}</span>
                  <input
                    className={field}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={c.namePh}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-600">{c.emailFieldLabel}</span>
                  <input
                    className={field}
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={c.emailPh}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-slate-600">{c.companyLabel}</span>
                <input
                  className={field}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder={c.companyPh}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-slate-600">{c.divisionLabel}</span>
                <div className="relative">
                  <select
                    className={`${field} appearance-none pr-10`}
                    value={form.division}
                    onChange={(e) => setForm({ ...form, division: e.target.value })}
                  >
                    <option value="" disabled>
                      {c.divisionPh}
                    </option>
                    {t.home.divisions.items.map((d) => (
                      <option key={d.title} value={d.title}>
                        {d.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                </div>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-slate-600">{c.messageLabel}</span>
                <textarea
                  className={`${field} min-h-[110px] resize-y`}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder={c.messagePh}
                />
              </label>
              <button
                type="submit"
                disabled={!valid}
                className="group press shine inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all enabled:hover:-translate-y-0.5 enabled:hover:bg-indigo-500 enabled:hover:shadow-xl enabled:hover:shadow-indigo-600/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {c.submit}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
