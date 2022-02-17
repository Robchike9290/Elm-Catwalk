import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context.js';

import MainImageThumbnail from './SubComponents/MainImageThumbnail.jsx';



const ImageGallery = () => {
  const { currentStyle, currentStylePhoto, setCurrentStylePhoto, currentStyleThumbnails } = useContext(AppContext);



    return (
      <div className="ImageGallery" >
        <div >

        <img  src={currentStylePhoto} height="515" width="470" id="mainImage" alt='frick'/>
        </div>
      <div >
      <ul id="mainImageThumbs">
        {currentStyleThumbnails.map((style, key) => {
          return <MainImageThumbnail style={style} key={key}/>

        })}

        </ul>

      </div>



      </div>
    )


}


export default ImageGallery;