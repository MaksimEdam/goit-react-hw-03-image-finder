import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

function ImageGallery({ items }) {
  return (
    <ul className={s.ImageGallery}>
      {items.map((item) => (
        <ImageGalleryItem image={item.webformatURL} tags={item.tags} />
      ))}
    </ul>
  );
}

export default ImageGallery;
