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
        <BackgroundVideo autoPlay loop muted>
          <source src={HeroVideo} type="video/mp4" />
        </BackgroundVideo>
        <BackgroundOverlay />
        <HeroContent>
          <HeroContentWrapper>
            <HeroTitle>Serviços com Drones</HeroTitle>
            <HeroSubtitleContainer>
              <HeroSubtitle>
                Sua parceira para serviços de drones no estado de São Paulo e em
                todo o Brasil.
              </HeroSubtitle>
              <Button title='segmentos' to="/service" btnIcon>Segmentos</Button>
            </HeroSubtitleContainer>
          </HeroContentWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}