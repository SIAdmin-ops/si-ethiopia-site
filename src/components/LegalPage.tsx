import type { ReactNode } from "react"
import { wrap } from "../lib/motion"
import { LEGAL, pendingLegalItems } from "../lib/legal"

/** Inline marker for a fact that is not yet confirmed. Renders the confirmed
    value when there is one, otherwise a visible placeholder. */
export function Tbc({ value, label }: { value?: string; label: string }) {
  if (value) return <>{value}</>
  return (
    <mark className="rounded bg-amber-100 px-1 text-basalt" title="Pending confirmation">
      [{label}: to be confirmed]
    </mark>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-[20px] leading-[28px] font-semibold text-green lg:text-[24px] lg:leading-[32px]">
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3 leading-relaxed text-text-secondary">{children}</div>
    </section>
  )
}

export default function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  const pending = pendingLegalItems()
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className={wrap}>
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-[28px] leading-[36px] font-bold tracking-tight text-green sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px]">
            {title}
          </h1>
          <p className="mt-4 text-sm text-text-secondary">
            {LEGAL.operatorName} · Effective: <Tbc value={LEGAL.effectiveDate} label="effective date" />
          </p>
          <p className="mt-6 text-lg leading-relaxed text-basalt">{intro}</p>

          {pending.length > 0 && (
            <aside
              role="note"
              className="mt-8 rounded-2xl border border-gold-text/40 bg-amber-50 p-5 text-sm text-basalt"
            >
              <p className="font-semibold">Draft: pending confirmation by {LEGAL.operatorName}</p>
              <p className="mt-1">These details must be confirmed before this page is final:</p>
              <ul className="mt-2 list-disc pl-5">
                {pending.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          )}

          {children}
        </article>
      </div>
    </section>
  )
}
