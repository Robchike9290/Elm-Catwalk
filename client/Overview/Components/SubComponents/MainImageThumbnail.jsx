import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';

const MainImageThumbnail = ({ style }) => {

  const { setCurrentStylePhoto } = useContext(AppContext);

  return (

    <div id="pic">
      <img height="75" width="50" src={style.thumbnail_url} onClick={() => {
        setCurrentStylePhoto(style.url)
      }} />
    </div>
  )

}

export default MainImageThumbnail;



