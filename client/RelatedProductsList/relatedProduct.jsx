import React, { useEffect, useState } from 'react';
import ComparisonModal from './comparisonModal.jsx';
import Price from './price.jsx';
import StarButton from './starButton.jsx';
import StarRating from './starRating.jsx';
import '../src/styles.css';

const RelatedProduct = () => {

  const [comparisonModalShow, setComparisonModalShow] = useState(false);

  return (
    <div class="relatedProductInnerMat">
      <div>
        {comparisonModalShow ?
        <ComparisonModal comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow} /> :
        null}
      </div>
      <StarButton class="relatedProductComparisonOpen" comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow}/>
      <img class="relatedProductImage" alt="This is the image for the product obatined from the API"></img>
      <p class="relatedProductData">This is the product category</p>
      <p class="relatedProductData">This is the product name</p>
      <Price class="relatedProductData"/>
      <StarRating class="relatedProductStarRating"/>
      <br></br>
    </div>
  )
}

export default RelatedProduct;