import React from 'react';
import RelatedProduct from './relatedProduct.jsx';

const RelatedProductsList = () => {

  return (
    <div>
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