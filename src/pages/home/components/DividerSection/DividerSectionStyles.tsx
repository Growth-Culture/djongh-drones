import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "102.4rem",
};

export const Container = styled.div`
width: 100%;
min-height: 50rem;
padding: 9.7rem;
background-color: var(--primary-color);
display: flex;

position: relative;

border-radius: 0 0 20rem 0;

overflow: hidden;

  @media (max-width: ${breakPoints.mobile}) {
    padding: 5rem;
    flex-direction: column;
    justify-content: flex-end;
  }
`

export const TextWrapper = styled.div`
width: 60%;
height: auto;
display: flex;
flex-direction: column;
justify-content: flex-end;

@media (max-width: ${breakPoints.mobile}) {
   width: 100%;
  }
`

export const TextDivider = styled.p`
color: #fff;
font-size: 3.5rem;
line-height: 4rem;

@media (max-width: ${breakPoints.mobile}) {
   font-size: 3rem;
   line-height: 3.2rem;
  }
`

export const Img = styled.img`
height: 30.2rem;
position: absolute;
top: 0;
right: 0;

@media (max-width: ${breakPoints.mobile}) {
  height: 15rem;
  }
`