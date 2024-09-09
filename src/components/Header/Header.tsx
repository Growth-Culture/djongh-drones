import {
  Container,
  MainMenu,
  MenuContainer,
  NavLogo,
  MenuLink,
  MenuMobileWrapper,
  Menutrigger,
  HamburguerWrapper,
  MenuMobileContainer,
  MainMenuMobile,
  MenuLinkMobile,
  SocialMediaMobile,
} from "./HeaderStyles";
import logo from "../../assets/imgs/logo-djongh.png";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { FacebookIcon } from "../../assets/icons/social-icons/fb-icon";
import { InstagramIcon } from "../../assets/icons/social-icons/ig-icon";
import { YoutubeIcon } from "../../assets/icons/social-icons/yt-icon";

export function Header() {
  return (
    <>
    
    <Container>
      <NavLogo src={logo} />
      <MenuContainer>
        <MainMenu>
          <MenuLink to="/">Início</MenuLink>
          <MenuLink to="/sobre-nos">Sobre nós</MenuLink>
          <MenuLink to="/segmentos">Segmentos</MenuLink>
        </MainMenu>
      </MenuContainer>
      <Button title="Contato" to="/contatos">
        Contato
      </Button>
      <MenuMobileWrapper>
        <Menutrigger type="checkbox" />
        <HamburguerWrapper>
          <span></span>
          <span></span>
          <span></span>
        </HamburguerWrapper>

        <MenuMobileContainer id="menu-mobile">

        <MainMenuMobile>
          <MenuLinkMobile to="/">Início</MenuLinkMobile>
          <MenuLinkMobile to="/sobre-nos">Sobre nós</MenuLinkMobile>
          <MenuLinkMobile to="/segmentos">Segmentos</MenuLinkMobile>
          <MenuLinkMobile to="/contatos">Contatos</MenuLinkMobile>
        </MainMenuMobile>
        
        <SocialMediaMobile>
                    <Link to="#">
                        <InstagramIcon />
                    </Link>

                    <Link to="#">
                        <FacebookIcon />
                    </Link>

                    <Link to="#">
                        <YoutubeIcon />
                    </Link>
                </SocialMediaMobile>
        </MenuMobileContainer>
      </MenuMobileWrapper>
    </Container>
   
    </>
  );
}
