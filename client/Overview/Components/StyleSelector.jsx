import React from 'react';
import ThumbnailSelect from './SubComponents/ThumbnailSelect.jsx';

class StyleSelector extends React.Component {
constructor(props) {
  super(props);
  this.state = {

  }
}

render () {

  return (

    <div className="StyleSelector">
      <ThumbnailSelect/>
    </div>
  )
}

}

export default StyleSelector;