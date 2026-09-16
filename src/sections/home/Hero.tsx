import { useEffect, useRef } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
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
            <HighlightSI text={p} className="text-indigo-300" />
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

  /* Honour reduced motion: hold on the poster frame instead of looping. */
  useEffect(() => {
    const el = videoParallax.current
    if (!el) return
    if (reducedMotion) el.pause()
    else void el.play().catch(() => {})
  }, [reducedMotion, videoParallax])

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
            "linear-gradient(120deg, rgba(13,63,66,0.5) 0%, rgba(15,23,42,0.35) 55%, rgba(25,131,136,0.3) 100%), linear-gradient(to top, rgba(2,6,23,0.85) 0%, transparent 30%), linear-gradient(to bottom, rgba(2,6,23,0.6) 0%, transparent 22%)",
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
            "radial-gradient(45% 55% at 12% 8%, rgba(25,131,136,0.35) 0%, transparent 60%), radial-gradient(40% 50% at 92% 95%, rgba(255,205,66,0.16) 0%, transparent 55%)",
        }}
      />

      <div className={`${wrap} relative py-28 pt-36 sm:py-32 sm:pt-40 lg:py-40`}>
        <div ref={copyParallax} className="parallax mx-auto flex max-w-5xl flex-col items-center text-center">
          <Reveal className="flex items-center gap-4 text-white drop-shadow-[0_2px_20px_rgba(25,131,136,0.5)]">
            <span aria-hidden className="h-px w-8 bg-gradient-to-r from-transparent to-white/50 sm:w-14" />
            <span className="font-display text-2xl font-extrabold uppercase tracking-[6px] sm:text-3xl lg:text-[44px]">
              Strategy Innovations Consultancy
            </span>
            <span aria-hidden className="h-px w-8 bg-gradient-to-l from-transparent to-white/50 sm:w-14" />
          </Reveal>
          <Reveal
            delay={40}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.66px] text-teal-100 shadow-[0_0_40px_rgba(25,131,136,0.35)] backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-300 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-teal-300" />
            </span>
            {h.eyebrow}
          </Reveal>
          <RevealText
            as="h1"
            text={h.heading}
            delay={80}
            className="mt-8 max-w-5xl font-display text-[32px] font-extrabold leading-[1.12] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)] sm:text-[46px] lg:text-[60px]"
          />
          <Reveal
            delay={160}
            className="mt-8 max-w-4xl rounded-3xl border border-white/15 bg-white/[0.07] px-6 py-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-10 sm:py-8"
          >
            <Paragraphs text={h.desc} className="text-base leading-relaxed text-white/95 sm:text-lg" />
          </Reveal>
          <Reveal delay={240} className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href="#divisions"
              className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-indigo-600/30 transition-all hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-2xl hover:shadow-indigo-600/50"
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
        className="press absolute inset-x-0 bottom-8 mx-auto hidden size-10 place-items-center rounded-full text-white/70 transition-colors hover:text-white sm:grid"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </button>
    </section>
  )
}
