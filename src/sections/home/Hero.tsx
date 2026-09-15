import { useEffect } from "react"
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

  /* Honour reduced motion: hold on the poster frame instead of looping. */
  useEffect(() => {
    const el = videoParallax.current
    if (!el) return
    if (reducedMotion) el.pause()
    else void el.play().catch(() => {})
  }, [reducedMotion, videoParallax])

  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      {/* background video (drop your file at public/hero-video.mp4) */}
      <video
        ref={videoParallax}
        className="parallax absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload={reducedMotion ? "metadata" : "auto"}
        poster="https://images.unsplash.com/photo-1689732888407-310424e3a372?w=1600&h=900&fit=crop&auto=format"
        aria-hidden
      >
        {/* Uncomment once public/hero-video.webm exists it must come first so
            browsers prefer it; while the file is missing it costs a 404 per load. */}
        {/* <source src="/hero-video.webm" type="video/webm" /> */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* tint: darken + brand wash so hero content stays legible over the video */}
      <div aria-hidden className="absolute inset-0 bg-slate-950/40" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(13,63,66,0.45) 0%, rgba(15,23,42,0.3) 55%, rgba(25,131,136,0.25) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: dotGrid(), backgroundSize: "26px 26px" }}
      />

      <div className={`${wrap} relative py-28 sm:py-36 lg:py-48`}>
        <div ref={copyParallax} className="parallax mx-auto flex max-w-5xl flex-col items-center text-center">
          <Reveal className="font-display text-3xl font-extrabold uppercase tracking-[6px] text-white drop-shadow-[0_2px_20px_rgba(25,131,136,0.5)] sm:text-4xl lg:text-[52px]">
            Strategy Innovations
          </Reveal>
          <Reveal delay={40} className="mt-6 inline-flex items-center rounded-full border border-indigo-400/60 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.66px] text-indigo-200">
            {h.eyebrow}
          </Reveal>
          <RevealText
            as="h1"
            text={h.heading}
            delay={80}
            className="mt-8 max-w-5xl font-display text-[32px] font-extrabold leading-[1.12] tracking-tight sm:text-[46px] lg:text-[60px]"
          />
          <Reveal
            delay={160}
            className="mt-8 max-w-4xl rounded-2xl border border-white/15 bg-white/[0.07] px-6 py-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:px-10 sm:py-8"
          >
            <Paragraphs text={h.desc} className="text-base leading-relaxed text-white/95 sm:text-lg" />
          </Reveal>
          <Reveal delay={240} className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href="#divisions"
              className="group press shine inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-indigo-600/25 transition-all hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-2xl hover:shadow-indigo-600/40"
            >
              {h.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group press inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white/10"
            >
              {h.ctaSecondary}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
