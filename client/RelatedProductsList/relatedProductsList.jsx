import React from 'react';
import RelatedProductsCarousel, { RelatedProductsCarouselItem } from './relatedProductsCarousel.jsx';
import '../src/relatedProductsListStyles.css';

const RelatedProductsList = () => {
  return (
    <div className="productInnerMat">
      <RelatedProductsCarousel>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
      </RelatedProductsCarousel>
    </div>
  )
}

export default RelatedProductsList;