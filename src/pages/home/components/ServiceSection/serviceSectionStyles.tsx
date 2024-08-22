import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 144rem;
margin: 0 auto;
padding: 6rem 8.4rem;

display: flex;
justify-content: space-between;   
gap: 11rem;
`

export const CardsWrapper = styled.div`
width: 50%;
display: flex;
flex-wrap: wrap;
gap: 3.8rem;
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
`

export const CardHeader = styled.p`
font-size: 2.6rem;
line-height: 2.8rem
font-weigth: 500;
color: var(--primary-color);
transition: color 0.2s ease;
`

export const CardTitle = styled.h3`
font-size: 2rem;
line-height: 2.4rem;
font-weight: 500;
color: #1E1E1E;
transition: color 0.2s ease;
`

export const CardDescription = styled.p`
font-size: 1.6rem;
line-height: 2rem;
color: #1E1E1E;
transition: color 0.2s ease;
`

export const ImgWrapper = styled.div`
width: 50%;
`

export const ServiceImg = styled.img`
height: 39rem;
object-fit: cover;
border-radius: 1.2rem;
`