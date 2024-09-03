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
        <SectionTag>Photometrics and Topography</SectionTag>
        <SectionTitle>Professional Pilots</SectionTitle>
        <SectionDescription>
          We provide professional photo and video creation services during drone
          flights. We have the necessary equipment and skills to carry out the
          most advanced projects that are used in internet marketing. We have
          been operating in the industry for 8 years and during this time we
          have created many projects for our clients. 
          <br />
          <br />
          We also conduct training
          and support young people to expand their knowledge in the field of
          aviation.
        </SectionDescription>
        <Button title="segmentos" to="/segmentos" bgOrange btnIcon>Segmentos</Button>
      </TextWrapper>
      <ImgWrapper>
        <ServiceImg src={Img} />
      </ImgWrapper>
    </Container>
  );
}
