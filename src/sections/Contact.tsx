import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Zap, Check, ArrowRight } from "lucide-react"
import { Reveal, wrap } from "../lib/motion"
import { useI18n } from "../i18n"
import Motif from "../components/Motif"
import { submitContactForm } from "../lib/contact"

export default function Contact({ showIntro = true }: { showIntro?: boolean }) {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", org: "", msg: "" })
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!valid || submitting) return
    setSubmitting(true)
    setError(false)
    try {
      await submitContactForm({
        source: "contact",
        name: form.name,
        email: form.email,
        organization: form.org,
        message: form.msg,
      })
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <Motif variant="contact" className="text-indigo-600" />
      <div className={`${wrap} relative grid gap-12 lg:grid-cols-2`}>
        <Reveal variant="left">
          {showIntro && (
            <>
              <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-indigo-600">
                {t.contact.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[40px]">
                {t.contact.heading}
              </h2>
              <p className="mt-4 max-w-md text-slate-600">{t.contact.desc}</p>
            </>
          )}

          <div className={showIntro ? "mt-8 space-y-3" : "space-y-3"}>
            {[
              { icon: Mail, label: "peter.morris@strategy-innovations.com" },
              { icon: Phone, label: "+251 91 120 3937\n+251 94 732 7373" },
              { icon: MapPin, label: t.contact.location },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="group flex items-center gap-3 text-slate-700">
                <span className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon className="icon-pop size-[18px]" strokeWidth={2} />
                </span>
                <span className="whitespace-pre-line text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
            <Zap className="size-3.5" /> {t.contact.limited}
          </div>
        </Reveal>

        <Reveal
          delay={120}
          variant="right"
          className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8"
        >
          {sent ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <span className="grid size-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                <Check className="size-7" strokeWidth={2.5} />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                {t.contact.successTitle.replace("{name}", form.name.split(" ")[0])}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-slate-600">{t.contact.successBody}</p>
              <button
                onClick={() => {
                  setSent(false)
                  setForm({ name: "", email: "", org: "", msg: "" })
                }}
                className="mt-6 text-sm font-semibold text-indigo-600"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
              <h3 className="text-lg font-extrabold text-slate-900">{t.contact.formTitle}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-600">{t.contact.fullName}</span>
                  <input
                    className={field}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.phName}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-600">{t.contact.workEmail}</span>
                  <input
                    className={field}
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.phEmail}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-slate-600">{t.contact.institution}</span>
                <input
                  className={field}
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  placeholder={t.contact.phOrg}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-slate-600">{t.contact.building}</span>
                <textarea
                  className={`${field} min-h-[110px] resize-y`}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder={t.contact.phMsg}
                />
              </label>
              {error && (
                <p className="text-sm font-medium text-red-600" role="alert">
                  {t.contact.error}
                </p>
              )}
              <button
                type="submit"
                disabled={!valid || submitting}
                className="group press shine inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all enabled:hover:-translate-y-0.5 enabled:hover:bg-indigo-500 enabled:hover:shadow-xl enabled:hover:shadow-indigo-600/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? t.contact.submitting : t.contact.submit}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
