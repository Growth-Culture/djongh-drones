import { Button } from '../../../../components/Button/Button';
import { Container, CardsWrapper, Card, CardImage, CardHeader, CardTitle, CardDescription, ButtonWrapper } from  './CardSectionStyles';
import ImgOne from '../../../../assets/imgs/img-example-4.png';
import ImgTwo from '../../../../assets/imgs/img-example-5.png';
import ImgThree from '../../../../assets/imgs/img-example-3.png';
import ImgFour from '../../../../assets/imgs/img-example-6.png';

export function CardSection() {
    return (
        <>
        <Container>
            <CardsWrapper>
                <Card>
                    <CardImage src={ImgOne}/>
                    <CardHeader>01</CardHeader>
                    <CardTitle>Maneuverability</CardTitle>
                    <CardDescription>Drones are highly maneuverable and can fly in tight spaces.</CardDescription>
                </Card>

                <Card>
                    <CardImage src={ImgTwo}/>
                    <CardHeader>02</CardHeader>
                    <CardTitle>Maneuverability</CardTitle>
                    <CardDescription>Drones are highly maneuverable and can fly in tight spaces.</CardDescription>
                </Card>

                <Card>
                    <CardImage src={ImgThree}/>
                    <CardHeader>03</CardHeader>
                    <CardTitle>Maneuverability</CardTitle>
                    <CardDescription>Drones are highly maneuverable and can fly in tight spaces.</CardDescription>
                </Card>

                <Card>
                    <CardImage src={ImgFour}/>
                    <CardHeader>04</CardHeader>
                    <CardTitle>Maneuverability</CardTitle>
                    <CardDescription>Drones are highly maneuverable and can fly in tight spaces.</CardDescription>
                </Card>
            </CardsWrapper>

            <ButtonWrapper>
                <Button title='Quero um orçamento' to='/contact' bgOrange btnIcon>Quero um orçamento</Button>
            </ButtonWrapper>

        </Container>
        </>
    )
}