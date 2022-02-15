import React, { useEffect, useState } from 'react';
import ComparisonModal from './comparisonModal.jsx';
import Price from './price.jsx';
import StarButton from './starButton.jsx';
import StarRating from './starRating.jsx';
import '../src/styles.css';

const RelatedProduct = () => {

  const [comparisonModalShow, setComparisonModalShow] = useState(false);

  return (
    <span class="product">
      <div>
        {comparisonModalShow ?
        <ComparisonModal comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow} /> :
        null}
      </div>
      <p class="productAction">
        <StarButton comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow}/>
      </p>
      <img class="productImage product" alt="This is the image for the product obatined from the API"></img>
      <p class="productData product">This is the product category</p>
      <p class="productData product">This is the product name</p>
      <p class="productData product">
        <Price/>
      </p>
      <p class="productStarRating product">
        <StarRating/>
      </p>
      <br></br>
    </span>
  )
}

export default RelatedProduct;