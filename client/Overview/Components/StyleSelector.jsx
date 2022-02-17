import React, { useContext } from 'react';
import ThumbnailSelect from './SubComponents/ThumbnailSelect.jsx';
import { AppContext } from '../../context.js'

const StyleSelector = () =>  {

  const { styleList } = useContext(AppContext);

  // console.log(styleList);


  return (

    <div className="StyleSelector">
      {styleList.results?.map((thumbnail, key) => (
        <ThumbnailSelect style={thumbnail} thumbnail={thumbnail.photos[0].thumbnail_url} key={key}/>

      ))}
    </div>
  )
}

export default StyleSelector;