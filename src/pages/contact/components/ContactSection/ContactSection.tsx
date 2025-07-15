import {
  Container, ContactInfo, ContactTitle, ContactPhone, ContactEmail,
  Form, Label, Input, Textarea, SubmitBtn
} from './ContactSectionStyles'
import { PhoneIcon } from '../../../../assets/icons/contact-icons/phoneIcon.tsx'
import { EmailIcon } from '../../../../assets/icons/contact-icons/emailIcon.tsx'
import { useState, FormEvent, ChangeEvent } from 'react'
import axios from 'axios'
import { z } from 'zod'
import { toast, Toaster} from 'react-hot-toast'

// Schema de validação
const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres')
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    try {
      // Validar dados do formulário
      const validatedData = contactSchema.parse(formData)
      setIsLoading(true)

      const response = await axios.post(
        'https://mail-server-nodejs.onrender.com/send-email',
        validatedData
      )

      toast.success('Mensagem enviada com sucesso!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Erros de validação
       toast.error('Preencha todos os campos corretamente')
      } else {
        // Erro na requisição
        toast.error('Erro ao enviar mensagem. Tente novamente.')
        console.error('Erro ao enviar o email:', error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Toaster position="top-right" />
      <ContactInfo>
        <ContactTitle>
          Services for producing aerial topography and photometrics
        </ContactTitle>
        <ContactPhone>
          <PhoneIcon />
          011 999 888 777
        </ContactPhone>
        <ContactEmail>
          <EmailIcon />
          contato@djonghdrones.com
        </ContactEmail>
      </ContactInfo>

      <Form onSubmit={handleSubmit}>
        <Label>Nome</Label>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Email de contato"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Label>Mensagem</Label>
        <Textarea
          name="message"
          placeholder="Deixe uma mensagem para contato"
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading}
        />
        <SubmitBtn type="submit" disabled={isLoading}>
          {isLoading ? 'ENVIANDO...' : 'SUBMIT'}
        </SubmitBtn>
      </Form>
    </Container>
  )
}
