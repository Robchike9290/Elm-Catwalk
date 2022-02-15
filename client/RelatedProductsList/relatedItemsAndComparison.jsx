import React from "react";
import RelatedProductsList from './relatedProductsList.jsx';
import YourOutfit from './yourOutfit.jsx';

const RelatedItemsAndComparison = () => {
  return (<div>
    <h2>Related Products</h2>
    <RelatedProductsList />
    <h2>Your Outfits</h2>
    <YourOutfit />
  </div>
  );
};

export default RelatedItemsAndComparison;