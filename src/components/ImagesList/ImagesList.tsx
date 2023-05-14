import { FC, useEffect, useState } from "react";
import styles from "./ImagesList.module.scss";
import { images } from "./imageListConfig";
import ImageListItem from "../ImageListItem/ImageListItem";
import { storage } from "../hooks/useLocalStorage";
import { Item } from "../../types/types";

const DELETED_ITEMS_KEY = "deletedItems";

const ImagesList: FC = () => {
  const { get, set } = storage;
  const [deletedItems, setDeletedItems] = useState(
    get(DELETED_ITEMS_KEY) || []
  );
  const [imagesData, setImagesData] = useState(images);

  const date = new Date();
  const stringDate = date.getDate().toString().padStart(2, "0");
  const stringMonth = date.getMonth().toString().padStart(2, "0");
  const stringYear = date.getFullYear();
  const stringHours = date.getHours();
  const stringMinutes = date.getMinutes();

  useEffect(() => {
    set(DELETED_ITEMS_KEY, deletedItems);
  }, [deletedItems]);

  const handleDeleteItem = (name: Item["name"]) => {
    setDeletedItems([...deletedItems, name]);
  };

  const handleReturnAll = () => {
    setDeletedItems([]);
  };

  return (
    <>
      <div>
        <p className={styles.text}>
          Number of images: {imagesData.length - deletedItems.length}
        </p>
        <p className={styles.text}>
          Date:
          {`${stringDate}.${stringMonth}.${stringYear}  ${stringHours}.${stringMinutes}`}
        </p>
      </div>
      <div className={styles.list}>
        {imagesData?.map((item: Item) => {
          return !deletedItems.includes(item.name) ? (
            <ImageListItem
              key={item.name}
              item={item}
              onDeleteItem={handleDeleteItem}
            />
          ) : (
            <></>
          );
        })}
      </div>
      <button
        className={styles.returnBtn}
        onClick={handleReturnAll}
        type="button"
        disabled={!deletedItems.length}
      >
        Восстановить все
      </button>
    </>
  );
};

export default ImagesList;
