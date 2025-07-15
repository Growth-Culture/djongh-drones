import {
  Container,
  MainMenu,
  MenuContainer,
  NavLogo,
  MenuLink,

} from "./HeaderStyles";
import logo from "../../assets/imgs/logo-djongh.png";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

import { MobileNav } from "./mobile/mobileNavigation";


export function Header() {

  return (
    <>
    <Container>
      <Link to="/"> 
      <NavLogo src={logo} />
      </Link>
      <MenuContainer>
        <MainMenu>
          <MenuLink to="/">Início</MenuLink>
          <MenuLink to="/quem-somos">Quem Somos</MenuLink>
          <MenuLink to="/servicos">Serviços</MenuLink>
        </MainMenu>
      </MenuContainer>
      <Button title="Contato" to="/contatos">
        Contato
      </Button>
      <MobileNav/>
    </Container>
    </>
  );
}
