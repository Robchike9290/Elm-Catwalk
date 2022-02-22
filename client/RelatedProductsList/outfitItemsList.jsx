import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
import OutfitAddItem from './outfitAddItem.jsx';
import OutfitItemsCarousel, { OutfitItemsCarouselItem } from './outfitItemsCarousel.jsx';

const OutfitItems = () => {
  const context = useContext(AppContext);
  return (
    <div className="productInnerMat">
      <span>
        <OutfitItemsCarousel>
          {/* Need to add functionality for adding product to carousel and re-rendering afterwards */}
          <OutfitItemsCarouselItem></OutfitItemsCarouselItem>
        </OutfitItemsCarousel>
      </span>
    </div>
  )
}

export default OutfitItems;