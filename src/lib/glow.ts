/** Canonical "twin radial glow" recipe for dark sections, two soft color
    blobs (top-right + bottom-left) over a slate-950 field. Was copy-pasted
    with slightly different opacities/positions across ~10 files; centralized
    here so every dark section shares one tuned recipe, parameterized by the
    page's own accent so Capital Markets/Technology/Training/default all read
    as the same system in a different color. */
export type GlowAccent = "amber" | "teal" | "blue"

const ACCENT_RGB: Record<GlowAccent, string> = {
  amber: "224,165,38", // Teff Gold
  teal: "14,77,60", // Highland Green
  blue: "42,111,168", // Lake Blue
}

const COMPLEMENT_RGB: Record<GlowAccent, string> = {
  amber: "95,181,146", // Leaf
  teal: "224,165,38", // Teff Gold
  blue: "140,195,232", // Sky
}

export function glow(accent: GlowAccent = "amber") {
  return `radial-gradient(55% 70% at 100% 0%, rgba(${ACCENT_RGB[accent]},0.2) 0%, transparent 55%), radial-gradient(45% 60% at 0% 100%, rgba(${COMPLEMENT_RGB[accent]},0.14) 0%, transparent 50%)`
}

/** Same recipe with a dark scrim layered on top, for image/video-backed
    heroes that need the glow plus guaranteed text legibility. */
export function glowWithScrim(accent: GlowAccent = "amber") {
  return `linear-gradient(100deg, rgba(22,32,30,0.92) 0%, rgba(22,32,30,0.75) 45%, rgba(22,32,30,0.92) 100%), ${glow(accent)}`
}

/** Subtle dotted-grid texture overlay, reused across hero/statement sections. */
export function dotGrid(rgba = "255,255,255,0.5") {
  return `radial-gradient(circle at center, rgba(${rgba}) 1px, transparent 1.4px)`
}
