import { GraduationCap, Scale, Cpu, Globe2, Users } from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"

const PARTNER_ICONS = [GraduationCap, Scale, Cpu, Globe2, Users]

/* Stock photography for the two categories without a named partner yet. */
const PARTNER_IMAGES = [
  "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=500&h=320&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=320&fit=crop&auto=format",
]

/* Real named partners, positionally matched to t.home.trainingPartnership.partners[0..2].
   `dark` cards hold a white-on-transparent logo, so they need a dark background to read. */
const PARTNER_LOGOS: { src: string; role: string; dark?: boolean }[] = [
  { src: "/partners/nguc.png", role: "Academic & Education Partner" },
  { src: "/partners/falcon-systems-tech.png", role: "Technology Partner", dark: true },
  { src: "/partners/bgm-consultancy.png", role: "Tax & Business Advisory Partner" },
]

/** Light, two-column "editorial + card grid" treatment: statement and close
    on the left, the five partner types as a hoverable icon-card grid on the
    right. Blue-accented to match the Training division's brand color. */
export default function TrainingPartnership() {
  const { t } = useI18n()
  const p = t.home.trainingPartnership

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16`}>
        <Reveal variant="left">
          <p className="text-sm font-bold text-blue-600">{p.tagline}</p>
          <h2 className="mt-2 font-display text-[26px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] lg:text-[44px]">
            {p.eyebrow}
          </h2>
          <div className="mt-5 max-w-md">
            <Paragraphs text={p.body} className="leading-relaxed text-slate-600" highlightClassName="text-blue-600" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">{p.closingBody}</p>
          <p className="mt-6 max-w-md text-base font-extrabold leading-snug text-slate-900">{p.closing}</p>
          <p className="mt-3 text-sm font-semibold italic text-blue-600">{p.finalTagline}</p>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{p.partnersLabel}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {p.partners.map((partner, i) => {
              const Icon = PARTNER_ICONS[i] ?? Users
              const logo = PARTNER_LOGOS[i]
              return (
                <div
                  key={partner}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                >
                  {logo ? (
                    <div
                      className={`relative flex h-24 items-center justify-center overflow-hidden ${logo.dark ? "bg-slate-950" : "bg-white"}`}
                    >
                      <img
                        src={logo.src}
                        alt={partner}
                        className="h-full max-h-20 w-auto object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="relative h-24 overflow-hidden">
                      <img
                        src={PARTNER_IMAGES[i - PARTNER_LOGOS.length] ?? PARTNER_IMAGES[0]}
                        alt=""
                        className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                      <span className="absolute bottom-2 left-2 grid size-8 place-items-center rounded-lg bg-white/95 text-blue-600 shadow-sm backdrop-blur-sm">
                        <Icon className="size-4" strokeWidth={1.8} />
                      </span>
                    </div>
                  )}
                  <div className="p-3.5">
                    <span className="text-sm font-bold text-slate-800">{partner}</span>
                    {logo && <span className="mt-0.5 block text-xs font-semibold text-blue-600">{logo.role}</span>}
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
