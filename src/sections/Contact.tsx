import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Zap, Check, ArrowRight } from "lucide-react"
import FormPrivacyNotice from "../components/FormPrivacyNotice"
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
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-basalt outline-none transition-shadow placeholder:text-text-secondary/70 focus:border-green focus:ring-2 focus:ring-green"

  return (
    <section id="contact" className="relative overflow-hidden bg-mist py-16 sm:py-24">
      <Motif variant="contact" className="text-green" />
      <div className={`${wrap} relative grid gap-8 lg:grid-cols-2`}>
        {/* form white card */}
        <Reveal
          variant="left"
          className="order-2 rounded-2xl border border-border bg-white p-6 sm:p-8 lg:order-1"
        >
          {sent ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <span className="grid size-14 place-items-center rounded-full bg-success/10 text-success">
                <Check className="size-7" strokeWidth={2.5} />
              </span>
              <h3 className="mt-5 text-[20px] leading-[28px] font-semibold text-basalt lg:text-[24px] lg:leading-[32px]">
                {t.contact.successTitle.replace("{name}", form.name.split(" ")[0])}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-text-secondary">{t.contact.successBody}</p>
              <button
                onClick={() => {
                  setSent(false)
                  setForm({ name: "", email: "", org: "", msg: "" })
                }}
                className="mt-6 text-sm font-semibold text-green"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
              <h3 className="text-[20px] leading-[28px] font-semibold text-basalt lg:text-[24px] lg:leading-[32px]">{t.contact.formTitle}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-text-secondary">{t.contact.fullName}</span>
                  <input
                    className={field}
                    maxLength={254}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.phName}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-text-secondary">{t.contact.workEmail}</span>
                  <input
                    className={field}
                    maxLength={254}
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.phEmail}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-text-secondary">{t.contact.institution}</span>
                <input
                  className={field}
                  maxLength={254}
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  placeholder={t.contact.phOrg}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-text-secondary">{t.contact.building}</span>
                <textarea
                  maxLength={5000}
                  className={`${field} min-h-[110px] resize-y`}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder={t.contact.phMsg}
                />
              </label>
              <FormPrivacyNotice />
              {error && (
                <p className="text-sm font-medium text-error" role="alert">
                  {t.contact.error}
                </p>
              )}
              <button
                type="submit"
                disabled={!valid || submitting}
                className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-green px-6 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-[color,background-color,border-color,opacity,transform,box-shadow] enabled:hover:-translate-y-0.5 enabled:hover:bg-green-hover enabled:hover:shadow-xl enabled:hover:shadow-green/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? t.contact.submitting : t.contact.submit}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>

        {/* contact details ink side panel */}
        <Reveal
          delay={120}
          variant="right"
          className="order-1 rounded-2xl bg-basalt p-6 text-white sm:p-8 lg:order-2"
        >
          {showIntro && (
            <>
              <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-sky">
                {t.contact.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-[24px] leading-[32px] font-bold tracking-tight text-white sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]">
                {t.contact.heading}
              </h2>
              <p className="mt-4 max-w-md text-white/80">{t.contact.desc}</p>
            </>
          )}

          <div className={showIntro ? "mt-8 space-y-3" : "space-y-3"}>
            {[
              { icon: Mail, label: "peter.morris@strategy-innovations.com" },
              { icon: Phone, label: "+251 91 120 3937\n+251 94 732 7373" },
              { icon: MapPin, label: t.contact.location },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="group flex items-center gap-3 text-white/80">
                <span className="grid size-10 place-items-center rounded-lg bg-white/10 text-sky transition-colors group-hover:bg-sky group-hover:text-basalt">
                  <Icon className="icon-pop size-[18px]" strokeWidth={2} />
                </span>
                <span className="whitespace-pre-line text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-sky ring-1 ring-white/15">
            <Zap className="size-3.5" /> {t.contact.limited}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
