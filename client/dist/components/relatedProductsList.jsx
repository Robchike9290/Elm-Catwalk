import React, { useEffect, useState } from 'react';
import ComparisonModal from './comparisonModal.jsx';
import RelatedProduct from './relatedProduct.jsx';

const RelatedProductsList = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('You just successfully created an effect!');
  });

  return (
    <div>
      <h1>You have clicked on the left scroll button {count} times!</h1>
      <button onClick={() => setCount(count + 1)}>
        Left Scroll
      </button>
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