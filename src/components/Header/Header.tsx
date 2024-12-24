import { useEffect } from "react";
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

  useEffect(() => {
    const menuLinks = document.querySelectorAll('.menu-link-mobile');
    const menuTrigger = document.getElementById('menu-trigger') as HTMLInputElement | null;

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menuTrigger) {
          menuTrigger.checked = false; // Verifica se menuTrigger não é null
        }
      });
    });

    return () => {
      // Cleanup - remove event listeners quando o componente desmonta
      menuLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
    
    <Container>
      <Link to="/"> 
      <NavLogo src={logo} />
      </Link>
      <MenuContainer>
        <MainMenu>
          <MenuLink to="/">Início</MenuLink>
          <MenuLink to="/sobre-nos">Quem Somos</MenuLink>
          <MenuLink to="/segmentos">Serviços</MenuLink>
        </MainMenu>
      </MenuContainer>
      <Button title="Contato" to="/contatos">
        Contato
      </Button>
      <MenuMobileWrapper>
        <Menutrigger type="checkbox" id="menu-trigger"/>
        <HamburguerWrapper>
          <span></span>
          <span></span>
          <span></span>
        </HamburguerWrapper>

        <MenuMobileContainer id="menu-mobile">

        <MainMenuMobile>
          <MenuLinkMobile className='menu-link-mobile' to="/">Início</MenuLinkMobile>
          <MenuLinkMobile className='menu-link-mobile' to="/sobre-nos">Sobre nós</MenuLinkMobile>
          <MenuLinkMobile className='menu-link-mobile' to="/segmentos">Segmentos</MenuLinkMobile>
          <MenuLinkMobile className='menu-link-mobile' to="/contatos">Contatos</MenuLinkMobile>
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
