import ContactHero from "../sections/contactPage/Hero"
import Contact from "../sections/Contact"

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Contact showIntro={false} />
    </>
  )
}
