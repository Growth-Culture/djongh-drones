import { Link } from 'react-router-dom'
import { Container, LogoWrapper, FooterLogo, UpperFooter, Copyright, FooterLinks, FooterLink, SocialMedia } from  './FooterStyles'
import logoFooter from '../../assets/imgs/logo-djongh-footer.png'

import { InstagramIcon } from '../../assets/icons/social-icons/ig-icon'


export function Footer(){
    const currentyYear = new Date().getFullYear()

    return (
        <Container>
            <UpperFooter>
                <LogoWrapper>
                    <FooterLogo src={logoFooter} />
                </LogoWrapper>
                <FooterLinks>
                    <FooterLink to="/">Início</FooterLink>
                    <FooterLink to="/quem-somos">Quem Somos</FooterLink>
                    <FooterLink to="/servicos">Serviços</FooterLink>
                    <FooterLink to="/contatos">Contatos</FooterLink>
                </FooterLinks>

                <SocialMedia>
                    <Link to="https://www.instagram.com/dejongh.drones/" target='_blank'>
                        <InstagramIcon />
                    </Link>
                </SocialMedia>
            </UpperFooter>

            <Copyright>
                <p>&copy; {currentyYear} DeJongh Drones</p>
            </Copyright>
        </Container>
    )
}