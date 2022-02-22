import React from "react";
import RelatedProductsList from './relatedProductsList.jsx';
import YourOutfit from './yourOutfit.jsx';

const RelatedItemsAndComparison = () => {
  return (<div className="relatedProductsAndComparison">
    <br></br>
    <h2 className="bSectionTitle">RELATED PRODUCTS</h2>
    <br></br>
    <RelatedProductsList />
    <br></br>
    <h2 className="bSectionTitle">YOUR OUTFITS</h2>
    <br></br>
    <YourOutfit />
  </div>
  );
};

export default RelatedItemsAndComparison;