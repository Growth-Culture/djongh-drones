import { HeroPages } from  '../../components/HeroPages/HeroPages'
import servicesImage from '../../assets/imgs/hero-page.png'
import { ServiceSection } from '../home/components/ServiceSection/ServiceSection'
import { CardSection } from './components/CardSection/CardSection'
import { VideoSection } from './components/VideoSection/VideoSection'

export function ServicesPage() {
  return (
    <>
    <HeroPages 
    title='Segmentos'
    subtitle="Elevate your content with our high-quality drone footage"
    backgroundImage={servicesImage} />
    <CardSection />
    <VideoSection />
    <ServiceSection />
    </>
  )
}