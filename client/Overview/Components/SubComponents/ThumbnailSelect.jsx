import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';

const ThumbnailSelect = ({ style, thumbnail }) => {
  const { currentStyle, currentStylePhoto, setCurrentStyle, setCurrentStylePhoto, setCurrentStyleThumbnails } = useContext(AppContext);

  const handleClick = () => {
    setCurrentStyle(style)
    setCurrentStylePhoto(style.photos[0].url)
    setCurrentStyleThumbnails(style.photos)

  }

  return (
    <div>
      {(currentStylePhoto === style.photos[0].url)
      ?
      <div id='active-stylePic'>
        <span id='check'><i className="fa-solid fa-check"></i></span>
        <img alt={currentStyle.name} height='60' width='65' src={thumbnail} onClick={() => handleClick()}/>
      </div>
      :
      <div id='stylePic'>
        <img alt={currentStyle.name} height='60' width='65' src={thumbnail} onClick={() => handleClick()}/>
      </div>
      }
    </div>
  )
}

export default ThumbnailSelect;