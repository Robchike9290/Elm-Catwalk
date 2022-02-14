import React from 'react';
import Price from './price.jsx';
import StarRating from './starRating.jsx';
import XButton from './xButton.jsx';

const OutfitItem = () => {
  return (
    <div>
      <XButton />
      <img alt="This is the image for the product obatined from the API"></img>
      <p>This is the product category.</p>
      <p>This is the product name.</p>
      <Price />
      <StarRating />
    </div>
  );
}

export default OutfitItem;