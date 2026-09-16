import { useEffect } from "react"

export const SITE_NAME = "Strategy Innovations Consultancy PLC"
export const SITE_URL = "https://siintnl.com"

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}

function setCanonical(href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement("link")
    tag.setAttribute("rel", "canonical")
    document.head.appendChild(tag)
  }
  tag.setAttribute("href", href)
}

/** Sets the per-route document title, meta description, canonical link, and
    Open Graph tags on mount. This is a client-only SPA (one static
    index.html shell for every route via `vercel.json`'s catch-all rewrite),
    so route-specific metadata has to be applied in JS rather than baked
    into per-page HTML. Updates existing tags in place instead of using
    React's built-in `<title>`/`<meta>` hoisting, since that would leave
    the static fallback tags from `.figma/make/site.json` in the document
    alongside these rather than replacing them. */
export function useSeo(
  title: string,
  description: string,
  path: string,
  options?: { standaloneTitle?: boolean; noindex?: boolean },
) {
  useEffect(() => {
    const fullTitle = options?.standaloneTitle ? title : `${title} | ${SITE_NAME}`
    const url = `${SITE_URL}${path}`
    document.title = fullTitle
    setMetaTag("name", "description", description)
    setMetaTag("name", "robots", options?.noindex ? "noindex, nofollow" : "index, follow")
    setCanonical(url)
    setMetaTag("property", "og:title", fullTitle)
    setMetaTag("property", "og:description", description)
    setMetaTag("property", "og:url", url)
  }, [title, description, path, options?.standaloneTitle, options?.noindex])
}
