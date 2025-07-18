import { Container, Img, TextDivider, TextWrapper } from "./DividerSectionStyles";
import ImgDivider from "../../../../assets/imgs/icon-dejongh-.png"
export function DividerSection() {
  return(
    <Container>
        <TextWrapper>
          <TextDivider>
            Compromisso com todas as normas <br /> 
            de legislação, uso de softwares
            profissionais licenciados e excelência <br /> 
            em segurança no campo.
          </TextDivider>
        </TextWrapper>
          <Img src={ImgDivider} alt="Dejongh Drones" />
      </Container>
  )
}