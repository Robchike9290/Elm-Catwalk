import React, { useState } from 'react';
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

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 23.65}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "23.65%" });
        })}
      </div>
      <div>
        <span>
          <button className="carouselButtonLeft"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            ◀️
          </button>
        </span>
        <span>
          <button className="carouselButtonRight"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            ▶️
          </button>
        </span>
      </div>
    </div>
  );
};

export default RelatedProductsCarousel;