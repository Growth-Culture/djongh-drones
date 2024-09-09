import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 144rem;
margin: 0 auto;
padding: 1rem 8.5rem;
margin-bottom: 8.5rem;
display: flex;
overflow: hidden;
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
export const VideoWrapper = styled.div`
width: 64%;
`
export const DroneContent = styled.video`
width: 100%;
height: 100%;
transform: scale(1.5);
`
