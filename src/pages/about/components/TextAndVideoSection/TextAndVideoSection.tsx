import {
  TextWrapper,
  Container,
  VideoWrapper,
  ServiceVideo,
  SectionTag,
  SectionTitle,
  SectionDescription,
} from "./TextAndVideoStyles";
import Video from "../../../../assets/sp-drone-view.mov";
import { Button } from "../../../../components/Button/Button";
export function TextAndVideoSection() {
  return (
    <Container>
      <VideoWrapper>
        <ServiceVideo autoPlay loop muted controls playsInline>
          <source src={Video} type="video/mp4" />
        </ServiceVideo>
      </VideoWrapper>
      <TextWrapper>
        <SectionTag>Topografia e Levantamento Aéreo</SectionTag>
        <SectionTitle>
          Equipe Especializada e em Constante Evolução
        </SectionTitle>
        <SectionDescription>
          Para garantir a excelência, nossa equipe investe continuamente em
          capacitação, com cursos e certificações nas áreas de pilotagem,
          topografia, filmagem aérea e edição de imagens. Buscamos sempre novas
          especializações e nos mantemos antenados nas tendências do setor, o
          que nos permite aprimorar constantemente nossas soluções e nos adaptar
          às mais recentes tecnologias e demandas.
        </SectionDescription>
        <Button title="orçamento" to="/contatos" bgOrange btnIcon>
          Solicitar orçamento
        </Button>
      </TextWrapper>
    </Container>
  );
}
