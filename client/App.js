import React from "react";
import RelatedProductsList from './dist/components/relatedProductsList.jsx';
import YourOutfit from './dist/components/yourOutfit.jsx';

const App = () => {
  return (<div>
    <h2>Related Products</h2>
    <RelatedProductsList />
    <h2>Your Outfits</h2>
    <YourOutfit />
  </div>
  );
};

export default App;