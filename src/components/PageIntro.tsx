import type { ReactNode } from "react"
import { Reveal, RevealText, wrap } from "../lib/motion"

/** Short banner atop each dedicated page eyebrow, heading, sub, optional extra content.
    `size="large"` matches the scale of the Capital Markets / Technology pages' own
    dedicated Hero sections, for a page like Training that uses PageIntro as its hero
    rather than a smaller secondary banner (About's usage stays at the default size). */
export default function PageIntro({
  eyebrow,
  heading,
  sub,
  gradient = "linear-gradient(120deg, #0d3f42 0%, #198388 100%)",
  bgImage,
  size = "default",
  children,
}: {
  eyebrow: string
  heading: string
  sub?: string
  gradient?: string
  bgImage?: string
  size?: "default" | "large"
  children?: ReactNode
}) {
  const large = size === "large"

  return (
    <section
      className="relative overflow-hidden text-white"
      style={!bgImage ? { backgroundImage: gradient } : undefined}
    >
      {bgImage && (
        <div aria-hidden className="absolute inset-0">
          <img src={bgImage} alt="" className="absolute inset-0 size-full object-cover" loading="lazy" />
          <div className="absolute inset-0 opacity-90" style={{ backgroundImage: gradient }} />
        </div>
      )}
      <div className={`${wrap} relative ${large ? "py-24 sm:py-32 lg:py-40" : "py-16 sm:py-20"}`}>
        <Reveal className="flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-white" />
          <span
            className={`font-bold uppercase text-white/80 ${
              large ? "text-[11px] tracking-[0.66px] sm:text-xs" : "text-xs tracking-[0.96px]"
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
        {large ? (
          <RevealText
            as="h1"
            delay={80}
            text={heading}
            className="mt-6 max-w-3xl font-display text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[58px] lg:text-[72px]"
          />
        ) : (
          <Reveal
            as="h1"
            delay={80}
            className="mt-4 max-w-2xl font-display text-[30px] font-extrabold leading-tight tracking-tight sm:text-[44px]"
          >
            {heading}
          </Reveal>
        )}
        {sub && (
          <Reveal
            as="p"
            delay={140}
            className={`max-w-2xl leading-relaxed text-white/85 ${large ? "mt-6 text-base sm:text-lg" : "mt-4 sm:text-lg"}`}
          >
            {sub}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
