import { Link } from 'react-router-dom'
import { Container, FooterLogo, UpperFooter, Copyright, FooterLinks, FooterLink, SocialMedia } from  './FooterStyles'
import logoFooter from '../../assets/imgs/logo-djongh-footer.png'
import { FacebookIcon } from '../../assets/icons/social-icons/fb-icon'
import { InstagramIcon } from '../../assets/icons/social-icons/ig-icon'
import { YoutubeIcon } from '../../assets/icons/social-icons/yt-icon'

export function Footer(){
    return (
        <Container>
            <UpperFooter>
                <FooterLogo src={logoFooter} />
                <FooterLinks>
                    <FooterLink to="/">Início</FooterLink>
                    <FooterLink to="/sobre-nos">Sobre nós</FooterLink>
                    <FooterLink to="/servicos">Segmentos</FooterLink>
                    <FooterLink to="/contact">Contatos</FooterLink>
                </FooterLinks>

                <SocialMedia>
                    <Link to="#">
                        <InstagramIcon />
                    </Link>

                    <Link to="#">
                        <FacebookIcon />
                    </Link>

                    <Link to="#">
                        <YoutubeIcon />
                    </Link>
                </SocialMedia>
            </UpperFooter>

            <Copyright>
                <p>&copy; 2024 DeJongh Drones.</p>
            </Copyright>
        </Container>
    )
}