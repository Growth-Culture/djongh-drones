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
        <ServiceVideo autoPlay loop muted controls>
          <source src={Video} type="video/mp4" />
        </ServiceVideo>
      </VideoWrapper>
      <TextWrapper>
        <SectionTag>Photometrics and Topography</SectionTag>
        <SectionTitle>Professional Pilots</SectionTitle>
        <SectionDescription>
          We provide professional photo and video creation services during drone
          flights. We have the necessary equipment and skills to carry out the
          most advanced projects that are used in internet marketing.
        </SectionDescription>
        <Button title="orçamento" to="/contatos" bgOrange btnIcon>Solicitar orçamento</Button>
      </TextWrapper>
    </Container>
  );
}
