import { useEffect, useState } from "react"

/** Samples an image's pixels (downscaled onto an offscreen canvas) and
    returns its average color as "r, g, b", so a card can theme itself off
    a photo's dominant tone. Silently returns null if the URL is missing, the
    image hasn't loaded yet, or the canvas is CORS-tainted by a host that
    doesn't send Access-Control-Allow-Origin for images callers should
    always have a static fallback for that case. */
export function useAverageColor(src: string | null | undefined): string | null {
  const [color, setColor] = useState<string | null>(null)

  useEffect(() => {
    setColor(null)
    if (!src) return
    let cancelled = false

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      if (cancelled) return
      try {
        const size = 24
        const canvas = document.createElement("canvas")
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        ctx.drawImage(img, 0, 0, size, size)
        const { data } = ctx.getImageData(0, 0, size, size)

        let r = 0
        let g = 0
        let b = 0
        let count = 0
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] < 32) continue // skip near-transparent pixels
          r += data[i]
          g += data[i + 1]
          b += data[i + 2]
          count++
        }
        if (count === 0 || cancelled) return
        setColor(`${Math.round(r / count)}, ${Math.round(g / count)}, ${Math.round(b / count)}`)
      } catch {
        // Cross-origin image without CORS headers taints the canvas —
        // getImageData throws. Fall back silently.
      }
    }
    img.src = src

    return () => {
      cancelled = true
    }
  }, [src])

  return color
}
