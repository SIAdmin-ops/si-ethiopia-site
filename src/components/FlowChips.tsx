import { ArrowRight } from "lucide-react"

/** A chain of pill chips connected by arrows, the site's established visual
    for "step 1 → step 2 → ... → outcome" framework statements (first built
    inline in ServicesGrid.tsx's "From Requirement to Outcome" panel). */
export default function FlowChips({
  steps,
  chipClassName = "border-amber-400/30 bg-amber-500/10 text-amber-200",
  arrowClassName = "text-white/25",
}: {
  steps: readonly string[]
  chipClassName?: string
  arrowClassName?: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-1.5">
          <span className={`rounded-full border px-3 py-1.5 text-xs font-bold sm:text-sm ${chipClassName}`}>
            {step}
          </span>
          {i < steps.length - 1 && <ArrowRight className={`size-3.5 shrink-0 ${arrowClassName}`} />}
        </div>
      ))}
    </div>
  )
}
