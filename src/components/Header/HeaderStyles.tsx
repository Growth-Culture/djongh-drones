import { Link } from "react-router-dom";
import styled from "styled-components";

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
`