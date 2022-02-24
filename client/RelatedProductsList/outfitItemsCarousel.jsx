import React, { useState } from 'react';
import OutfitItem from './outfitItem.jsx';

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
    <span className="carousel">
      <span className="inner" style={{ transform: `translateX(-${activeIndex * 340}px)` }}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child);
        })}
      </span>
      <div>
        <div>{activeIndex > 0 ?
          <button className="carouselButtonLeft"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            ◀️
          </button>
          :
          null
          }
        </div>
        <div> {activeIndex < React.Children.count(children) - 1 ?
          <button className="carouselButtonRight"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            ▶️
          </button>
          :
          null
        }
        </div>
      </div>
    </span>
  )
};

export default OutfitItemsCarousel;