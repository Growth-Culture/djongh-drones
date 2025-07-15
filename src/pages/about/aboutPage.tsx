import { HeroPages } from "../../components/HeroPages/HeroPages"
import servicesImage from '../../assets/imgs/hero-page.png'
import { TextAndVideoSection } from "./components/TextAndVideoSection/TextAndVideoSection"
import { CounterAndImageSection } from "./components/CounterAndImageSection/CounterAndImageSection"
import { VideoSection } from "../services/components/VideoSection/VideoSection"
import { PartnershipSection } from "../../components/PartnershipSection/PartnershipSection"
import { AboutInfoSection } from "./components/AboutInfoSection/AboutInfoSection"


export function AboutPage() {
  return (
    <>
    <HeroPages
    title="Quem Somos"
    subtitle="Soluções inovadoras e de alta precisão utilizando a tecnologia de drones"
    backgroundImage={servicesImage}
    />
    <TextAndVideoSection />
    <CounterAndImageSection />
    <AboutInfoSection />
    <VideoSection />
    <PartnershipSection />
    
    </>


  )
}