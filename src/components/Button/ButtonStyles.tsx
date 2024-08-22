import styled from "styled-components";

export const ContainerBgWhite = styled.button`
  display: flex;
  align-items: center;

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
  line-height: 2.4rem;

  padding: 0.5rem 3.2rem;

  cursor: pointer;
  border: 1px solid transparent;

  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #fd7400;
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  margin-left: 6rem;

  svg {
    fill: currentColor;
    width: 1.5em;
    height: 1.5em;
  }
`;
