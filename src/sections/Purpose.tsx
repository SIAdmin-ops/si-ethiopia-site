import { Eye, Compass } from "lucide-react"
import { Reveal, RevealText, wrap } from "../lib/motion"
import { useI18n } from "../i18n"

/** Vision & Mission as an editorial split-statement layout two large blocks
    divided by a vertical rule, rather than a pair of identical glass cards. */
export default function Purpose() {
  const { t } = useI18n()
  const p = t.purpose

  const blocks = [
    { key: "vision", title: p.visionTitle, body: p.visionBody, icon: Eye },
    { key: "mission", title: p.missionTitle, body: p.missionBody, icon: Compass },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-mist text-basalt">
      <div className={`${wrap} relative py-16 sm:py-24`}>
        <Reveal className="flex items-center justify-center gap-2.5">
          <span className="size-2 rounded-full bg-gold" />
          <span className="text-xs font-bold uppercase tracking-[0.96px] text-gold-text">
            {p.eyebrow}
          </span>
        </Reveal>
        <RevealText
          as="h2"
          delay={80}
          text={p.heading}
          className="mx-auto mt-4 max-w-2xl text-center font-display text-[24px] leading-[32px] font-bold tracking-tight text-green sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]"
        />

        <div className="relative mt-16 grid gap-14 sm:grid-cols-2 sm:gap-0">
          <div
            aria-hidden
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent sm:block"
          />
          {blocks.map(({ key, title, body, icon: Icon }, i) => (
            <Reveal
              key={key}
              variant={i === 0 ? "left" : "right"}
              delay={i * 120}
              className={`flex flex-col items-start gap-5 ${i === 0 ? "sm:pr-14" : "sm:pl-14"}`}
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-white text-green ring-1 ring-border">
                <Icon className="size-6" strokeWidth={1.8} />
              </span>
              <h3 className="text-[20px] leading-[28px] font-semibold tracking-tight text-green lg:text-[24px] lg:leading-[32px]">{title}</h3>
              <p className="max-w-md leading-relaxed text-text-secondary sm:text-lg">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
