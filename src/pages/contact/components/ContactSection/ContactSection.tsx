import {
  Container,
  ContactInfo,
  ContactTitle,
  ContactPhone,
  ContactEmail,
  Form,
  Label,
  Input,
  Textarea,
  SubmitBtn,
} from "./ContactSectionStyles";
import { PhoneIcon } from "../../../../assets/icons/contact-icons/phoneIcon.tsx";
import { EmailIcon } from "../../../../assets/icons/contact-icons/emailIcon.tsx";

import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/send-email",
        formData
      );
      setFeedbackMessage("Email enviado com sucesso!");
      return response;
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
      setFeedbackMessage("Erro ao enviar o email. Tente novamente mais tarde.");
    }
  }

  return (
    <Container>
      <ContactInfo>
        <ContactTitle>
          Inove seus projetos com nossas imagens aéreas de alta precisão
        </ContactTitle>
        <ContactPhone>
          <PhoneIcon />
          011 999 888 777
        </ContactPhone>
        <ContactEmail>
          <EmailIcon />
          dejonghdrones@gmail.com
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
        />
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Email de contato"
          value={formData.email}
          onChange={handleChange}
        />
        <Label>Mensagem</Label>
        <Textarea
          name="message"
          placeholder="Deixe uma mensagem para contato"
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitBtn type="submit">ENVIAR</SubmitBtn>
        {feedbackMessage && (
          <p
            style={{
              color: feedbackMessage.includes("Erro") ? "red" : "green",
            }}
          >
            {feedbackMessage}
          </p>
        )}
      </Form>
    </Container>
  );
}
