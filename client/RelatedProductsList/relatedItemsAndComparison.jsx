import React from "react";
import RelatedProductsList from './relatedProductsList.jsx';
import YourOutfit from './yourOutfit.jsx';
import '../src/relatedProductsListStyles.css';

const RelatedItemsAndComparison = () => {
  return (<div>
    <h2 class="productMat">Related Products</h2>
    <RelatedProductsList />
    <h2 class="productMat">Your Outfits</h2>
    <YourOutfit />
  </div>
  );
};

export default RelatedItemsAndComparison;