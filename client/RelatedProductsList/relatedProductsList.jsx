import React from 'react';
import RelatedProduct from './relatedProduct.jsx';
import '../src/styles.css';

const RelatedProductsList = () => {

  return (
    <div class="relatedProductInnerMat">
      <button>Left Scroll</button>
      <RelatedProduct />
      <RelatedProduct />
      <RelatedProduct />
      <RelatedProduct />
      <button>Right Scroll</button>
    </div>
  )
}

export default RelatedProductsList;