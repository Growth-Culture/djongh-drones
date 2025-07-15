import {
  Card,
  CardDescription,
  CardHeader,
  CardsWrapper,
  CardTitle,
  Container,
  ImgWrapper,
  ServiceImg,
} from "./serviceSectionStyles";
import Img from "../../../../assets/imgs/dejongh_pilot_01.jpg";
export function ServiceSection() {
  return (
    <Container>
      <CardsWrapper>
        <Card>
          <CardHeader>01</CardHeader>
          <CardTitle>Levantamento Aéreo</CardTitle>
          <CardDescription>
            Captura dados detalhados para mapeamento e monitoramento de áreas
            extensas, utilizando drones de alta precisão.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>02</CardHeader>
          <CardTitle>Topografia</CardTitle>
          <CardDescription>
            Realize levantamentos topográficos com rapidez e precisão, ideais
            para projetos de engenharia e construção.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>03</CardHeader>
          <CardTitle>Inspeção de Infraestruturas</CardTitle>
          <CardDescription>
            Inspeção de estruturas de difícil acesso com segurança e eficiência, garantindo a integridade dos ativos críticos.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>04</CardHeader>
          <CardTitle>Engenharia e Arquitetura</CardTitle>
          <CardDescription>
            Soluções visuais e de dados para auxiliar em projetos de engenharia e arquitetura, oferecendo suporte estratégico na tomada de decisões.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>05</CardHeader>
          <CardTitle>Captação de Imagens e Vídeos Promocionais</CardTitle>
          <CardDescription>
            Produza conteúdo visual de alta qualidade para campanhas promocionais, com tomadas aéreas impactantes.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>06</CardHeader>
          <CardTitle>Inspeção Portuária</CardTitle>
          <CardDescription>
            Monitora áreas portuárias com precisão, auxiliando na gestão e segurança das operações portuárias.
          </CardDescription>
        </Card>
      </CardsWrapper>
      <ImgWrapper>
        <ServiceImg src={Img} />
     </ImgWrapper>
    </Container>
  );
}
