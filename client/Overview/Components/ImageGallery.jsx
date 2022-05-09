import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context.js';
import Carousel, { CarouselItem } from "../richardCarousel.jsx";
import VerticalCarousel, { VerticalCarouselItem } from "../richardVerticalCarousel.jsx";
import MainImageThumbnail from './SubComponents/MainImageThumbnail.jsx';

const ImageGallery = () => {
  const {
    currentStyle,
    currentStylePhoto,
    setCurrentStylePhoto,
    currentStyleThumbnails,
    activeIndex,
    setActiveIndex,
    bigGallery,
    setBigGallery
  } = useContext(AppContext);

  const handleClick = () => {
    setBigGallery(true);
  }

  return (
    <div className="ImageGallery" >
      <div className="rl-carousel-holder" >
        <button className="rl-expand-view-button" onClick={() => handleClick()}><i className="fa-solid fa-expand"></i></button>
        <Carousel>
          {currentStyle.photos?.map((image, key) => (
            <CarouselItem key={key}>{image.url}</CarouselItem>
          ))}
        </Carousel>
        <VerticalCarousel>
          {currentStyleThumbnails?.map((style, key) => (
            (key === activeIndex)
            ?
            <div className="active-thumbnail" key={key} onClick={() => setActiveIndex(key)}>
              <VerticalCarouselItem >{style.thumbnail_url}</VerticalCarouselItem>
            </div>
            :
            <div className="vertical-thumbnail" key={key} onClick={() => setActiveIndex(key)}>
              <VerticalCarouselItem >{style.thumbnail_url}</VerticalCarouselItem>
            </div>
          ))}
        </VerticalCarousel>
      </div>
    </div>
  )
}

export default ImageGallery;