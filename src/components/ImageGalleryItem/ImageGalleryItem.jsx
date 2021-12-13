import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ image, tags }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={image} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
}

export default ImageGalleryItem;
