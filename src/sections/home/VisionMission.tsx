import { Eye, Target } from "lucide-react"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"

export default function VisionMission() {
  const { t } = useI18n()
  const v = t.home.visionMission
  const cards = [
    { icon: Eye, title: v.visionTitle, body: v.visionBody },
    { icon: Target, title: v.missionTitle, body: v.missionBody },
  ]

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundImage: "linear-gradient(120deg, #0d3f42 0%, #198388 100%)" }}
    >
      <div className={`${wrap} relative py-24 sm:py-32`}>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 120}
              variant={i === 0 ? "left" : "right"}
              className="rounded-3xl border border-white/15 bg-white/[0.08] p-9 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 sm:p-12"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-indigo-200">
                <c.icon className="size-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{c.title}</h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/85 sm:text-base">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
