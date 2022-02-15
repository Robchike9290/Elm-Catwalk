import React, { useEffect, useState } from 'react';
import ComparisonModal from './comparisonModal.jsx';
import Price from './price.jsx';
import StarButton from './starButton.jsx';
import StarRating from './starRating.jsx';
import '../src/styles.css';

const RelatedProduct = () => {

  const [comparisonModalShow, setComparisonModalShow] = useState(false);

  return (
    <span class="relatedProduct">
      <div>
        {comparisonModalShow ?
        <ComparisonModal comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow} /> :
        null}
      </div>
      <p class="relatedProductComparisonOpen">
        <StarButton comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow}/>
      </p>
      <img class="relatedProductImage relatedProduct" alt="This is the image for the product obatined from the API"></img>
      <p class="relatedProductData relatedProduct">This is the product category</p>
      <p class="relatedProductData relatedProduct">This is the product name</p>
      <p class="relatedProductData relatedProduct">
        <Price/>
      </p>
      <p class="relatedProductStarRating relatedProduct">
        <StarRating/>
      </p>
      <br></br>
    </span>
  )
}

export default RelatedProduct;