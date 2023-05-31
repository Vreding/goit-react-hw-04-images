import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onImageClick,
}) => {
  const handleClick = () => {
    onImageClick(largeImageURL);
  };

  return (
    <li className={s.ImageGalleryItem} id={id}>
      <img src={webformatURL} alt="" onClick={handleClick} />
    </li>
  );
};

export default ImageGalleryItem;
