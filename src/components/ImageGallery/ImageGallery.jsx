import React from 'react';

const ImageGallery = ({items}) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <img src={item.webformatURL} alt="r" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
