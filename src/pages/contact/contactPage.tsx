import { HeroPages } from "../../components/HeroPages/HeroPages";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { ImgAndTextSection } from "../home/components/ImgAndTextSection/ImgAndTextSection";
import { PartnershipSection } from "./components/PartnershipSection/PartnershipSection";

import contactsImage from '../../assets/imgs/hero-page.png'

export function ContactPage() {
  return (
    <>
      <HeroPages
      title="Entre em contato"
      subtitle="Elevate your content with our high-quality drone footage"
      backgroundImage={contactsImage}
      />
      <ContactSection />
      <ImgAndTextSection />
      <PartnershipSection />
    </>
  )
}