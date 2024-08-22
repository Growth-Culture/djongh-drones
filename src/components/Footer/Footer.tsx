import { Container } from  './FooterStyles'

export function Footer(){
    return (
        <Container>
            <div className='upper-footer'>
                <div>Logo</div>
                <div>Links</div>
                <div>Social</div>
            </div>

            <div className='copyright'>
                <p>2024 DeJongh Drones.</p>
            </div>
        </Container>
    )
}