import Hero from "../sections/training/Hero"
import Approach from "../sections/training/Approach"
import TrainingSectors from "../sections/training/Sectors"
import Delivery from "../sections/training/Delivery"
import RelatedAreas from "../sections/RelatedAreas"
import Closing from "../sections/training/Closing"
import { useSeo } from "../lib/useSeo"

export default function Training() {
  useSeo(
    "Training & Capacity Building",
    "Structured training and capacity-building programmes in capital markets, technology, and AI, tailored to Ethiopia's regulatory and market requirements.",
    "/training",
  )
  return (
    <>
      <Hero />
      <Approach />
      {/* anchor target for the Hero/Closing "Explore Our Training Programmes"
          CTA now that Financial Literacy has moved to its own page */}
      <div id="programmes">
        <TrainingSectors />
      </div>
      <Delivery />
      <RelatedAreas current={2} />
      <Closing />
    </>
  )
}
