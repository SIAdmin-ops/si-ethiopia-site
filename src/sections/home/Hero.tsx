import { useEffect, useRef, type CSSProperties } from "react"
import { ArrowRight } from "lucide-react"
import { Reveal, RevealText, useParallax, usePrefersReducedMotion, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { HighlightSI } from "../../lib/highlightSI"
import { dotGrid } from "../../lib/glow"

/** Splits on explicit "\n" breaks so a field written as several distinct
    sentences renders as separate paragraphs instead of one run-on block. */
function Paragraphs({ text, className }: { text: string; className: string }) {
  return (
    <div className="flex flex-col gap-4">
      {text
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} className={className}>
            <HighlightSI text={p} className="text-teal-300" />
          </p>
        ))}
    </div>
  )
}

export default function HomeHero() {
  const { t } = useI18n()
  const h = t.home.hero
  const videoParallax = useParallax<HTMLVideoElement>(-0.12)
  const copyParallax = useParallax(0.06)
  const reducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  /* Honour reduced motion: hold on the poster frame instead of looping. */
  useEffect(() => {
    const el = videoParallax.current
    if (!el) return
    if (reducedMotion) el.pause()
    else void el.play().catch(() => {})
  }, [reducedMotion, videoParallax])

  /* Subtle cursor-follow glow, desktop pointer only. A cheap, purposeful
     touch of interactivity for the site's single biggest moment — never
     applied elsewhere. Skipped entirely for touch/coarse pointers and
     reduced-motion, and throttled to rAF so it can't fight scroll work. */
  useEffect(() => {
    if (reducedMotion) return
    if (!window.matchMedia("(pointer: fine)").matches) return
    const section = sectionRef.current
    const glow = spotlightRef.current
    if (!section || !glow) return
    let raf = 0
    let x = 0
    let y = 0
    const apply = () => {
      raf = 0
      glow.style.setProperty("--x", `${x}px`)
      glow.style.setProperty("--y", `${y}px`)
    }
    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect()
      x = e.clientX - rect.left
      y = e.clientY - rect.top
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const onEnter = () => glow.style.setProperty("--glow-opacity", "1")
    const onLeave = () => glow.style.setProperty("--glow-opacity", "0")
    section.addEventListener("pointermove", onMove)
    section.addEventListener("pointerenter", onEnter)
    section.addEventListener("pointerleave", onLeave)
    return () => {
      section.removeEventListener("pointermove", onMove)
      section.removeEventListener("pointerenter", onEnter)
      section.removeEventListener("pointerleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [reducedMotion])

  const scrollToNext = () => {
    const next = sectionRef.current?.nextElementSibling
    next?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative -mt-[68px] flex min-h-[100svh] items-center overflow-hidden bg-slate-950 text-white"
    >
      {/* background video (drop your file at public/hero-video.mp4), wrapped
          so its slow "Ken Burns" zoom (a separate transform) doesn't fight
          the scroll-driven parallax transform useParallax writes onto the
          video element itself every frame. */}
      <div aria-hidden className="absolute inset-x-0 -top-[10%] h-[120%] w-full overflow-hidden">
        <video
          ref={videoParallax}
          className="hero-zoom parallax size-full object-cover"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload={reducedMotion ? "metadata" : "auto"}
          poster="https://images.unsplash.com/photo-1689732888407-310424e3a372?w=1600&h=900&fit=crop&auto=format"
        >
          {/* Uncomment once public/hero-video.webm exists it must come first so
              browsers prefer it; while the file is missing it costs a 404 per load. */}
          {/* <source src="/hero-video.webm" type="video/webm" /> */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* tint: darken + brand wash so hero content stays legible over the video */}
      <div aria-hidden className="absolute inset-0 bg-slate-950/50" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(8,58,62,0.5) 0%, rgba(15,23,42,0.35) 55%, rgba(25,131,136,0.3) 100%), linear-gradient(to top, rgba(14,31,33,0.85) 0%, transparent 30%), linear-gradient(to bottom, rgba(14,31,33,0.6) 0%, transparent 22%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: dotGrid(), backgroundSize: "26px 26px" }}
      />
      {/* soft brand glow blobs for extra depth in the corners */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(45% 55% at 12% 8%, rgba(25,131,136,0.35) 0%, transparent 60%), radial-gradient(40% 50% at 92% 95%, rgba(227,166,20,0.16) 0%, transparent 55%)",
        }}
      />
      {/* cursor-follow spotlight, desktop pointer only (see effect above) */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={
          {
            "--x": "50%",
            "--y": "50%",
            "--glow-opacity": 0,
            opacity: "var(--glow-opacity)",
            background:
              "radial-gradient(480px circle at var(--x) var(--y), rgba(107,207,212,0.16), transparent 70%)",
          } as CSSProperties
        }
      />

      <div className={`${wrap} relative py-28 pt-36 sm:py-32 sm:pt-40 lg:py-40`}>
        <div ref={copyParallax} className="parallax mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal
            delay={0}
            className="flex flex-col items-center gap-3 text-white/90"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.66px] text-teal-100 shadow-[0_0_40px_rgba(25,131,136,0.35)] backdrop-blur-md">
              <span className="relative flex size-2">
                <span
                  className="absolute inline-flex size-full rounded-full bg-teal-300"
                  style={{ animation: "soft-pulse 2.4s ease-in-out infinite" }}
                />
                <span className="relative inline-flex size-2 rounded-full bg-teal-300" />
              </span>
              {h.eyebrow}
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[4px] text-white/50">
              Strategy Innovations Consultancy
            </span>
          </Reveal>

          <RevealText
            as="h1"
            text={h.heading}
            delay={80}
            className="mt-7 max-w-3xl font-display text-[32px] leading-[40px] font-bold tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[64px]"
          />

          {/* On mobile, the CTAs move ahead of the (four-paragraph) description
              so the primary action is reachable without scrolling through all
              of it first; desktop keeps the original description-then-CTA
              order. No content removed, only re-sequenced per viewport. */}
          <Reveal delay={200} className="order-4 mt-7 max-w-xl sm:order-none">
            <Paragraphs
              text={h.desc}
              className="text-base leading-relaxed text-white/85 drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] sm:text-lg"
            />
          </Reveal>

          <Reveal delay={280} className="order-3 mt-10 flex flex-col gap-3 sm:order-none sm:flex-row">
            <a
              href="#divisions"
              className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white shadow-xl shadow-teal-600/30 transition-all hover:-translate-y-0.5 hover:bg-teal-500 hover:shadow-2xl hover:shadow-teal-600/50"
            >
              {h.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group press inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/15"
            >
              {h.ctaSecondary}
            </a>
          </Reveal>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="press group absolute inset-x-0 bottom-8 mx-auto hidden flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/50 transition-colors group-hover:text-white/80">
          Scroll
        </span>
        <span className="relative h-9 w-5 rounded-full border border-white/30 transition-colors group-hover:border-white/60">
          <span
            aria-hidden
            className="absolute inset-x-0 top-1.5 mx-auto size-1.5 rounded-full bg-white/80"
            style={reducedMotion ? undefined : { animation: "scroll-cue 1.8s cubic-bezier(0.4,0,0.2,1) infinite" }}
          />
        </span>
      </button>
    </section>
  )
}
