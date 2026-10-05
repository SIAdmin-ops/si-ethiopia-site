import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"

/* English-only bios, shown in every language (deliberately not translated).
   Index-matched to partners.people. */
const BIOS: { paragraphs: string[]; experience: string[] }[] = [
  {
    // Peter Morris
    paragraphs: [
      "A leader with a proven record of building and transforming organisations in the global financial sector, with experience across capital origination, M&A, advisory, project finance, operations, technology, treasury, risk management, and regulatory and compliance.",
      "Peter has held board, executive and senior management positions at some of the world's major financial institutions, and has advised Deutsche Bank, Société Générale, BNP Paribas, Nomura and UBS. He has contributed to the development of capital markets in the USA, Europe and emerging markets, and sat on industry committees shaping how those ecosystems develop.",
      "In Ethiopia, he works with regulators, the local exchange and the CSD to define the capital markets ecosystem, infrastructure and operating model.",
    ],
    experience: ["Bank of America", "Lehman Brothers", "Commerzbank", "BGC Cantor", "Saxo Bank", "Citibank"],
  },
  {
    // Fantu Gola
    paragraphs: [
      "A management professional with over 40 years of experience, notably in Ethiopia's hospitality and international development sectors. Fantu holds an MSc in Economics and diplomas in Marketing Management and Physical Distribution, and is a registered Professional Management Consultant accredited by the Ministry of Finance of Ethiopia.",
      "His roles range from Operations Manager for prominent hotel chains to Country Manager of Crown Agents Ethiopia. A trusted advisor in government and internationally funded projects, including initiatives backed by the European Union, World Bank and UN, he has developed over 130 business plans and feasibility studies across multiple sectors. He is fluent in English, Czech and Amharic.",
    ],
    experience: ["Crown Agents Ethiopia", "Herfazy Tourism and Trade Services PLC"],
  },
  {
    // Gerard Lelliott
    paragraphs: [
      "A financial-services leader who sets and delivers AI, cloud and operational-resilience strategy for banks and fintechs. Over the past decade Gerard has owned technology and product for a global wealth platform's transfer-agency business, built and sold an AI communications fintech, and taken AI proposals to company boards and the FCA.",
      "He currently leads business continuity for ION Group's core trading platforms, and also consults on how AI is changing wealth management and trading across financial markets.",
    ],
    experience: ["ION Group", "FNZ"],
  },
]

/* Fallback gradient (used when a partner has no photo yet), index-matched to partners.people. */
const ACCENT_GRADIENTS = [
  "linear-gradient(135deg, #0e4d3c 0%, #051f19 100%)",
  "linear-gradient(135deg, #2d7158 0%, #072c23 100%)",
  "linear-gradient(135deg, #78ad98 0%, #072c23 100%)",
]

/** Large alternating photo/name rows rather than a 3-up card grid —
    portraits get room to read as an editorial leadership spread instead of
    a cramped repeat of the same card shape used everywhere else. */
export default function Partners() {
  const { t } = useI18n()
  const p = t.aboutPage.partners

  return (
    <section className="overflow-hidden bg-mist py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.66px] text-teal-600">
            {p.eyebrow}
          </span>
          <h2 className="font-display text-[24px] leading-[32px] font-bold tracking-tight text-slate-900 sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]">
            {p.heading}
          </h2>
          <p className="leading-relaxed text-slate-600">{p.sub}</p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {p.people.map((person, i) => {
            const flip = i % 2 === 1
            const bio = BIOS[i]
            return (
              <Reveal
                key={person.name}
                variant={flip ? "right" : "left"}
                delay={i * 100}
                className="grid items-center gap-8 sm:grid-cols-2 sm:gap-16"
              >
                <div className={`group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200 sm:aspect-[3/4] ${flip ? "sm:order-2" : ""}`}>
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
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-teal-600">{person.role}</p>
                  <h3 className="mt-3 font-display text-[20px] leading-[28px] font-semibold tracking-tight text-slate-900 lg:text-[24px] lg:leading-[32px]">
                    {person.name}
                  </h3>
                  {bio && (
                    <>
                      <div className="mt-5 flex max-w-md flex-col gap-3">
                        {bio.paragraphs.map((para) => (
                          <p key={para} className="leading-relaxed text-text-secondary">
                            {para}
                          </p>
                        ))}
                      </div>
                      <div className="mt-6 max-w-md border-t border-border pt-5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gold-text">Experience</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {bio.experience.map((org) => (
                            <li
                              key={org}
                              className="rounded-full border border-border bg-white px-3.5 py-1.5 text-[13px] font-semibold text-basalt"
                            >
                              {org}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
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
