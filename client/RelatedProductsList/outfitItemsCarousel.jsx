import React, { useState } from 'react';
import OutfitItem from './outfitItem.jsx';
import AddToOutfit from './addToOutfit.jsx';
import '../src/relatedProductsListStyles.css';

export const OutfitItemsCarouselItem = ({ children, width }) => {

  return (
    <span className="carouselItem" style={{ width: width }}>
      <OutfitItem/>
    </span>
  );

};

const OutfitItemsCarousel = ({ children }) => {

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
      <span>
        <AddToOutfit/>
      </span>
      <span className="inner" style={{ transform: `translateX(-${activeIndex * 23.65}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "23.65%" });
        })}
      </span>
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
  )
};

export default OutfitItemsCarousel;