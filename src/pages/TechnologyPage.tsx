import Hero from "../sections/techPage/Hero"
import Approach from "../sections/techPage/Approach"
import Capabilities from "../sections/techPage/Capabilities"
import RelatedAreas from "../sections/RelatedAreas"
import Closing from "../sections/techPage/Closing"
import { useSeo } from "../lib/useSeo"

export default function TechnologyPage() {
  useSeo(
    "Technology & AI Delivery",
    "SIC designs, builds, and implements technology, AI, and cybersecurity solutions built around the real operational requirements of capital markets and financial institutions.",
    "/technology",
  )
  return (
    <>
      <Hero />
      <Approach />
      <Capabilities />
      <RelatedAreas current={1} />
      <Closing />
    </>
  )
}
