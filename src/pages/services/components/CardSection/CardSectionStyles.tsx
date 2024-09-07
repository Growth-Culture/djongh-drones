import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 144rem;
    height: 63rem;
    margin: 0 auto;
`

export const CardsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50rem;
    padding: 6rem 9rem;
`

export const Card = styled.div`
    max-width: 26rem;
    height: 38rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 1.7rem 0.8rem;
    gap: 1.2rem;

`

export const CardImage = styled.img`
    max-width: 24.4rem;
`
export const CardHeader = styled.p`
    font-size: 2.6rem;
    line-height: 2.8rem;
    font-weight: 500;
    color: var(--primary-color);
    padding-left: 0.8rem;
`

export const CardTitle = styled.h3`
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 500;
    color: #1E1E1E;  
    padding-left: 0.8rem;
  
`

export const CardDescription = styled.p`
    font-size: 1.6rem;
    line-height: 2rem;
    color: #1E1E1E;
    padding-left: 0.8rem;

`
export const ButtonWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    
`