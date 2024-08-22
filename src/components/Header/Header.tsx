import { Container, MainMenu, MenuContainer, NavLogo, MenuLink } from "./HeaderStyles";
import logo from '../../assets/imgs/logo-djongh.png'
import { ContactButton } from "../ContactButton/ContactButton";

export function Header() {
  return(
    <Container>
      <NavLogo src={logo}/>
      <MenuContainer>
        <MainMenu>
          <MenuLink to="/">Início</MenuLink>
          <MenuLink to="/sobre-nos">Sobre nós</MenuLink>
          <MenuLink to="/servicos">Segmentos</MenuLink>
        </MainMenu> 
      </MenuContainer>
      <ContactButton title="Contato" to="/contact">Contato</ContactButton>
    </Container>
  )
}