import React from "react";
import ComparisonModal from './dist/components/comparsionModal.jsx';
import RelatedProducts from './dist/components/relatedProducts.jsx';
import YourOutfit from './dist/components/yourOutfit.jsx';

const App = () => {
  return (<div>
    <ComparisonModal />
    <RelatedProducts />
    <YourOutfit />
  </div>
  );
};

export default App;