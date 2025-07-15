import {
  Container,
  SectionTitleWrapper,
  SectionDescription,
  SectionContentWrapper,
  Divider,
  InfoWrapper,
  InfoCard,
  SectionTag,
} from "./AboutInfoStyles";

import {
  Target,
  UserCog,
  ShieldCheck,
  Leaf,
  Star,
  CircleCheck,
} from "lucide-react";

const infosData = [
  {
    icon: <Target size={16} />,
    title: "Nossa Missão e Visão",
    text: "Nossa missão é conectar pessoas e empresas a soluções inovadoras e de alta precisão por meio da tecnologia de drones, oferecendo resultados confiáveis e prontos para fazer a diferença. Olhamos para o futuro com a visão de sermos uma referência em qualidade e inovação no setor, com o compromisso de entregar um serviço que eleva o padrão de excelência.",
  },
  {
    icon: <UserCog size={16} />,
    title: "Equipe Especializada e em Constante Evolução",
    text: "Para garantir a excelência, nossa equipe investe continuamente em capacitação, com cursos e certificações nas áreas de pilotagem, topografia, filmagem aérea e edição de imagens. Buscamos sempre novas especializações e nos mantemos antenados nas tendências do setor, o que nos permite aprimorar constantemente nossas soluções e nos adaptar às mais recentes tecnologias e demandas.",
  },
  {
    icon: <ShieldCheck size={16} />,
    title: "Conformidade e Responsabilidade",
    text: "Seguimos rigorosamente todas as normas e regulamentações dos órgãos competentes, como a ANAC, garantindo operações seguras e em total conformidade com a legislação vigente. Utilizamos apenas softwares licenciados, respeitando os padrões de qualidade e ética em todas as nossas atividades.",
  },
  {
    icon: <CircleCheck size={16}/>,
    title: "Equipamentos de Ponta",
    text: "Trabalhamos exclusivamente com equipamentos da DJI, uma empresa reconhecida mundialmente por sua excelência em drones. Nosso portfólio inclui DJI Mavic 3 Enterprise, DJI Mavic 3 Thermal, DJI Avata 2, DJI RTK e tripé de precisão, todos escolhidos para garantir alta qualidade em cada projeto. Com essa estrutura de ponta, entregamos soluções inovadoras e personalizadas, sempre com o mais alto padrão de precisão.",
  },
  {
    icon: <Leaf size={16} />,
    title: "Compromisso com a Sustentabilidade e a Ética",
    text: "Estamos comprometidos com práticas que minimizem o impacto ambiental. Nossas operações são planejadas para serem sustentáveis, e acreditamos que a tecnologia pode ser uma aliada importante na preservação do meio ambiente. Além disso, todos os nossos serviços são conduzidos de forma ética e transparente, sempre respeitando os valores que guiam nossa empresa.",
  },
  {
    icon: <Star size={16} />,
    title: "Nossos Valores",
    text: "Prezamos pela qualidade, responsabilidade e inovação em cada etapa do processo. Valorizamos o respeito, a colaboração e a confiança, tanto dentro de nossa equipe quanto com nossos clientes e parceiros. Estes são os pilares que sustentam nossa atuação e nosso compromisso com a entrega de um serviço de excelência.",
  },
];

export function AboutInfoSection() {
  return (
    <Container>
      <Divider></Divider>
      <SectionTitleWrapper>
        <SectionTag>
          Mais sobre nós
        </SectionTag>
        <h2>Quem Somos</h2>
      </SectionTitleWrapper>
      <SectionContentWrapper>
        <SectionDescription>
          Desde o início do mercado de drones, acompanhamos essa evolução de
          perto, movidos pela curiosidade e paixão por tecnologia e inovação. O
          que começou como um hobby tornou-se, com o tempo, um compromisso
          profissional, à medida que identificamos uma crescente demanda por
          soluções de alta precisão, qualidade e pontualidade. Assim, formamos
          uma equipe que combina excelência técnica com um profundo entendimento
          das necessidades do mercado.
        </SectionDescription>
      </SectionContentWrapper>

      <InfoWrapper>
        {infosData.map((info, index) => {
          return (
            <InfoCard key={index}>
              <span>{info.icon}</span>
              <h3>{info.title}</h3>
              <p>{info.text}</p>
            </InfoCard>
          );
        })}
      </InfoWrapper>
    </Container>
  );
}
