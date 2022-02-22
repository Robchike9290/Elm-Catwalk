/* eslint-disable no-unused-vars */
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
  const [verticalIndex, setVerticalIndex] = useState(0)
  const { currentStyle } = useContext(AppContext);
  // console.log(activeIndex)
  useEffect ( () => {
    if(activeIndex < 6) {
      // console.log('big')
      setVerticalIndex(0);
    }

    if(activeIndex > 6) {
      // console.log('lil');
      setVerticalIndex(3);
    }
  }

  , [activeIndex])
  // can make a useeffect that fires when active index changes. If it's like 5, set vertical index to 5 or something

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setVerticalIndex(newIndex);
  }

  return (
    <div className="vertical-carousel">
      <div
        className="vertical-inner"
        style={{ transform: `translateY(-${verticalIndex * 20}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { height: "20%" });
        })}
      </div>

      <div className='vertical-indicators'>
        <button className="vertical-prev"
          onClick={() => {
            updateIndex(verticalIndex + 1);
          }}
        >
          	 &#9660;
          </button>
          <button className="vertical-next"
          onClick={() => {
            updateIndex(verticalIndex - 1);
          }}
        >
           &#9650;
          </button>


      </div>
    </div>
  )
}

export default VerticalCarousel;