import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context.js';

import MainImageThumbnail from './SubComponents/MainImageThumbnail.jsx';

// currentStyle={this.state.currentStyle} currentStylePhoto={this.state.currentStylePhoto} currentStyleThumbnails={this.state.currentStyleThumbnails} handleMainPhotoChange={this.handleMainPhotoChange}

const ImageGallery = () => {
  const { currentStyle, currentStylePhoto, setCurrentStylePhoto, currentStyleThumbnails } = useContext(AppContext);

  // console.log(setCurrentStylePhoto);



  // handleStateChange () {
  //   this.setState ({
  //     mainImage: this.props.currentStyle.photos[0].url,
  //     thumbnails: this.props.currentStyle.photos
  //   })
  // }


    return (
      <div className="ImageGallery" >
        <div >

        <img  src={currentStylePhoto} height="525" width="480" id="mainImage" alt='frick'/>
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