import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "90rem",
};

export const Container = styled.div`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 1rem 8.5rem;
  margin-bottom: 8.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    gap: 2rem;
  }

`;

export const Divider = styled.span`
width: 100%;
height: 1px;
background-color: var(--primary-color);
margin: 4rem 0;
`

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
  margin-bottom: 3rem;

  h2 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 5rem;
  }

  @media (max-width: ${breakPoints.mobile}) {
    margin-bottom: 1rem;
  }
`;



export const SectionContentWrapper = styled.div`
width: 70%;
  
@media (max-width: ${breakPoints.mobile}) {
  width: 100% 
  }
`

export const SectionDescription = styled.p`
font-size: 1.6rem;
font-weight: 300;
line-height: 2rem;
margin-bottom: 3.6rem;
`

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${breakPoints.mobile}) {
   grid-template-columns: repeat(1, 1fr); 
  }
`

export const SectionTag = styled.p`
font-size: 1.8rem;
font-weight: 500;
color: var(--primary-color);
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: .8rem;

  span {
    color: var(--primary-color)
  }

  h3 {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

`
