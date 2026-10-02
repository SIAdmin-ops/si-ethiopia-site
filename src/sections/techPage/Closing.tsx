import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal, wrap } from "../../lib/motion"
import { useI18n } from "../../i18n"
import { Paragraphs } from "../../lib/paragraphs"
import FlowChips from "../../components/FlowChips"

export default function TechClosing() {
  const { t } = useI18n()
  const c = t.techPage.closing

  return (
    <section className="bg-green py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="block">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/20 p-10 text-center sm:p-16"
          >
            <div aria-hidden className="absolute inset-0 opacity-[0.12]">
              <img alt="" className="size-full object-cover" src="/tech-page/cta-texture.webp" loading="lazy" />
            </div>
            <div className="relative flex flex-col items-center gap-7">
              <h2 className="max-w-2xl font-display text-[24px] leading-[32px] font-bold tracking-tight text-slate-50 sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]">
                {c.heading}
              </h2>
              <Paragraphs
                text={c.body}
                className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
                highlightClassName="text-blue-300"
              />

              <div className="w-full max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {c.philosophyLabel}
                </p>
                <div className="mt-4 flex justify-center">
                  <FlowChips
                    steps={c.philosophy}
                    chipClassName="border-blue-400/30 bg-blue-500/10 text-blue-200"
                    arrowClassName="text-slate-500"
                  />
                </div>
              </div>

              <p className="max-w-2xl font-sans text-2xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-3xl">
                {c.finalHeading}
              </p>

              <Link
                to="/contact"
                className="group press shine inline-flex items-center gap-2.5 rounded-lg bg-gold px-8 py-4 text-[15px] font-bold uppercase tracking-[1.5px] text-basalt shadow-[0_4px_8px_rgba(224,165,38,0.4)] transition-[color,background-color,border-color,opacity,transform,box-shadow] hover:-translate-y-0.5"
              >
                {c.button}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex flex-col items-center gap-1.5 text-sm font-medium text-slate-300">
                <p>{c.email}</p>
                <p className="whitespace-pre-line">{c.phone}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
