import React from 'react';
import RelatedProduct from './relatedProduct.jsx';
import '../src/styles.css';

const RelatedProductsList = () => {

  return (
    <div class="relatedProductInnerMat">
      <button class="carouselButton">◀️</button>
      <RelatedProduct class="relatedProduct"/>
      <RelatedProduct class="relatedProduct"/>
      <RelatedProduct class="relatedProduct"/>
      <RelatedProduct class="relatedProduct"/>
      <button class="carouselButton">▶️</button>
    </div>
  )
}

export default RelatedProductsList;