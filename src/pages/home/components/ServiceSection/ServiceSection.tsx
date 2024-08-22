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
import Img from "../../../../assets/imgs/img-exemple-services.jpg";
export function ServiceSection() {
  return (
    <Container>
      <CardsWrapper>
        <Card>
          <CardHeader>01</CardHeader>
          <CardTitle>Maneuverability</CardTitle>
          <CardDescription>
            Drones are highly maneuverable and can fly in tight spaces.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>02</CardHeader>
          <CardTitle>Maneuverability</CardTitle>
          <CardDescription>
            Drones are highly maneuverable and can fly in tight spaces.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>03</CardHeader>
          <CardTitle>Maneuverability</CardTitle>
          <CardDescription>
            Drones are highly maneuverable and can fly in tight spaces.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>04</CardHeader>
          <CardTitle>Maneuverability</CardTitle>
          <CardDescription>
            Drones are highly maneuverable and can fly in tight spaces.
          </CardDescription>
        </Card> 
      </CardsWrapper>
      <ImgWrapper>
        <ServiceImg src={Img} />
      </ImgWrapper>
    </Container>
  );
}
