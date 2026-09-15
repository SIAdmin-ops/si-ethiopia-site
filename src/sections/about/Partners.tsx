import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"

/* Fallback gradient (used when a partner has no photo yet), index-matched to partners.people. */
const ACCENT_GRADIENTS = [
  "linear-gradient(135deg, #198388 0%, #0d3f42 100%)",
  "linear-gradient(135deg, #1f9ea4 0%, #115457 100%)",
  "linear-gradient(135deg, #c49610 0%, #5b4508 100%)",
]

/** Large alternating photo/name rows rather than a 3-up card grid —
    portraits get room to read as an editorial leadership spread instead of
    a cramped repeat of the same card shape used everywhere else. */
export default function Partners() {
  const { t } = useI18n()
  const p = t.aboutPage.partners

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className={wrap}>
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-indigo-600">
            {p.eyebrow}
          </span>
          <h2 className="font-display text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[40px] lg:text-[46px]">
            {p.heading}
          </h2>
          <p className="leading-relaxed text-slate-600">{p.sub}</p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {p.people.map((person, i) => {
            const flip = i % 2 === 1
            return (
              <Reveal
                key={person.name}
                variant={flip ? "right" : "left"}
                delay={i * 100}
                className="grid items-center gap-8 sm:grid-cols-2 sm:gap-16"
              >
                <div className={`group relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200 sm:aspect-[3/4] ${flip ? "sm:order-2" : ""}`}>
                  {person.photo.length > 0 ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="grid size-full place-items-center text-7xl font-extrabold text-white/90"
                      style={{ backgroundImage: ACCENT_GRADIENTS[i % ACCENT_GRADIENTS.length] }}
                      aria-hidden
                    >
                      {person.initials}
                    </div>
                  )}
                </div>
                <div className={flip ? "sm:order-1" : ""}>
                  <span className="font-mono text-xs text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-indigo-600">{person.role}</p>
                  <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-[40px]">
                    {person.name}
                  </h3>
                  {/* person.focus hidden for now, per request */}
                  {/* <p className="mt-4 max-w-sm leading-relaxed text-slate-600">{person.focus}</p> */}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
