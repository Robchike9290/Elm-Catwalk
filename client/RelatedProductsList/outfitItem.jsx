import React from 'react';
import Price from './price.jsx';
import StarRating from './starRating.jsx';
import XButton from './xButton.jsx';

const OutfitItem = () => {
  return (
    <span className="product">
      <XButton />
      <img alt="This is the image for the product obatined from the API" class="productImage product"></img>
      <p className="productData product">This is the product category.</p>
      <p className="productData product">This is the product name.</p>
      <p className="productData product">
        <Price />
      </p>
      <p className="productStarRating product">
        <StarRating />
      </p>
    </span>
  );
}

export default OutfitItem;