import PageIntro from "../components/PageIntro"
import OurStory from "../sections/about/OurStory"
import Purpose from "../sections/Purpose"
import OurValues from "../sections/about/OurValues"
import Partners from "../sections/about/Partners"
import SetsApart from "../sections/home/SetsApart"
import { useI18n } from "../i18n"

export default function About() {
  const { t } = useI18n()
  return (
    <>
      <PageIntro
        eyebrow={t.aboutPage.eyebrow}
        heading={t.aboutPage.heading}
        sub={t.aboutPage.sub}
        bgImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&h=700&fit=crop&auto=format"
        size="large"
      />
      <OurStory />
      <Purpose />
      <OurValues />
      <Partners />
      <SetsApart />
    </>
  )
}
