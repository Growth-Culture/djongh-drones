import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "102.4rem",
};

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh + .5rem);
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-top: -12rem;
`
export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`

export const HeroContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 144rem;
  z-index: 1;
  padding: 7.8rem 8.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: ${breakPoints.mobile}) {
    padding: 2rem;
  }

 
`

export const HeroContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 7rem;

  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
    gap: 3rem;
  }

`

export const HeroTitle = styled.h2`
  font-size: 10rem;
  color: #fff;
  font-weight: 500;
  line-height: 12.8rem; 

  @media (max-width: ${breakPoints.mobile}) {
    font-size:  6rem;
    line-height: 8rem; 
  }
`

export const HeroSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.8rem;
  padding-bottom: 3rem;
`

export const HeroSubtitle = styled.p`
  margin-right: 19rem;
  font-size: 1.6rem;
  letter-spacing: .1rem;
  line-height: 1.9rem;
  font-weight: 300;
  color: #fff;

  @media (max-width: ${breakPoints.mobile}) {
    margin-right: 0;
  }
`