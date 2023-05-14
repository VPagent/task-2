import { FC, useState } from "react";
import styles from "./ImageListItem.module.scss";
import Modal from "../Modal/Modal";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";
import { Item } from "../../types/types";

type Props = {
  item: Item;
  onDeleteItem: (name: string) => void;
};
const ImageListItem: FC<Props> = ({ item, onDeleteItem }) => {
  const { name, src } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <>
      <div className={styles.item} onClick={handleOpenModal}>
        <img className={styles.img} src={src} alt={name} />

        <button
          className={styles.deleteBtn}
          onClick={() => onDeleteItem(name)}
          type="button"
        >
          <CloseIcon className={styles.deleteIcon} />
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className={styles.largeImageBox}>
            <button
              className={styles.closeBtn}
              type="button"
              onClick={handleCloseModal}
            >
              <CloseIcon className={styles.closeIcon} />
            </button>
            <img className={styles.largeImage} src={src} alt={name} />
            <div className={styles.bottomBorder}>
              <p className={styles.modalText}>{name}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ImageListItem;
