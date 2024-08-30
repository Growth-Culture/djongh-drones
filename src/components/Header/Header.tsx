import { Container, MainMenu, MenuContainer, NavLogo, MenuLink } from "./HeaderStyles"
import logo from '../../assets/imgs/logo-djongh.png'
import { Button } from "../Button/Button";

export function Header() {
  return(
    <Container>
      <NavLogo src={logo}/>
      <MenuContainer>
        <MainMenu>
          <MenuLink to="/">Início</MenuLink>
          <MenuLink to="/sobre-nos">Sobre nós</MenuLink>
          <MenuLink to="/segmentos">Segmentos</MenuLink>
        </MainMenu>
      </MenuContainer>
      <Button title="Contato" to="/contatos">Contato</Button>
    </Container>
  )
}