import { Container, ContactInfo, ContactTitle, ContactPhone, ContactEmail, Form, Label, Input, Textarea } from './ContactSectionStyles'
import { PhoneIcon } from '../../../../assets/icons/contact-icons/phoneIcon.tsx'
import { EmailIcon } from '../../../../assets/icons/contact-icons/emailIcon.tsx'
import { Button } from '../../../../components/Button/Button.tsx'

export function ContactSection() {
    return (
            <Container>

                <ContactInfo>
                    <ContactTitle>Services for producing aerial topography and photometrics</ContactTitle>
                    <ContactPhone>
                        <PhoneIcon/>
                            011 999 888 777
                    </ContactPhone>
                    <ContactEmail>
                        <EmailIcon />
                            contato@djonghdrones.com
                    </ContactEmail>
                </ContactInfo>

                <Form>
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Nome" />
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email de contato" />
                    <Label>Mensagem</Label>
                    <Textarea placeholder="Deixe uma mensagem para contato" />
                    <Button title='Submit' bgOrange>SUBMIT</Button>
                </Form>

            </Container>
    )
}