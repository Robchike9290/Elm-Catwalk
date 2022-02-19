import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
// import "../dist/richardCarousel.css";


export const VerticalCarouselItem = ({ children, height }) => {

  return (
    <div className="vertical-carousel-item" style={{ height: height }} >
    <img width="65" height="65" src={children}/>
    </div>
  );
}

const VerticalCarousel = ( { children }) => {
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
    <div className="vertical-carousel">
      <div
        className="vertical-inner"
        style={{ transform: `translateY(-${activeIndex * 20}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { height: "20%" });
        })}
      </div>
      <div className='vertical-indicators'>
        <button className="vertical-prev"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          	 &#9660;
          </button>
          <button className="vertical-next"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
           &#9650;
          </button>


      </div>
    </div>
  )
}

export default VerticalCarousel;