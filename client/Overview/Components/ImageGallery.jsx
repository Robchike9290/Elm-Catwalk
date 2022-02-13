import React from 'react';

class ImageGallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mainImage: '',
      thumbnails: [],
    }
  }

  render () {
    return (
      <div>
        <p className="mainImage">Main Image</p>
        <p className="thumbnails">Thumbnails</p>


      </div>
    )
  }

}


export default ImageGallery;