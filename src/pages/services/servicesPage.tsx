import { HeroPages } from  '../../components/HeroPages/HeroPages'
import servicesImage from '../../assets/imgs/hero-page.png'

export function ServicesPage() {
  return (
    <>
    <HeroPages 
    title='Segmentos'
    subtitle="Elevate your content with our high-quality drone footage"
    backgroundImage={servicesImage} />
    <h1>Services Page</h1>
    </>
  )
}