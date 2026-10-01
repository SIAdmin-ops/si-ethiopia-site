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
      style={{ backgroundImage: "linear-gradient(120deg, #083a3e 0%, #198388 100%)" }}
    >
      <div className={`${wrap} relative py-16 sm:py-24`}>
        <div className="grid gap-12 md:grid-cols-2 md:gap-0">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 120}
              variant={i === 0 ? "left" : "right"}
              className={`group ${i === 1 ? "md:border-l md:border-white/15 md:pl-14" : "md:pr-14"}`}
            >
              <div className="flex items-center gap-3 text-teal-200">
                <c.icon
                  className="size-5 shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  strokeWidth={1.8}
                />
                <h3 className="font-display text-xs font-bold uppercase tracking-[3px]">{c.title}</h3>
              </div>
              <p className="mt-6 font-display text-[22px] font-medium leading-[32px] tracking-tight text-white sm:text-[26px] sm:leading-[36px]">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
