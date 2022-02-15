import React, { useEffect, useState } from 'react';
import ComparisonModal from './comparisonModal.jsx';
import Price from './price.jsx';
import StarButton from './starButton.jsx';
import StarRating from './starRating.jsx';

const RelatedProduct = () => {

  const [comparisonModalShow, setComparisonModalShow] = useState(false);

  return (
    <div>
      <div>
        {comparisonModalShow ?
        <ComparisonModal comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow} /> :
        null}
      </div>
      <StarButton comparisonModalShow={comparisonModalShow} setComparisonModalShow={setComparisonModalShow}/>
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