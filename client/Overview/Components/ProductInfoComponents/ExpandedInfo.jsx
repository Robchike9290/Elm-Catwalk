import React from 'react';

class ExpandedInfo extends React.Component {
constructor(props) {
  super(props);
  this.state = {

  }
}

render () {

  return (

    <div>
      {this.props.name}
      <br></br>
      {this.props.price}
      <br></br>
      {this.props.styleName}
    </div>
  )
}

}

export default ExpandedInfo;