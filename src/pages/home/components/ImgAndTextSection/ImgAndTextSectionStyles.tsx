import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
margin-bottom: 6rem;
`
export const ImageWrapper = styled.div`
width: 50%;
`
export const Image = styled.img`
width: 100%;
height: 100%;
`

export const TextWrapper = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 6.6rem;
background-color: var(--primary-color);
color: #fff;

  h2 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 5rem;
  }
`

export const InfosWrapper = styled.div`
display: flex;
gap: 3.6rem;

 > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 5rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
  }
 }
`

