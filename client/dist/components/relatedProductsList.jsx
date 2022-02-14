import React, { useEffect, useState } from 'react';
import RelatedProduct from './relatedProduct.jsx';

const RelatedProductsList = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log('Click handled!');
  };

  return (
    <div>
      <h1>You have clicked on the left scroll button {count} times!</h1>
      <button onClick={() => handleClick()}>
        Left Scroll
      </button>
      <RelatedProduct />
      <RelatedProduct />
      <RelatedProduct />
      <RelatedProduct />
      <button>Right Scroll</button>
    </div>
  )
}

export default RelatedProductsList;