import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
// import "../dist/richardCarousel.css";


export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
    <img height="515" width="470" src={children}/>
    </div>
  );
}

const Carousel = ( { children }) => {
  const { activeIndex, setActiveIndex } = useContext(AppContext);
  const { currentStyle } = useContext(AppContext);

  useEffect ( () => {

    setActiveIndex(0);
  }

  , [currentStyle])

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
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className='indicators'>
        <button className="prev"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          	&#10094;
          </button>
          <button className="next"
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