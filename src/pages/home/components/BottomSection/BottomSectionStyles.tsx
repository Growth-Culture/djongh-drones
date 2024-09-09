import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "102.4rem",
};

export const Container = styled.div`
width: 100%;
max-width: 144rem;
margin: 0 auto;
padding: 9rem 8.4rem;

display: flex;
justify-content: space-between;  
align-items: center; 
gap: 11rem;

overflow: hidden;

  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    align-items: center;
    gap: 2rem;
  }
`

export const TextWrapper = styled.div`
width: 50%;
display: flex;
flex-direction: column;
@media (max-width: ${breakPoints.mobile}){
    width: 100%;
    padding-top: 6rem;
    align-items: center;
    text-align: center;
  }
`

export const SectionTag = styled.p`
font-size: 1.8rem;
font-weight: 500;
color: var(--primary-color);
`

export const SectionTitle = styled.h2`
font-size: 5rem;
font-weight: 500;
margin-top: 1rem;
margin-bottom: 3rem;
`
export const SectionDescription = styled.p`
font-size: 1.6rem;
font-weight: 300;
line-height: 2rem;
margin-bottom: 3.6rem;
`

export const ImgWrapper = styled.div`
width: 50%;
@media (max-width: ${breakPoints.mobile}){
    width: 100%;
  }
`

export const ServiceImg = styled.img`
height: 45rem;
object-fit: cover;
@media (max-width: ${breakPoints.mobile}){
    width: 100%;
    height: 100%;
  }
`