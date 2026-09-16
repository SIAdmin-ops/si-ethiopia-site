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
      className="relative -mt-[68px] overflow-hidden border-b border-[#0d3f42] bg-[#092c2e] text-white"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 85% 10%, rgba(20,184,166,0.22) 0%, transparent 55%), radial-gradient(50% 50% at 5% 100%, rgba(56,189,248,0.12) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: dotGrid(), backgroundSize: "26px 26px" }} />
        <span className="absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[420px] font-extrabold leading-none text-[#0d3f42] opacity-40 xl:block">
          {"</>"}
        </span>
      </div>

      <div className={`${wrap} relative flex flex-col gap-10 py-24 sm:py-32 lg:py-40`}>
        <div className="flex max-w-[920px] flex-col gap-7">
          <Reveal className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[#a3e2e6] bg-[#0d3f42] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.66px] text-white">
              {h.tag}
            </span>
            <span className="inline-flex items-center rounded-full border border-[#a3e2e6] bg-[#0d3f42] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.66px] text-white">
              {h.badge}
            </span>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="font-display text-[40px] font-extrabold leading-[1.08] tracking-tight sm:text-[56px] lg:text-[72px]"
          >
            {h.heading}
          </Reveal>
          <Reveal as="p" delay={140} className="max-w-[720px] text-lg font-semibold leading-relaxed text-[#effafb] sm:text-xl">
            {h.lead}
          </Reveal>
          <Reveal delay={180} className="max-w-[720px]">
            <Paragraphs
              text={h.body}
              className="text-base leading-relaxed text-[#c3ddd8] sm:text-lg"
              highlightClassName="text-teal-200"
            />
          </Reveal>
        </div>

        <Reveal delay={210}>
          <FlowChips
            steps={h.flow}
            chipClassName="border-[#a3e2e6]/40 bg-[#0d3f42] text-[#effafb]"
            arrowClassName="text-[#a3e2e6]/50"
          />
        </Reveal>

        <Reveal delay={240} className="flex flex-wrap gap-4">
          <a
            href="#capabilities"
            className="group press shine inline-flex items-center justify-center gap-2 rounded-xl border border-[#a3e2e6] bg-[#0d3f42] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_6px_10px_rgba(13,63,66,0.3)] transition-all hover:-translate-y-0.5"
          >
            {h.ctaPrimary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            to="/contact"
            className="group press inline-flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-[#a3e2e6] bg-[#0d3f42] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-[#115457]"
          >
            {h.ctaSecondary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
