import React from 'react';
import MainImageThumbnail from './SubComponents/MainImageThumbnail.jsx';

class ImageGallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mainImage: '',
      thumbnails: [],
    }

    this.handleStateChange = this.handleStateChange.bind(this)
  }

  componentDidUpdate () {
    // console.log('updated props',this.props);
    // this.handleStateChange();
    // console.log(this.state);
  }

  handleStateChange () {
    this.setState ({
      mainImage: this.props.currentStyle.photos[0].url,
      thumbnails: this.props.currentStyle.photos
    })
  }

  render () {
    return (
      <div className="ImageGallery" >
        <div >

        <img  src={this.props.currentStylePhoto} height="525" width="480" id="mainImage" alt='frick'/>
        </div>
      <div >
      <ul id="mainImageThumbs">
        {this.props.currentStyleThumbnails.map((style, key) => {
          return <MainImageThumbnail handleMainPhotoChange={this.props.handleMainPhotoChange} style={style} key={key}/>

        })}

        </ul>

      </div>



      </div>
    )
  }

}


export default ImageGallery;