import React from 'react';
import RelatedProduct from './relatedProduct.jsx';
import '../src/styles.css';

const RelatedProductsList = () => {

  return (
    <div class="productInnerMat">
      <button class="carouselButton">◀️</button>
      <RelatedProduct/>
      <RelatedProduct/>
      <RelatedProduct/>
      <RelatedProduct/>
      <button class="carouselButton">▶️</button>
    </div>
  )
}

export default RelatedProductsList;