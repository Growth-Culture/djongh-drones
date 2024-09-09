import { Link } from "react-router-dom";
import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "102.4rem",
};

export const Container = styled.div`
  position: relative;
  max-width: calc(144rem - 168px);
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0.8rem 3.6rem;

  background-color: var(--primary-color);
  border-radius: 1.2rem;

  display: flex;
  align-items: center;
  z-index: 999;

  @media (max-width: ${breakPoints.mobile}) {
    max-width: calc(100% - 2rem);

    button {
      display: none;
    }
  }
`;

export const NavLogo = styled.img`
  height: 6rem;
  align-self: baseline;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 8rem;
`;

export const MainMenu = styled.ul`
  display: flex;
  gap: 2.8rem;
`;

export const MenuLink = styled(Link)`
  color: #fff;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  text-transform: uppercase;

  &:hover {
    transform: translateY(-0.4rem);
    transition: 0.2s linear;
  }

  @media (max-width: ${breakPoints.mobile}) {
    display: none;
  }
`;

export const MenuMobileWrapper = styled.div`
  @media (max-width: ${breakPoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    padding: 2.5rem;
    border-radius: 1.2rem;
  }
`;

export const Menutrigger = styled.input`
  display: none;
  @media (max-width: ${breakPoints.mobile}) {
    z-index: 1000;
    display: block;
    position: absolute;

    width: 3.5rem;
    height: 3.5rem;
    opacity: 0;
    cursor: pointer;

    &:checked ~ div#menu-mobile {
      display: flex;
      margin-right: 0;
    }

    &:checked + div {
      margin-left: 1.6rem;
      span:nth-child(1) {
        transform-origin: 0% 0%;
        transform: rotate(45deg);
        background-color: #fff;
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform-origin: 0% 100%;
        transform: rotate(-45deg);
        background-color: #fff;
      }
    }
  }
`;
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
    gap: 0.6rem;

    span {
      display: block;
      width: 3.5rem;
      height: 0.5rem;
      background-color: var(--primary-color);
      border-radius: 0.3rem;
      transition: all ease 0.2s;
    }
  }
`;

export const MenuMobileContainer = styled.div`
  display: none;
  @media (max-width: ${breakPoints.mobile}) {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 996;
    right: 0;
    top: 0;
    width: 50%;
    height: 80vh;
    background-color: var(--primary-color);
    margin-right: -30rem;
    transition: all ease .6s;

    padding-right: 2rem;
    padding-top: 10rem;
    padding-bottom: 2rem;

    border-radius: 1.2rem;
  }
`;

export const MainMenuMobile = styled.div`
  display: none;
  @media (max-width: ${breakPoints.mobile}) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 2rem;
  }
`;

export const MenuLinkMobile = styled(Link)`
  @media (max-width: ${breakPoints.mobile}) {
    color: #fff;
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-transform: uppercase;

    &:hover {
      transform: translateY(-0.4rem);
      transition: 0.2s linear;
    }
  }
`;

export const SocialMediaMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
    `
