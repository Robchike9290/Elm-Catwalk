import React from 'react';
import Price from './price.jsx';
import StarRating from './starRating.jsx';
import OutfitItemXButton from './outfitItemXButton.jsx';

const OutfitItem = () => {
  return (
    <span className="product">
      <p>
        <OutfitItemXButton className="productAction"/>
      </p>
      <img alt="This is the image for the product." class="productImage"></img>
      <p className="productData">This is the product category.</p>
      <p className="productData">This is the product name.</p>
      <p className="productData">
        <Price />
      </p>
      <p className="productStarRating">
        <StarRating />
      </p>
      <br></br>
    </span>
  );
}

export default OutfitItem;