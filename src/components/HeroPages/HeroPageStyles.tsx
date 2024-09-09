import styled from "styled-components";

const breakPoints = {
    mobile: "48rem",
    tablet: "102.4rem",
  };

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-top: -12rem;
    `

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    height: 100%;
    `

export const HeroContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 144rem;
    z-index: 1;
    padding: 8.4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;

    @media (max-width: ${breakPoints.mobile}) {
        padding: 3rem 2rem;
    }
    `

export const HeroContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 1.5rem;
    `

export const HeroTitle = styled.h2`
    font-size: 7rem;
    color: #fff;
    font-weight: 500;
    
    @media (max-width: ${breakPoints.mobile}) {
        font-size: 5rem;
    }
    `

export const HeroSubtitleContainer = styled.div`
    display: flex;
    
`

export const HeroSubtitle = styled.p`
    margin-right: 19rem;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    line-height: 1.9rem;
    font-weight: 500;
    color: #fff;
    
    
    @media (max-width: ${breakPoints.mobile}) {
        margin-right: 2rem;
    }

`
