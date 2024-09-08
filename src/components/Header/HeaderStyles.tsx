import { Link } from "react-router-dom";
import styled from "styled-components";

const breakPoints = {
  mobile: "76.8rem",
  tablet: "102.4rem",
}

export const Container = styled.div`
  position: relative;
  max-width: calc(144rem - 168px);
  margin: 0 auto;
  margin-top: 4rem;
  padding: .8rem 3.6rem;

  background-color: var(--primary-color);
  border-radius: 1.2rem;

  display: flex;
  align-items: center;
  z-index: 9999;

  @media (max-width: ${breakPoints.mobile}) {
    max-width: calc(100% - 2rem);

    button {
      display: none;
    }
  }

`

export const NavLogo = styled.img`
  height: 6rem;
  align-self: baseline;
`

export const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 8rem;

`

export const MainMenu = styled.ul`
  display: flex;
  align-items; ;
  gap: 2.8rem;

 
`

export const MenuLink = styled(Link)`
  color: #fff;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  text-transform: uppercase;

  &:hover {
    transform: translateY(-.4rem);
    transition: 0.2s linear;
  }

   @media (max-width: ${breakPoints.mobile}){
    display: none;
  }
`

export const MenuMobileWrapper = styled.div `
  @media (max-width: ${breakPoints.mobile}) {    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  
    padding: 2.5rem;
    border-radius: 1.2rem;
  }
`

export const Menutrigger = styled.input`
  display: none;
  @media (max-width: ${breakPoints.mobile}) {
    display: block;
    position: absolute;
    z-index: 1000;
    width: 3.5rem;
    height: 3.5rem;
    opacity: 0;
    cursor: pointer;

    &:checked + div {
      margin-left: 1.6rem;
      span:nth-child(1) {
        transform-origin: 0% 0%;
        transform: rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform-origin: 0% 100%;
        transform: rotate(-45deg);
      }
    }

    }
`
export const HamburguerWrapper = styled.div`
  @media (max-width: ${breakPoints.mobile}) {
    position: absolute;
    z-index: 999;
    width: 3rem;
    height: 3.5rem;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .6rem;
  
    span {
      display: block;
      width: 3.5rem;
      height: .5rem;
      background-color: var(--primary-color);
      border-radius: .3rem;
      transition: all ease 0.2s; 
    }
  }
`

