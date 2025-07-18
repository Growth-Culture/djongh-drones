import { useState } from "react";
import { Button } from "../../../../components/Button/Button";
import {
  Container,
  CardsWrapper,
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  ButtonWrapper,
  ContentWrapper,
  ModalTitle,
  StyledTrigger,
  ModalSubcategoryWrapper,
  ModalSubcategoryTitle,
  ModalSubcategoryDescription,
  ModalSubcategoryList,
  StyledCollapsible,
  StyledContent,
} from "./CardSectionStyles";

import { ServicesData } from "../../servicesData";
import { ServiceModal } from "../ServiceModal/modal";
import { ChevronDown } from "lucide-react";

interface ISubcategory {
  titulo: string;
  descricao: string;
}

interface IService {
  categoria: string;
  imageUrl: string;
  descricao: string;
  subcategorias: ISubcategory[];
}

export function CardSection() {
  const [services] = useState<IService[]>(ServicesData);
  const [active, setActive] = useState<IService | null>(null);
  const [modal, setModal] = useState(false);

  const [openSubcategory, setOpenSubcategory] = useState<number | null>(null)

  function handleCardClick(service: IService) {
    setActive(service);
    setModal(true);

    setOpenSubcategory(null)
  }

  function closeModal() {
    setModal(false);
    setActive(null);

    setOpenSubcategory(null)
  }

  function handleCollapsibleChange(index: number, isOpen: boolean){
    setOpenSubcategory(isOpen ? index : null)
  }

  return (
    <>
      <Container>
        <CardsWrapper>
          {services.map((service, index) => {
            return (
              <Card key={index} onClick={() => handleCardClick(service)}>
                <CardImage src={service.imageUrl} alt={service.categoria}/>
                <CardHeader>{index + 1}</CardHeader>
                <CardTitle>{service.categoria}</CardTitle>
                <CardDescription>{service.descricao}</CardDescription>
              </Card>
            );
          })}
        </CardsWrapper>

        <ButtonWrapper>
          <Button title="Quero um orçamento" to="/contatos" bgOrange btnIcon>
            Quero um orçamento
          </Button>
        </ButtonWrapper>

        {modal && active && (
          <ServiceModal onClose={closeModal}>
            <ModalTitle>{active.categoria}</ModalTitle>
            <ContentWrapper>
              <ModalSubcategoryWrapper>
                {active.subcategorias.map((sub, i) => (
                  <ModalSubcategoryList key={i}>
                    <StyledCollapsible 
                      open={openSubcategory === i}
                      onOpenChange={(isOpen) => handleCollapsibleChange(i, isOpen)}
                    >
                      <StyledTrigger>
                        <ModalSubcategoryTitle>
                          {sub.titulo} 
                        </ModalSubcategoryTitle>
                          <ChevronDown size={20} />
                      </StyledTrigger>
                      <StyledContent>
                        <ModalSubcategoryDescription>
                          {sub.descricao}
                        </ModalSubcategoryDescription>
                      </StyledContent>
                    </StyledCollapsible>
                  </ModalSubcategoryList>
                ))}
              </ModalSubcategoryWrapper>
              <ButtonWrapper>
                <Button
                  title="Quero um orçamento"
                  to="/contatos"
                  bgOrange
                  btnIcon
                >
                  Quero um orçamento
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </ServiceModal>
        )}
      </Container>
    </>
  );
}
