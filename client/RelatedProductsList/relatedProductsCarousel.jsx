import React, { useState, useContext } from 'react';
import RelatedProduct from './relatedProduct.jsx';
import {AppContext} from '../context.js';

export const RelatedProductsCarouselItem = (props, { width }) => {
  return (
    <span className="carouselItem" style={{ width: width }}>
      <RelatedProduct
      name={props.name}
      category={props.category}
      price={props.price}
      salesPrice={props.sale_price}
      features={props.features}
      image={props.image}
      ratings={props.ratings}
      />
    </span>
  );
};

const RelatedProductsCarousel = ({ children }) => {

  const context = useContext(AppContext);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    context.setRelatedProductsActiveIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div className="inner" style={{ transform: `translateX(-${context.relatedProductsActiveIndex * 340}px)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, index);
        })}
      </div>
      <div>
        <span>{context.relatedProductsActiveIndex > 0
          ?
          <button className="carouselButtonLeft"
            onClick={() => {
              updateIndex(context.relatedProductsActiveIndex - 1);
            }}
          >
            ◀️
          </button>
          :
          null
          }
        </span>
        <span> {context.relatedProductsActiveIndex < React.Children.count(children) - 1
          ?
          <button className="carouselButtonRight"
            onClick={() => {
              updateIndex(context.relatedProductsActiveIndex + 1);
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