import React from 'react';
import ComparisonModal from './comparisonModal.jsx';
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
      <ComparisonModal />
    </div>
  )
}

export default RelatedProductsList;