import React from "react";
import RelatedProductsList from './relatedProductsList.jsx';
import YourOutfit from './yourOutfit.jsx';
import '../src/styles.css';

const RelatedItemsAndComparison = () => {
  return (<div>
    <h2 class="relatedProductMat">Related Products</h2>
    <RelatedProductsList />
    <h2 class="relatedProductMat">Your Outfits</h2>
    <YourOutfit />
  </div>
  );
};

export default RelatedItemsAndComparison;