import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "102.4rem",
};


export const Container = styled.div`
width: 100%;
max-width: 144rem;
margin: 0 auto;
padding: 6rem 8.4rem;

display: flex;
justify-content: space-between;   

overflow: hidden;

@media (max-width: ${breakPoints.mobile}){
  max-width: 48rem;
  flex-direction: column;
  padding: 2rem;
  gap: 4rem;
}
`

export const CardsWrapper = styled.div`
width: 70%;
display: flex;
flex-wrap: wrap;
gap: 3.8rem;
@media (max-width: ${breakPoints.mobile}){
  width: 100%;
  flex-direction: column;
}
`

export const Card = styled.div`
width: 100%;
max-width: 26rem;
padding: 1.8rem;
background-color: #F9F9F9;
border-radius: 1.2rem;

display: flex;
flex-direction: column;
gap: 1.2rem;

transition: 0.2s linear;

  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-1rem);
    h3, p {
      color: #fff;
    }
  }

  @media (max-width: ${breakPoints.mobile}){
  width: 100%;
  max-width: 48rem;
}
`

export const CardHeader = styled.p`
font-size: 2.6rem;
line-height: 2.8rem;
font-weight: 500;
color: var(--primary-color);
transition: color 0.2s ease;
`

export const CardTitle = styled.h3`
font-size: 1.9rem;
line-height: 2.4rem;
font-weight: 500;
color: #1E1E1E;
transition: color 0.2s ease;
`

export const CardDescription = styled.p`
font-size: 1.6rem;
line-height: 1.9rem;
color: #1E1E1E;
transition: color 0.2s ease;
`

export const ImgWrapper = styled.div`
width: 30%;
@media (max-width: ${breakPoints.mobile}){
  width: 100%;
}
`

export const ServiceImg = styled.img`

height: 52rem;
object-fit: cover;
border-radius: 1.2rem;
width: 400px;

@media (max-width: ${breakPoints.mobile}){
  width: 100%;
}
`