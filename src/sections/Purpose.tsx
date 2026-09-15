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
    <section id="about" className="relative overflow-hidden bg-slate-950 text-white">
      <div aria-hidden className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=1800&h=1000&fit=crop&auto=format"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-30"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(2,6,23,0.9) 0%, rgba(30,27,75,0.85) 55%, rgba(2,6,23,0.94) 100%)",
          }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.6) 1px, transparent 1.4px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className={`${wrap} relative py-24 sm:py-32`}>
        <Reveal className="flex items-center justify-center gap-2.5">
          <span className="size-2 rounded-full bg-white" />
          <span className="text-xs font-bold uppercase tracking-[0.96px] text-white/80">
            {p.eyebrow}
          </span>
        </Reveal>
        <RevealText
          as="h2"
          delay={80}
          text={p.heading}
          className="mx-auto mt-4 max-w-2xl text-center font-display text-[30px] font-extrabold leading-tight tracking-tight sm:text-[44px] lg:text-[52px]"
        />

        <div className="relative mt-16 grid gap-14 sm:grid-cols-2 sm:gap-0">
          <div
            aria-hidden
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent sm:block"
          />
          {blocks.map(({ key, title, body, icon: Icon }, i) => (
            <Reveal
              key={key}
              variant={i === 0 ? "left" : "right"}
              delay={i * 120}
              className={`flex flex-col items-start gap-5 ${i === 0 ? "sm:pr-14" : "sm:pl-14"}`}
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-indigo-300 ring-1 ring-white/15">
                <Icon className="size-6" strokeWidth={1.8} />
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h3>
              <p className="max-w-md leading-relaxed text-white/75 sm:text-lg">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
