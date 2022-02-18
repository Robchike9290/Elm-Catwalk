import React from 'react';
import Price from './price.jsx';
import StarRating from './starRating.jsx';
import OutfitItemXButton from './outfitItemXButton.jsx';

const OutfitItem = () => {
  return (
    <span className="product">
      <div>
        <OutfitItemXButton className="outfitItemAction"/>
      </div>
      <img alt="This is the image for the product." className="productImage"></img>
      <div className="productData">This is the product category.</div>
      <div className="productData">This is the product name.</div>
      <div className="productData">
        <Price />
      </div>
      <div className="productStarRating">
        <StarRating />
      </div>
    </span>
  );
}

export default OutfitItem;