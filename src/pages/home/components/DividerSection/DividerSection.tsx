import { Container, Img, TextDivider, TextWrapper } from "./DividerSectionStyles";
import ImgDivider from "../../../../assets/imgs/icon-dejongh-.png"
export function DividerSection() {
  return(
    <Container>
        <TextWrapper>
          <TextDivider>
            Trabalhamos rigorosamente dentro da legislação vigente para garantir
            segurança e qualidade.
          </TextDivider>
        </TextWrapper>
          <Img src={ImgDivider} alt="" />
      </Container>
  )
}