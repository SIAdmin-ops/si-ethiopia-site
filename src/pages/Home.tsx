import Hero from "../sections/home/Hero"
import VisionMission from "../sections/home/VisionMission"
import FocusSectors from "../sections/home/FocusSectors"
import Pillars from "../sections/home/Pillars"
import Approach from "../sections/Approach"
import News from "../sections/home/News"
import Divisions from "../sections/home/Divisions"
import TrainingPartnership from "../sections/home/TrainingPartnership"
import Contact from "../sections/home/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <VisionMission />
      <FocusSectors />
      <Pillars />
      <Approach />
      <Divisions />
      <TrainingPartnership />
      <News />
      <Contact />
    </>
  )
}
