import Hero from "../sections/techPage/Hero"
import Approach from "../sections/techPage/Approach"
import Capabilities from "../sections/techPage/Capabilities"
import RelatedAreas from "../sections/RelatedAreas"
import Closing from "../sections/techPage/Closing"

export default function TechnologyPage() {
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
