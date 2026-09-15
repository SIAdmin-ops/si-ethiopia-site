/** Wraps standalone "SI" mentions in bold, brand-colored text so the
    company's initialism visually pops out of running paragraph copy. */
export function HighlightSI({ text, className = "text-indigo-600" }: { text: string; className?: string }) {
  return (
    <>
      {text.split(/(\bSI\b)/g).map((part, i) =>
        part === "SI" ? (
          <strong key={i} className={`font-extrabold ${className}`}>
            SI
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}
