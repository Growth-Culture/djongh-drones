import { Button } from "../../../../components/Button/Button";
import {
  Container,
  DroneContent,
  VideoWrapper,
  InfosWrapper,
  TextWrapper,
} from "./CounterAndImageStyles";
import DroneVideo from "../../../../assets/Drone-Flying-Alpha-Png.webm";
import { Counter } from "../../../../components/Counter/Counter";

export function CounterAndImageSection() {
  
  return (
    <Container>
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
        <Button title="entre-em-contato" to="/contatos" bgOrange btnIcon>
          Entre em contato
        </Button>
      </TextWrapper>
      <VideoWrapper>
        <DroneContent autoPlay loop muted>
          <source src={DroneVideo} type="video/webm" />
        </DroneContent>
      </VideoWrapper>
    </Container>
  );
}