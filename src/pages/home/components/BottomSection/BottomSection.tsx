import {
  TextWrapper,
  Container,
  ImgWrapper,
  ServiceImg,
  SectionTag,
  SectionTitle,
  SectionDescription,
} from "./BottomSectionStyles";
import Img from "../../../../assets/imgs/drone-exemplo.png";
import { Button } from "../../../../components/Button/Button";
export function BottomSection() {
  return (
    <Container>
      <ImgWrapper>
        <ServiceImg src={Img} />
      </ImgWrapper>
      <TextWrapper>
        <SectionTag>Engenharia e Arquitetura</SectionTag>
        <SectionTitle>Inspeção de Infraestruturas</SectionTitle>
        <SectionDescription>
          Soluções visuais e de dados para auxiliar em projetos de engenharia e arquitetura, oferecendo suporte estratégico na tomada de decisões.
        </SectionDescription>
        <Button title="segmentos" to="/segmentos" bgOrange btnIcon>Nossos serviços</Button>
      </TextWrapper>
    </Container>
  );
}
