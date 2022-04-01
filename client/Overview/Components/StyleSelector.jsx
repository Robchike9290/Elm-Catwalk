import React, { useContext } from 'react';
import ThumbnailSelect from './SubComponents/ThumbnailSelect.jsx';
import { AppContext } from '../../context.js'

const StyleSelector = () =>  {

  const { styleList } = useContext(AppContext);

  return (
    <div className="style-selector-holder">
    <div className="StyleSelector">
      {styleList.results?.map((thumbnail, key) => (
        <ThumbnailSelect style={thumbnail} thumbnail={thumbnail.photos[0].thumbnail_url} key={key}/>

      ))}
    </div>

    </div>
  )
}

export default StyleSelector;