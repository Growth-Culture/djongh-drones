import styled from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 50rem;
padding: 9.7rem;
background-color: var(--primary-color);
display: flex;

position: relative;

border-radius: 0 0 20rem 0;
`

export const TextWrapper = styled.div`
width: 50%;
height: auto;
display: flex;
flex-direction: column;
justify-content: flex-end;
`

export const TextDivider = styled.p`
color: #fff;
font-size: 3.5rem;
line-height: 5rem;
`

export const Img = styled.img`
height: 30.2rem;
position: absolute;
top: 0;
right: 0;
`