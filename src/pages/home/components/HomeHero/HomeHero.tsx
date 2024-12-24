import {
  BackgroundOverlay,
  BackgroundVideo,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitleContainer,
  HeroSubtitle,
  HeroContentWrapper,
} from './homeHeroStyles'

import HeroVideo from '../../../../assets/background_video.mp4'
import { Button } from '../../../../components/Button/Button';

export function HomeHero() {
  return (
    <>
      <HeroContainer>
        <BackgroundVideo autoPlay loop muted playsInline> 
          <source src={HeroVideo} type="video/mp4" />
        </BackgroundVideo>
        <BackgroundOverlay />
        <HeroContent>
          <HeroContentWrapper>
            <HeroTitle>
              Excelência <br/> 
              em Serviços de Drones
            </HeroTitle>
            <HeroSubtitleContainer>
              <HeroSubtitle>
                Conectando você a serviços inovadores com drones no estado <br/> 
                de São Paulo e em
                todo o Brasil.
              </HeroSubtitle>
              <Button title='segmentos' to="/segmentos" btnIcon>Soluções especializadas</Button>
            </HeroSubtitleContainer>
          </HeroContentWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}