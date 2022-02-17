import React, { useContext } from "react";
import RelatedProductsList from './relatedProductsList.jsx';
import YourOutfit from './yourOutfit.jsx';
import '../src/relatedProductsListStyles.css';
import { AppContext } from '../context.js';

const RelatedItemsAndComparison = () => {
  const { currentProductId } = useContext(AppContext);
  console.log(currentProductId);
  return (<div>
    <h2 className="productMat">Related Products</h2>
    <RelatedProductsList />
    <h2 className="productMat">Your Outfits</h2>
    <YourOutfit />
  </div>
  );
};

export default RelatedItemsAndComparison;