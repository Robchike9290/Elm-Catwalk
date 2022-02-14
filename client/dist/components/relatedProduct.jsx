import React from 'react';
import Price from './price.jsx';
import StarButton from './starButton.jsx';
import StarRating from './starRating.jsx';

const RelatedProduct = () => {
  return (
    <div>
      <StarButton />
      <img alt="This is the image for the product obatined from the API"></img>
      <p>This is the product category</p>
      <p>This is the product name</p>
      <Price />
      <StarRating />
      <br></br>
    </div>
  )
}

export default RelatedProduct;