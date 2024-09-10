import { Container, ContactInfo, ContactTitle, ContactPhone, ContactEmail, Form, Label, Input, Textarea, SubmitBtn } from './ContactSectionStyles'
import { PhoneIcon } from '../../../../assets/icons/contact-icons/phoneIcon.tsx'
import { EmailIcon } from '../../../../assets/icons/contact-icons/emailIcon.tsx'

import { useState, FormEvent, ChangeEvent } from 'react'
import axios from 'axios'



export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log('Formulário enviado!', formData);
        
        // Tente enviar os dados
        try {
            const response = await axios.post('http://localhost:3000/send-email', formData);
            alert('Email enviado com sucesso!');
            console.log(response);
        } catch (error) {
            console.error('Erro ao enviar o email:', error);
            alert('Erro ao enviar o email.');
        }
    }

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

                <Form onSubmit={handleSubmit}>
                    <Label>Nome</Label>
                    <Input type="text" name='name' placeholder="Nome" value={formData.name} onChange={handleChange}/>
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="Email de contato" value={formData.email} onChange={handleChange} />
                    <Label>Mensagem</Label>
                    <Textarea name="message" placeholder="Deixe uma mensagem para contato" value={formData.message} onChange={handleChange} />
                    <SubmitBtn type="submit">SUBMIT</SubmitBtn>
                </Form>

            </Container>
    )
}