import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "90rem",
};

export const PartnershipWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 6rem;

  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
  }
`;

export const PartnershipCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  gap: 3rem;

  @media (max-width: ${breakPoints.mobile}) {
    margin-bottom: 2rem;
  }
`;
export const ClientName = styled.h3`
  font-size: 1.8rem;
`;

export const ClientsLogosWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

export const LogoList = styled.li`
  padding: 1rem;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  max-width: 160px;
  object-fit: cover;

  @media (max-width: ${breakPoints.mobile}) {
    max-width: 100px;
  }
`;
