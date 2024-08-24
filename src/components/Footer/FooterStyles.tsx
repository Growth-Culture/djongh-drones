import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* position: fixed; */
    
    width: 100%;
    bottom: 0;
    height: 24rem;
    
    background-color: var(--primary-color);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #FFFFFF;
    `

export const UpperFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 8.9rem 0 8.9rem;
    
`

export const FooterLogo = styled.img`
    height: 11.8rem;
`

export const FooterLinks = styled.ul`
    display: flex;
    justify-content: center;
    gap: 2.8rem;
    
    align-items: center;
    `
export const FooterLink = styled(Link)`
    text-transform: uppercase;
    align-items: center;
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
    
    `
export const Copyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`