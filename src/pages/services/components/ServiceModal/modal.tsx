import { ReactNode } from "react";
import { CloseButton, ModalContent, ModalOverlay } from "./modalStyles";

interface ModalProps {
  onClose: () => void; 
  children: ReactNode;
}

export function ServiceModal({ onClose, children }: ModalProps){
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ServiceModal;
