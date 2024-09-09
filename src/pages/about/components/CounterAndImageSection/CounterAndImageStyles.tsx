import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "102.4rem",
};

export const Container = styled.div`
width: 100%;
max-width: 144rem;
margin: 0 auto;
padding: 1rem 8.5rem;
margin-bottom: 8.5rem;
display: flex;
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
justify-content: space-between;
flex-direction: column;
color: #1E1E1E;

h2 {
  font-size: 4rem;
  font-weight: 500;
  line-height: 5rem;
}

@media (max-width: ${breakPoints.mobile}) {
    width: 100%;
    height: 50rem;

    h2 {
      font-size: 3.5rem;
      line-height: 4rem;
    }
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

  @media (max-width: ${breakPoints.mobile}) {
    width: 100%;
    gap: 1rem;
  }
}
`
export const VideoWrapper = styled.div`
width: 64%;
@media (max-width: ${breakPoints.mobile}) {
    width: 100%;
  }
`
export const DroneContent = styled.video`
width: 100%;
height: 100%;
transform: scale(1.5);
`
