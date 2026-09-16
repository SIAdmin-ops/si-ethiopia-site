import ContactHero from "../sections/contactPage/Hero"
import Contact from "../sections/Contact"
import { useSeo } from "../lib/useSeo"

export default function ContactPage() {
  useSeo(
    "Contact Us",
    "Tell us about your institution and get a tailored capital markets, technology, or training programme plan from SIC's partner team.",
    "/contact",
  )
  return (
    <>
      <ContactHero />
      <Contact showIntro={false} />
    </>
  )
}
