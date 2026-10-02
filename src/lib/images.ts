/** Responsive srcSet for Unsplash URLs of the form `...?w=1600&h=900&fit=crop&auto=format`,
    keeping the crop ratio so phones don't download desktop-sized heroes. */
export function unsplashSrcSet(url: string, widths: number[] = [640, 1024, 1600]): string | undefined {
  const m = url.match(/[?&]w=(\d+)&h=(\d+)/)
  if (!url.includes("images.unsplash.com") || !m) return undefined
  const ratio = Number(m[2]) / Number(m[1])
  return widths
    .map((w) => `${url.replace(/([?&])w=\d+&h=\d+/, `$1w=${w}&h=${Math.round(w * ratio)}`)} ${w}w`)
    .join(", ")
}
