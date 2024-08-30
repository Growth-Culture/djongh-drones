import { HomeHero } from "./components/HomeHero/HomeHero";
import { ImgAndTextSection } from "./components/ImgAndTextSection/ImgAndTextSection";
import { ServiceSection } from "./components/ServiceSection/ServiceSection";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <ServiceSection />
      <ImgAndTextSection />
    </>
  );
}
