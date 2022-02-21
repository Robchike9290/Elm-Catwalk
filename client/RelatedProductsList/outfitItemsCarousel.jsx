import React, { useState } from 'react';
import OutfitItem from './outfitItem.jsx';
import OutfitAddItem from './outfitAddItem.jsx';
import '../src/relatedProductsListStyles.css';

export const OutfitItemsCarouselItem = (props, { children, width }) => {

  return (
    <div className="carouselItem" style={{ width: width }}>
      <OutfitItem
      name={props.name}
      category={props.category}
      features={props.features}
      image={props.image}
      price={props.price}
      ratings={props.ratings}
      salesPrice={props.sale_price}
      />
    </div>
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
        <OutfitAddItem/>
      </span>
      <span className="inner" style={{ transform: `translateX(-${activeIndex * 23.65}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "23.65%" });
        })}
      </span>
      <div>
        <span>{activeIndex > 0 ?
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
        </span>
        <span> {activeIndex < React.Children.count(children) - 1 ?
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
        </span>
      </div>
    </div>
  )
};

export default OutfitItemsCarousel;