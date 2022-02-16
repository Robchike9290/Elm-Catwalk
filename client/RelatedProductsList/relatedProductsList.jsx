import React from 'react';
import RelatedProduct from './relatedProduct.jsx';
import '../src/relatedProductsListStyles.css';

const RelatedProductsList = () => {

  return (
    <div className="productInnerMat">
      <button className="carouselButton">◀️</button>
      <RelatedProduct/>
      <RelatedProduct/>
      <RelatedProduct/>
      <RelatedProduct/>
      <button className="carouselButton">▶️</button>
    </div>
  )
}

export default RelatedProductsList;