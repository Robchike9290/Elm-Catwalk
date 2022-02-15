import React from 'react';
import AddToOutfit from './addToOutfit.jsx';
import OutfitItems from './outfitItems.jsx';

const YourOutfit = () => {
  return (
  <div class="productInnerMat">
    <button class="carouselButton">◀️</button>
    <AddToOutfit class="addToOutfitButton"/>
    <OutfitItems/>
    <button class="carouselButton">▶️</button>
  </div>
  )
}

export default YourOutfit;