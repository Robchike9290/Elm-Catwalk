import React from 'react';
import RelatedProduct from './relatedProduct.jsx';
import '../src/relatedProductsListStyles.css';

const RelatedProductsList = () => {

  return (
    <div className="productInnerMat">
      <button className="carouselButton">◀️</button>
      <div>
        <RelatedProduct/>
        <RelatedProduct/>
        <RelatedProduct/>
        <RelatedProduct/>
      </div>
      <button className="carouselButton">▶️</button>
    </div>
  )
}

export default RelatedProductsList;