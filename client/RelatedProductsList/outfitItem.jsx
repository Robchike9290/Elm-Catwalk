import React from 'react';
import Price from './price.jsx';
import StarRating from './starRating.jsx';
import OutfitItemXButton from './outfitItemXButton.jsx';

const OutfitItem = (props) => {
  return (
    <span className="product">
      <div className="outfitItemAction">
        <OutfitItemXButton name={props.name}/>
      </div>
      <div className="productImageMat">
        <img alt="This is the image for the product." className="productImage" src={props.image}></img>
      </div>
      <div className="productData">Category: {props.category}</div>
      <div className="productData">Name: {props.name}</div>
      <div className="productData">
        <Price price={props.price} salesPrice={props.salesPrice}/>
      </div>
      <div className="productStarRating">
        <StarRating averageRating={props.averageRating}/>
      </div>
    </span>
  );
}

export default OutfitItem;