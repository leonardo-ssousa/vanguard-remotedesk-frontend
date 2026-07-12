import { createPortal } from "react-dom";
import { ModalCard, ModalPortalWrapper } from "./styles";
import { AnimatePresence, easeInOut } from "motion/react";

interface ModalPortalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

export const ModalPortal = ({
  children,
  isOpen,
}: ModalPortalProps) => {
  const modalPortalRoot = document.querySelector("#modals-root");
  if (!modalPortalRoot) {
    console.log("Não foi possivel encontar o '#modals-root'");
    return null;
  }

  if (!isOpen) return null;

  return createPortal(
    <ModalPortalWrapper>
      <AnimatePresence>
        <ModalCard
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: easeInOut }}
        >
          {children}
        </ModalCard>
      </AnimatePresence>
    </ModalPortalWrapper>,
    modalPortalRoot,
  );
};
