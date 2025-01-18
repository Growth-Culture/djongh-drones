import styled from "styled-components";

const breakPoints = {
  mobile: "48rem",
  tablet: "102.4rem",
};

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:rgba(0, 0, 0, 0.40);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
 
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2.6rem;
  color: var(--primary-color);
  cursor: pointer;
`;
