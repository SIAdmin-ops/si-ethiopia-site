/** Wraps standalone "SIC" mentions in bold, brand-colored text so the
    company's initialism visually pops out of running paragraph copy. */
export function HighlightSI({ text, className = "text-indigo-600" }: { text: string; className?: string }) {
  return (
    <>
      {text.split(/(\bSIC\b)/g).map((part, i) =>
        part === "SIC" ? (
          <strong key={i} className={`font-extrabold ${className}`}>
            SIC
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}
