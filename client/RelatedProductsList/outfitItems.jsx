import React from 'react';
import OutfitItemsCarousel, { OutfitItemsCarouselItem } from './outfitItemsCarousel.jsx';
import '../src/relatedProductsListStyles.css';

const OutfitItems = () => {
  return (
    <div className="productInnerMat">
      <OutfitItemsCarousel>
        <OutfitItemsCarouselItem></OutfitItemsCarouselItem>
        <OutfitItemsCarouselItem></OutfitItemsCarouselItem>
        <OutfitItemsCarouselItem></OutfitItemsCarouselItem>
        <OutfitItemsCarouselItem></OutfitItemsCarouselItem>
        <OutfitItemsCarouselItem></OutfitItemsCarouselItem>
        <OutfitItemsCarouselItem></OutfitItemsCarouselItem>
        <OutfitItemsCarouselItem></OutfitItemsCarouselItem>
      </OutfitItemsCarousel>
    </div>
  )
}

export default OutfitItems;