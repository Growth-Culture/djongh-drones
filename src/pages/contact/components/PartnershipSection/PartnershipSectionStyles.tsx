import styled from "styled-components";

const breakPoints = {
    mobile: "48rem",
    tablet: "102.4rem",
  };

export const PartnershipWrapper = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6.6rem 16.5rem;

    @media (max-width: ${breakPoints.mobile}) {
        width: 100%;
        display: none;
    }
    
`

