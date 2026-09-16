import PageIntro from "../components/PageIntro"
import OurStory from "../sections/about/OurStory"
import Purpose from "../sections/Purpose"
import OurValues from "../sections/about/OurValues"
import Partners from "../sections/about/Partners"
import SetsApart from "../sections/home/SetsApart"
import { useI18n } from "../i18n"
import { useSeo } from "../lib/useSeo"

export default function About() {
  const { t } = useI18n()
  useSeo(
    "About Us",
    "SIC is the advisory, technology, and training partner behind some of Ethiopia's first licensed financial institutions. Learn our story and what we've built.",
    "/about",
  )
  return (
    <>
      <PageIntro
        eyebrow={t.aboutPage.eyebrow}
        heading={t.aboutPage.heading}
        sub={t.aboutPage.sub}
        bgImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&h=700&fit=crop&auto=format"
        size="large"
        overlapHeader
      />
      <OurStory />
      <Purpose />
      <OurValues />
      <Partners />
      <SetsApart />
    </>
  )
}
