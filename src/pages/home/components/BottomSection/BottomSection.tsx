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
        <SectionTag>Photometrics and Topography</SectionTag>
        <SectionTitle>Professional Pilots</SectionTitle>
        <SectionDescription>
          We provide professional photo and video creation services during drone
          flights. We have the necessary equipment and skills to carry out the
          most advanced projects that are used in internet marketing.
        </SectionDescription>
        <Button title="segmentos" to="/segmentos" bgOrange btnIcon>Segmentos</Button>
      </TextWrapper>
    </Container>
  );
}
