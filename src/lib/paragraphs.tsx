import { HighlightSI } from "./highlightSI"

/** Splits on explicit "\n" breaks so a field written as several distinct
    sentences renders as separate paragraphs instead of one run-on block.
    Wraps each paragraph's text in HighlightSI so standalone "SIC" mentions
    pop out consistently wherever this is used. */
export function Paragraphs({
  text,
  className,
  highlightClassName,
}: {
  text: string
  className: string
  highlightClassName?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      {text
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} className={className}>
            <HighlightSI text={p} className={highlightClassName} />
          </p>
        ))}
    </div>
  )
}
