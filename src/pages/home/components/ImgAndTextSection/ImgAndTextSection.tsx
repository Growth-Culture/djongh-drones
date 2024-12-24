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
        Soluções com Imagens <br />
        de Alta Precisão e Qualidade utilizando a tecnologia RTK
        </h2>
        <InfosWrapper>
          <div>
            <span><Counter start={0} end={4}/>k</span>
            <p>resolução da imagem</p>
          </div>
          <div>
            <span><Counter start={450} end={500}/>+</span>
            <p>horas de vôo</p>
          </div>
          <div>
            <span><Counter start={20} end={50}/>+</span>
            <p>projetos finalizados</p>
          </div>
        </InfosWrapper>
        <Button title="sobre-nos" to="/sobre-nos" btnIcon>
          Quem somos
        </Button>
      </TextWrapper>
    </Container>
  );
}
