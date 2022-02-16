import React, { useEffect, useState } from 'react';
import ComparisonModal from './comparisonModal.jsx';
import Price from './price.jsx';
import StarButton from './starButton.jsx';
import StarRating from './starRating.jsx';
import '../src/relatedProductsListStyles.css';

const RelatedProduct = () => {

  const [comparisonModalShow, setComparisonModalShow] = useState(false);

  return (
    <span className="product">
      <div>
        {comparisonModalShow ?
        <ComparisonModal comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow} /> :
        null}
      </div>
      <p className="productAction">
        <StarButton comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow}/>
      </p>
      <img className="productImage product" src="../src/testImage.jpeg" alt="This is the image for the product obatined from the API"></img>
      <p className="productData product">This is the product category</p>
      <p className="productData product">This is the product name</p>
      <p className="productData product">
        <Price/>
      </p>
      <p className="productStarRating product">
        <StarRating/>
      </p>
      <br></br>
    </span>
  )
}

export default RelatedProduct;