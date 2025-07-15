import { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const breakPoints = {
  mobile: "48rem",
  tablet: "90rem",
};

// Wrapper principal do menu
const NavWrapper = styled.div`
  display: none;

  @media (max-width: ${breakPoints.mobile}) {
    display: flex;
    position: relative;
    z-index: 1000;
  }
`;

// Botão Hamburguer
const HamburguerButton = styled.div<{ isOpen: boolean }>`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1100;

  span {
    width: 3rem;
    height: 0.4rem;
    background-color: #fff;
    border-radius: 0.2rem;
    transition: transform 0.3s, opacity 0.3s;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
      transform-origin: top left;
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "none")};
      transform-origin: bottom left;
    }
  }
`;

// Overlay para fechar o menu ao clicar fora
const MenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1000;
`;

// Menu deslizante
const SlidingMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background-color: var(--primary-color);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1100;
`;

// Conteúdo do menu
const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 3rem;
  margin-top: 3rem;
  gap: 3rem;
`;

// Links do menu
const MenuLink = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
`;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavWrapper>
      {/* Botão Hamburguer */}
      <HamburguerButton onClick={toggleMenu} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </HamburguerButton>

      {/* Overlay para fechar o menu */}
      <MenuOverlay isOpen={isOpen} onClick={closeMenu} />

      {/* Menu deslizante */}
      <SlidingMenu isOpen={isOpen}>
        <MenuContent>
          <MenuLink to="/" onClick={closeMenu}>Início</MenuLink>
          <MenuLink to="/quem-somos" onClick={closeMenu}>Quem Somos</MenuLink>
          <MenuLink to="/servicos" onClick={closeMenu}>Serviços</MenuLink>
          <MenuLink to="/contatos" onClick={closeMenu}>
            Contato
          </MenuLink>
        </MenuContent>
      </SlidingMenu>
    </NavWrapper>
  );
}
