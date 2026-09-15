/** Subtle, decorative background line-art purely presentational, never interactive.
    Each variant loosely echoes the theme of the page/section it sits behind. */
export type MotifVariant = "network" | "markets" | "tech" | "training" | "about" | "contact"

const POSITION: Record<MotifVariant, string> = {
  network: "-right-16 -top-16 sm:-right-6 sm:-top-10",
  markets: "-right-10 -bottom-16 sm:right-0 sm:-bottom-10",
  tech: "-right-20 -top-24 sm:-right-8 sm:-top-16",
  training: "-left-16 -bottom-20 sm:-left-6 sm:-bottom-10",
  about: "-right-20 -top-20 sm:-right-10 sm:-top-14",
  contact: "-right-14 -bottom-14 sm:right-0 sm:-bottom-6",
}

const SIZE: Record<MotifVariant, string> = {
  network: "w-[420px] sm:w-[520px]",
  markets: "w-[440px] sm:w-[560px]",
  tech: "w-[440px] sm:w-[560px]",
  training: "w-[380px] sm:w-[480px]",
  about: "w-[420px] sm:w-[520px]",
  contact: "w-[360px] sm:w-[440px]",
}

function NetworkArt() {
  const nodes = [
    [40, 60], [140, 30], [230, 90], [310, 40], [70, 160],
    [190, 170], [300, 150], [380, 100], [230, 260], [110, 250],
  ]
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [5, 2], [5, 6], [6, 7], [3, 7],
    [4, 9], [5, 8], [8, 6], [9, 8],
  ]
  return (
    <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill="currentColor" />
      ))}
    </svg>
  )
}

function MarketsArt() {
  const bars = [
    { x: 20, h: 60 }, { x: 60, h: 90 }, { x: 100, h: 50 }, { x: 140, h: 120 },
    { x: 180, h: 80 }, { x: 220, h: 150 }, { x: 260, h: 110 }, { x: 300, h: 190 },
    { x: 340, h: 140 }, { x: 380, h: 220 },
  ]
  const base = 260
  return (
    <svg viewBox="0 0 440 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={base - b.h}
          width="20"
          height={b.h}
          rx="2"
          fill="currentColor"
          opacity={i % 2 === 0 ? 0.9 : 0.5}
        />
      ))}
      <path
        d="M20 220 L100 190 L180 150 L260 120 L340 70 L400 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="400" cy="40" r="6" fill="currentColor" />
    </svg>
  )
}

function TechArt() {
  const pts: [number, number][] = [
    [60, 40], [200, 40], [340, 40], [60, 160], [200, 160], [340, 160], [60, 280], [200, 280], [340, 280],
  ]
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 40 H200 M200 40 V160 M200 40 H340 M60 160 H200 M340 160 V280 M60 160 V280 M200 160 H340 M60 280 H200 M200 280 H340" stroke="currentColor" strokeWidth="1.5" />
      {pts.map(([x, y], i) => (
        <rect key={i} x={x - 7} y={y - 7} width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      ))}
      <circle cx="200" cy="160" r="5" fill="currentColor" />
    </svg>
  )
}

function TrainingArt() {
  return (
    <svg viewBox="0 0 360 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* open book */}
      <path
        d="M40 190 C70 175 110 170 140 182 V70 C110 58 70 63 40 78 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M240 190 C210 175 170 170 140 182 V70 C170 58 210 63 240 78 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M60 90 L120 80 M60 112 L120 102 M60 134 L120 124 M160 80 L220 90 M160 102 L220 112 M160 124 L220 134" stroke="currentColor" strokeWidth="1.5" />
      {/* graduation cap */}
      <path d="M140 20 L230 52 L140 84 L50 52 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M195 62 V96 C195 108 170 116 140 116 C110 116 85 108 85 96 V62" stroke="currentColor" strokeWidth="2" />
      <path d="M230 52 V92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="230" cy="98" r="4" fill="currentColor" />
    </svg>
  )
}

function AboutArt() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" />
      <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1.5" />
      <path d="M200 40 V70 M200 330 V360 M40 200 H70 M330 200 H360" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M200 150 L225 200 L200 250 L175 200 Z" fill="currentColor" />
    </svg>
  )
}

function ContactArt() {
  return (
    <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M380 380 A300 300 0 0 0 80 80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" />
      <path d="M380 380 A220 220 0 0 0 160 160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" />
      <path d="M380 380 A140 140 0 0 0 240 240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" />
      <path d="M60 220 L200 140 L340 190" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M180 100 L200 140 L150 155 Z" fill="currentColor" />
      <circle cx="60" cy="220" r="5" fill="currentColor" />
      <circle cx="340" cy="190" r="5" fill="currentColor" />
    </svg>
  )
}

const ART: Record<MotifVariant, () => React.JSX.Element> = {
  network: NetworkArt,
  markets: MarketsArt,
  tech: TechArt,
  training: TrainingArt,
  about: AboutArt,
  contact: ContactArt,
}

export default function Motif({
  variant,
  className = "",
}: {
  variant: MotifVariant
  className?: string
}) {
  const Art = ART[variant]
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${POSITION[variant]} ${SIZE[variant]} hidden opacity-[0.06] sm:block ${className}`}
    >
      <Art />
    </div>
  )
}
