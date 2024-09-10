import { Link } from "react-router-dom"
import styled from "styled-components"

const breakPoints = {
    mobile: "48rem",
    tablet: "102.4rem",
  };

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    bottom: 0;
    
    background-color: var(--primary-color);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #FFFFFF;
    padding: 5rem 8.9rem;
    `

export const UpperFooter = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakPoints.mobile}){
        flex-direction: column;
        gap: 2rem;
    }
    
`

export const LogoWrapper = styled.div`
    width: 22.2rem;

    @media (max-width: ${breakPoints.mobile}){
        width: auto;
    }

`

export const FooterLogo = styled.img`
    height: 9.5rem;
`

export const FooterLinks = styled.ul`
    display: flex;
    justify-content: center;
    gap: 2.8rem;
    align-items: center;

    @media (max-width: ${breakPoints.mobile}){
        flex-direction: column;
        gap: 1rem;
    }
    `
export const FooterLink = styled(Link)`
    text-transform: uppercase;
    align-items: center;
`

export const SocialMedia = styled.div`
    width: 22.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;

    svg {
        display: flex;
        align-items: center;
    }

    @media (max-width: ${breakPoints.mobile}){
        width: 100%;
        gap: 1rem;
        justify-content: center;
    }
    `
export const Copyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`