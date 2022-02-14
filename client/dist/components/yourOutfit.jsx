import React from 'react';
import AddToOutfit from './addToOutfit.jsx';
import OutfitItems from './outfitItems.jsx';

const YourOutfit = () => {
  return (
  <div>
    <button>Left Scroll</button>
    <AddToOutfit />
    <OutfitItems />
    <button>Right Scroll</button>
  </div>
  )
}

export default YourOutfit;