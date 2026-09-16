import Hero from "../sections/home/Hero"
import VisionMission from "../sections/home/VisionMission"
import FocusSectors from "../sections/home/FocusSectors"
import Pillars from "../sections/home/Pillars"
import Approach from "../sections/Approach"
import News from "../sections/home/News"
import Divisions from "../sections/home/Divisions"
import TrainingPartnership from "../sections/home/TrainingPartnership"
import Contact from "../sections/home/Contact"
import { useSeo } from "../lib/useSeo"

export default function Home() {
  useSeo(
    "Strategy Innovations Consultancy PLC | Capital Markets, Technology & Training Advisory",
    "SIC is Ethiopia's capital markets, technology, and training advisory firm, helping institutions launch, build, and grow through integrated Consult, Build, and Train capabilities.",
    "/",
    { standaloneTitle: true },
  )
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
