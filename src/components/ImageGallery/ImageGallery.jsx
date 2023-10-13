import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

const ImageGallery = ({items}) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}><ImageGalleryItem/></li>
      ))}
    </ul>
  );
};

export default ImageGallery;
