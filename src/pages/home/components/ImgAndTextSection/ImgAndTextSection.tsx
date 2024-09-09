import { Button } from "../../../../components/Button/Button";
import {
  Container,
  Image,
  ImageWrapper,
  InfosWrapper,
  TextWrapper,
} from "./ImgAndTextSectionStyles";
import Img from "../../../../assets/imgs/img-exemple-2.png";
import { Counter } from "../../../../components/Counter/Counter";

export function ImgAndTextSection() {
  
  return (
    <Container>
      <ImageWrapper>
        <Image src={Img} />
      </ImageWrapper>
      <TextWrapper>
        <h2>
          Services for producing <br />
          aerial topography and photometrics
        </h2>
        <InfosWrapper>
          <div>
            <span><Counter start={0} end={4}/>k</span>
            <p>image resolution</p>
          </div>
          <div>
            <span><Counter start={450} end={500}/>+</span>
            <p>times of fly </p>
          </div>
          <div>
            <span><Counter start={20} end={50}/>+</span>
            <p>projects done</p>
          </div>
        </InfosWrapper>
        <Button title="sobre-nos" to="/sobre-nos" btnIcon>
          Sobre nós
        </Button>
      </TextWrapper>
    </Container>
  );
}
