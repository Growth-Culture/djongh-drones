import * as Collapsible from "@radix-ui/react-collapsible";
import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "80.5rem",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 6rem;
  gap: 5rem;

  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
    padding: 2rem;
  }
  
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-top;
  padding: 0 9rem;
  flex-wrap: wrap;
  gap: 5rem;

  @media (max-width: ${breakPoints.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-items: center;
    padding: 2rem;
  }

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
    display: flex;
    height: auto;
    justify-items: center;
    padding: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 30rem;
  flex-direction: column;
  align-items: left;
  padding: 1.7rem;
  gap: 1.2rem;

  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;
  border-radius: 1.2rem;

  cursor: pointer;

  &:hover {
    border: 1px solid var(--primary-color);
    transition: 0.2s linear;
  }

  @media (max-width: ${breakPoints.mobile}) {
    width: 100%;
    max-width: 48rem;
    padding: 2rem;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 0.8rem;
  object-fit: cover;
`;
export const CardHeader = styled.p`
  font-size: 2.6rem;
  line-height: 2.8rem;
  font-weight: 500;
  color: var(--primary-color);
  padding-left: 0.8rem;
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: #1e1e1e;
  padding-left: 0.8rem;
`;

export const CardDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  color: #1e1e1e;
  padding-left: 0.8rem;

  @media (max-width: ${breakPoints.mobile}) {
    padding-right: 2rem;
  }
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;
padding: 1rem;
`

export const ModalTitle = styled.h3`
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: var(--primary-color);
  text-align: center;
  margin: 1rem;

  @media (max-width: ${breakPoints.mobile}) {
    margin: .5rem;
  }
`;

export const ModalSubcategoryWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${breakPoints.mobile}) {
    gap: 1rem
  }
`;

export const ModalSubcategoryList = styled.li`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const StyledCollapsible = styled(Collapsible.Root)`
width: 100%;
border: 1px solid #1e1e1e;
border-radius: 0.5rem;

padding: 1rem;
`

export const StyledTrigger = styled(Collapsible.CollapsibleTrigger)`
 all: unset;
 width: 100%; 
 display: flex;
 align-items: center;
 justify-content: space-between;
 cursor: pointer;

  svg {
    transition: transform 0.2s ease;
  }

  &[data-state='open'] svg {
    transform: rotate(180deg);
  }
`

export const StyledContent = styled(Collapsible.CollapsibleContent)`
  overflow: hidden;
  padding: 1rem;
`

export const ModalSubcategoryTitle = styled.h3`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 500;
  color: #1e1e1e;

  @media (max-width: ${breakPoints.mobile}) {
    font-size: 1.4rem;
  }
`;

export const ModalSubcategoryDescription = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;
  color: #1e1e1e;

  @media (max-width: ${breakPoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const ButtonWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakPoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;
