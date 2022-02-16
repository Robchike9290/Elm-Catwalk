import React from 'react';
import ExpandedInfo from './ProductInfoComponents/ExpandedInfo.jsx';
import Socials from './ProductInfoComponents/Socials.jsx';
import StarRating from './ProductInfoComponents/StarRating.jsx';
// import Description from './ProductInfoComponents/Description.jsx';

// currentStyle={this.state.currentStyle}
//           currentProduct={this.state.currentProduct} styleList={this.state.styleList}

class ProductInfo extends React.Component {
constructor(props) {
  super(props);
  this.state = {

  }

}


componentDidUpdate () {
  // console.log('product info updated props',this.props);
  // this.handleStateChange();
  // console.log(this.state);
}

render () {

  return (

    <div className="ProductInfo">
      <ExpandedInfo price={this.props.currentProduct.default_price} name={this.props.currentProduct.name} styleName={this.props.currentStyle.name}/>
      <StarRating/>
      <Socials/>




    </div>
  )
}

}

export default ProductInfo;