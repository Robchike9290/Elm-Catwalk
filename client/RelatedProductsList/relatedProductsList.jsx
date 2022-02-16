import React from 'react';
import RelatedProductsCarousel, { RelatedProductsCarouselItem } from './relatedProductsCarousel.jsx';
import '../src/relatedProductsListStyles.css';

const RelatedProductsList = () => {
  return (
    <div className="productInnerMat">
      <RelatedProductsCarousel>
        <RelatedProductsCarouselItem>Item 1</RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem>Item 2</RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem>Item 3</RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem>Item 4</RelatedProductsCarouselItem>
      </RelatedProductsCarousel>
    </div>
  )
}

export default RelatedProductsList;