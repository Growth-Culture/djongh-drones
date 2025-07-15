import { HeroPages } from  '../../components/HeroPages/HeroPages'
import servicesImage from '../../assets/imgs/hero-page.png'
import { CardSection } from './components/CardSection/CardSection'
import { VideoSection } from './components/VideoSection/VideoSection'

export function ServicesPage() {
  return (
    <>
    <HeroPages 
    title='Serviços'
    subtitle="Eleve seu conteúdo com nossas filmagens de alta qualidade."
    backgroundImage={servicesImage} />
    <CardSection />
    <VideoSection />
    </>
  )
}