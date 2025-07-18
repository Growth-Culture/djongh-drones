import { Button } from "../../../../components/Button/Button";
import {
  Container,
  DroneContent,
  VideoWrapper,
  InfosWrapper,
  TextWrapper,
  ImageMobileWrapper,
  ImgMobile,
} from "./CounterAndImageStyles";
import DroneVideo from "../../../../assets/Drone-Flying-Alpha-Png.webm";
import DroneImgMobile from "../../../../assets/imgs/drone-exemple.png";
import { Counter } from "../../../../components/Counter/Counter";

export function CounterAndImageSection() {
  
  return (
    <Container>
      <TextWrapper>
        <h2>
          Imagens de Alta Precisão e<br />
          Qualidade utilizando a tecnologia RTK
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
        <Button title="entre-em-contato" to="/contatos" bgOrange btnIcon>
          Entre em contato
        </Button>
      </TextWrapper>
      <VideoWrapper>
        <DroneContent autoPlay loop muted playsInline>
          <source src={DroneVideo} type="video/webm" />
        </DroneContent>
      </VideoWrapper>
      <ImageMobileWrapper>
        <ImgMobile src={DroneImgMobile} alt="Drone"/>
      </ImageMobileWrapper>
    </Container>
  );
}
