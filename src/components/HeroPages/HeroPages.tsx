import {
    HeroContainer,
    BackgroundImage,
    HeroContent,
    HeroContentWrapper,
    HeroTitle,
    HeroSubtitleContainer,
    HeroSubtitle
} from "./HeroPageStyles"

interface HeroPagesProps {
    title: string;
    subtitle: string;
    backgroundImage:  string;
}

export function HeroPages({title, subtitle, backgroundImage} : HeroPagesProps) {
    return (
        <>
            <HeroContainer>
                <BackgroundImage src={backgroundImage} />
                <HeroContent>
                    <HeroContentWrapper>
                        <HeroTitle>{title}</HeroTitle>

                        <HeroSubtitleContainer>
                            <HeroSubtitle>{subtitle}</HeroSubtitle>
                        </HeroSubtitleContainer>
                    </HeroContentWrapper>

                </HeroContent>

            </HeroContainer>

        </>
    )
}