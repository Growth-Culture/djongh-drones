import { HeroPages } from "../../components/HeroPages/HeroPages"
import servicesImage from '../../assets/imgs/hero-page.png'
import { TextAndVideoSection } from "./components/TextAndVideoSection/TextAndVideoSection"
import { CounterAndImageSection } from "./components/CounterAndImageSection/CounterAndImageSection"
import { VideoSection } from "../services/components/VideoSection/VideoSection"
import { PartnershipSection } from "../contact/components/PartnershipSection/PartnershipSection"


export function AboutPage() {
  return (
    <>
    <HeroPages
    title="Sobre nós"
    subtitle="Exatidão no diagnóstico e precisão na entrega dos projetos"
    backgroundImage={servicesImage}
    />
    <TextAndVideoSection />
    <CounterAndImageSection />
    <VideoSection />
    <PartnershipSection />
    
    </>


  )
}