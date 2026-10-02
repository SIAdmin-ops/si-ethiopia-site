import { useEffect, useRef, useState } from "react"
import { wrap } from "../lib/motion"

export interface SectionNavItem {
  id: string
  label: string
}

/** Sticky in-page menu for long division pages. Scroll-spies the given
    section ids via IntersectionObserver and underlines the active one in
    Deep Teal. Desktop only — on a long single-column mobile layout an
    in-page jump menu adds more clutter than it saves. */
export default function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => !!el)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  useEffect(() => {
    const activeLink = navRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`)
    activeLink?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" })
  }, [active])

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-[68px] z-30 hidden border-b border-border bg-white/95 backdrop-blur-sm lg:block"
    >
      <div ref={navRef} className={`${wrap} flex gap-1 overflow-x-auto`}>
        {items.map((it) => {
          const on = it.id === active
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`relative shrink-0 whitespace-nowrap px-4 py-3.5 text-sm font-semibold transition-colors ${
                on ? "text-green" : "text-text-secondary hover:text-green"
              }`}
            >
              {it.label}
              <span
                className={`absolute inset-x-4 bottom-0 h-[2px] rounded-full bg-green transition-opacity ${
                  on ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          )
        })}
      </div>
    </nav>
  )
}
