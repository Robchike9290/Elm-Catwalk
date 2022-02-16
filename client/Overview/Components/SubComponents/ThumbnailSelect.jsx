import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';

const ThumbnailSelect = ({ style, thumbnail }) => {
  // console.log(props);
  const { setCurrentStyle, setCurrentStylePhoto, setCurrentStyleThumbnails } = useContext(AppContext);
  console.log('in thumbselect', style);

  const handleClick = () => {
    setCurrentStyle(style)
    setCurrentStylePhoto(style.photos[0].url)
    setCurrentStyleThumbnails(style.photos)

  }

  return (

    <div id='stylePic'>
      <img height='60' width='65' src={thumbnail} onClick={() => handleClick()} />



    </div>
  )

}

export default ThumbnailSelect;

