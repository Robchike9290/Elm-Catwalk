import React, { useState } from 'react';
import RelatedProduct from './relatedProduct.jsx';

export const RelatedProductsCarouselItem = (props, { children, width }) => {
  return (
    <div className="carouselItem" style={{ width: width }}>
      <RelatedProduct
      name={props.name}
      category={props.category}
      price={props.price}
      salesPrice={props.sale_price}
      features={props.features}
      image={props.image}
      ratings={props.ratings}
      />
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
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: "23.65%" });
        })}
      </div>
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
  );
};

export default RelatedProductsCarousel;