import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "102.4rem",
};

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
  }
`;
export const ImageWrapper = styled.div`
  width: 50%;
  @media (max-width: ${breakPoints.mobile}) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 6.6rem;
  background-color: var(--primary-color);
  color: #fff;

  h2 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 5rem;
  }

  @media (max-width: ${breakPoints.mobile}) {
    width: 100%;
    padding: 2.5rem;
    height: 50rem;

    h2 {
      font-size: 3.5rem;
      line-height: 4rem;
    }
  }
`;

export const InfosWrapper = styled.div`
  display: flex;
  gap: 3.6rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      font-size: 5rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 300;
    }
  }

  @media (max-width: ${breakPoints.mobile}) {
    width: 100%;
    gap: 1rem;
  }
`;
