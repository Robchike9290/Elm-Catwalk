import React from 'react';
import ExpandedInfo from './ProductInfoComponents/ExpandedInfo.jsx';
import Socials from './ProductInfoComponents/Socials.jsx';
import StarRating from './ProductInfoComponents/StarRating.jsx';
import Description from './ProductInfoComponents/Description.jsx';

class ProductInfo extends React.Component {
constructor(props) {
  super(props);
  this.state = {

  }
}

render () {

  return (

    <div className="ProductInfo">
      <ExpandedInfo/>
      <StarRating/>
      <Socials/>



    </div>
  )
}

}

export default ProductInfo;