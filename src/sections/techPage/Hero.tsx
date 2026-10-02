import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"
import FlowChips from "../../components/FlowChips"
import { dotGrid } from "../../lib/glow"

/** Typography-led composition, deliberately less photo-dependent than
    Capital Markets' image-split hero or Home's video hero, a giant faint
    background glyph plus the site's largest heading treatment carry the
    page's personality instead of a photo. */
export default function TechHero() {
  const { t } = useI18n()
  const h = t.techPage.hero

  return (
    <section
      id="top"
      className="relative -mt-[68px] overflow-hidden border-b border-[#1c2420] bg-[#16201e] text-white"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 85% 10%, rgba(42,111,168,0.22) 0%, transparent 55%), radial-gradient(50% 50% at 5% 100%, rgba(140,195,232,0.12) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: dotGrid(), backgroundSize: "26px 26px" }} />
        <span className="absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[420px] font-extrabold leading-none text-[#1c2420] opacity-40 xl:block">
          {"</>"}
        </span>
      </div>

      {/* On mobile, CTAs move directly after the heading/lead and ahead of
          the longer supporting paragraph + flow chips, so the primary
          action is reachable without scrolling past all of it first;
          desktop keeps the original top-to-bottom order. */}
      <div className={`${wrap} relative flex flex-col gap-10 py-16 sm:py-24 lg:py-40`}>
        <div className="order-1 flex max-w-[920px] flex-col gap-7">
          <Reveal className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[#8cc3e8]/60 bg-[#0a1e2a] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.66px] text-white">
              {h.tag}
            </span>
            <span className="inline-flex items-center rounded-full border border-[#8cc3e8]/60 bg-[#0a1e2a] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.66px] text-white">
              {h.badge}
            </span>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="font-display text-[28px] leading-[36px] font-bold tracking-tight sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px]"
          >
            {h.heading}
          </Reveal>
          <Reveal as="p" delay={140} className="max-w-[720px] text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
            {h.lead}
          </Reveal>
        </div>

        <Reveal delay={240} className="order-2 flex flex-wrap gap-4 sm:order-4">
          <a
            href="#capabilities"
            className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-[#e0a526] px-8 py-4 text-[15px] font-bold uppercase tracking-wide text-[#16201e] shadow-[0_8px_20px_rgba(224,165,38,0.25)] transition-[color,background-color,border-color,opacity,transform,box-shadow] hover:-translate-y-0.5 hover:brightness-105"
          >
            {h.ctaPrimary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            to="/contact"
            className="group press inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-[color,background-color,border-color,opacity,transform,box-shadow] hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5"
          >
            {h.ctaSecondary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={180} className="order-3 max-w-[720px] sm:order-2">
          <Paragraphs
            text={h.body}
            className="text-base leading-relaxed text-white/80 sm:text-lg"
            highlightClassName="text-[#8cc3e8]"
          />
        </Reveal>

        <Reveal delay={210} className="order-4 sm:order-3">
          <FlowChips
            steps={h.flow}
            chipClassName="border-[#8cc3e8]/40 bg-[#0a1e2a] text-white"
            arrowClassName="text-[#8cc3e8]/60"
          />
        </Reveal>
      </div>
    </section>
  )
}
