import React, { useEffect, useState } from 'react';
import RelatedProduct from './relatedProduct.jsx';

const RelatedProductsList = () => {

  const [count, setCount] = useState(0);

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