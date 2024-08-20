import {
  BackgroundOverlay,
  BackgroundVideo,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitleContainer,
  HeroSubtitle,
  HeroButton,
  HeroContentWrapper,
} from './homeHeroStyles'

export function HomeHero() {
  return (
    <>
      <HeroContainer>
        <BackgroundVideo autoPlay loop muted>
          <source src="src/assets/background_video.mp4" type="video/mp4" />
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
              <HeroButton>segmentos</HeroButton>
            </HeroSubtitleContainer>
          </HeroContentWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}