import React from 'react';

class MainImageThumbnail extends React.Component {
  constructor(props) {
    super (props)

    // console.log(props);
  }


  render () {
    return (

    <div id="pic">
      <img height="75" width="50" src={this.props.style.thumbnail_url} onClick={() => {
        this.props.handleMainPhotoChange(this.props.style.url)
      }}/>
    </div>
    )
  }
}

export default MainImageThumbnail;