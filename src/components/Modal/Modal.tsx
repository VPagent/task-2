import { FC, ReactNode, useEffect } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const portal = document.getElementById("portal")!;

const Modal: FC<Props> = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [onClose]);

  const handleBackDropClick = (event: any) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div className={styles.backDrop} onClick={handleBackDropClick}>
      <div className={styles.modal}>{children}</div>
    </div>,
    portal
  );
};

export default Modal;
