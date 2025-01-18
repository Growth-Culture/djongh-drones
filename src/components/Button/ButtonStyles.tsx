import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "102.4rem",
};

export const ContainerBgWhite = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 3.4rem;
  border-radius: 2.5rem;
  background: #fff;
  color: #000000;

  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  padding: 0.5rem 3.2rem;

  cursor: pointer;
  border: 1px solid transparent;

  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    color: #fd7400;
  }
`;

export const ContainerBgOrange = styled.button`
  display: flex;
  align-items: center;


  height: 3.4rem;
  border-radius: 2.5rem;
  background: #fd7400;
  color: #fff;

  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;

  padding: 2rem;

  cursor: pointer;
  border: 1px solid transparent;

  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: #fff;
    color: var(--primary-color);
    border-color: var(--primary-color);
  }

  @media(max-width: ${breakPoints.mobile}){
    font-size: 1.4rem;
    padding: 1.4rem;
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  margin-left: 1.6rem;

  svg {
    fill: currentColor;
    width: 1.5em;
    height: 1.5em;
  }
`;
