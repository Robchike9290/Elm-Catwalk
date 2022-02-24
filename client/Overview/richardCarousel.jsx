/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
// import "../dist/richardCarousel.css";


export const CarouselItem = ({ children, width }) => {
  return (
    <div className="rl-carousel-item" style={{ width: width }}>
    <img height="515" width="470" src={children}/>
    </div>
  );
}

const Carousel = ( { children }) => {
  const { activeIndex, setActiveIndex } = useContext(AppContext);
  const { currentStyle, currentProduct } = useContext(AppContext);

  useEffect ( () => {

    setActiveIndex(0);
  }

  , [currentProduct])

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  }

  return (
    <div className="rl-carousel">
      <div
        className="rl-inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className='rl-indicators'>
        <button className="rl-prev"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          	&#10094;
          </button>
          <button className="rl-next"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          &#10095;
          </button>


      </div>
    </div>
  )
}

export default Carousel;