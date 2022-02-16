import React from 'react';
import RelatedProduct from './relatedProduct.jsx';
import '../src/relatedProductsListStyles.css';

export const RelatedProductsCarouselItem = ({ children, width }) => {
  return (
    <div className="carouselItem" style={{ width: width }}>
      <RelatedProduct/>
    </div>
  );
};

const RelatedProductsCarousel = ({ children }) => {
  return (
    <div className="carousel">
      <div className="inner" style={{ transform: "translateX(-0%)" }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "22%" });
        })}
      </div>
    </div>
  );
};

export default RelatedProductsCarousel;

{/* <button className="carouselButton">◀️</button>
<button className="carouselButton">▶️</button> */}