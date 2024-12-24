import {
  TextWrapper,
  Container,
  ImgWrapper,
  ServiceImg,
  SectionTag,
  SectionTitle,
  SectionDescription,
} from "./textAndImgStyles";
import Img from "../../../../assets/imgs/mountain-3d.png";
import { Button } from "../../../../components/Button/Button";
export function TextAndImgSection() {
  return (
    <Container>
      <TextWrapper>
        <SectionTag>Topografia e Levantamento Aéreo</SectionTag>
        <SectionTitle>Precisão Profissional para mapeamento aéreo</SectionTitle>
        <SectionDescription>
          Soluções especializadas em topografia e levantamento aéreo com drones
          de última geração. Nossos serviços garantem dados precisos
          para mapeamento e análises geoespaciais, ideais para projetosde engenharia, 
          arquitetura, construção e agricultura.          
          <br />
          <br />
          Com experiência comprovada e tecnologia avançada, fornecendo resultados confiáveis para nossos clientes.
        </SectionDescription>
        <Button title="servicos" to="/servicos" bgOrange btnIcon>Nossos serviços</Button>
      </TextWrapper>
      <ImgWrapper>
        <ServiceImg src={Img} />
      </ImgWrapper>
    </Container>
  );
}
