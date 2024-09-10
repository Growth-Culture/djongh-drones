import styled from "styled-components";

const breakPoints = {
    mobile: "48rem",
    tablet: "102.4rem",
  };

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 144rem;
    height: 63rem;
    margin: 0 auto;

    @media (max-width: ${breakPoints.mobile}){
        max-width: 48rem;
        flex-direction: column;
        height: auto;
        padding: 2rem;
    
}
`

export const CardsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50rem;
    padding: 6rem 9rem;

    @media (max-width: ${breakPoints.mobile}){
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        height: auto;
        justify-items: center;
        padding: 2rem;

}
`

export const Card = styled.div`
    max-width: 26rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 1.7rem 0.8rem;
    gap: 1.2rem;

    @media (max-width: ${breakPoints.mobile}){
        width: 100%;
        max-width: 48rem;
        padding: 2rem;
    }

`

export const CardImage = styled.img`
    max-width: 24.4rem;

    @media (max-width: ${breakPoints.mobile}){
        width: 100%;
}
    
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

    @media (max-width: ${breakPoints.mobile}){
        padding-right: 2rem;
    }

`
export const ButtonWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${breakPoints.mobile}){
        display: flex;
        flex-direction: column;

        
}
    
`