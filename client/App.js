import React from "react";
import RelatedProducts from './dist/components/relatedProducts.jsx';
import YourOutfit from './dist/components/yourOutfit.jsx';

const App = () => {
  return (<div>
    <h2>Related Products</h2>
    <RelatedProducts>
    </RelatedProducts>
    <h2>Your Outfits</h2>
    <YourOutfit/>
  </div>
  );
};

export default App;