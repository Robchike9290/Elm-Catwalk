import React from 'react';
import AddToOutfit from './addToOutfit.jsx';
import OutfitItems from './outfitItems.jsx';

const YourOutfit = () => {
  return (
  <div className="productInnerMat">
    <button className="carouselButton">◀️</button>
    <AddToOutfit className="addToOutfitButton"/>
    <OutfitItems/>
    <button className="carouselButton">▶️</button>
  </div>
  )
}

export default YourOutfit;