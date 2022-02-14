import React from 'react';
import StyleSelector from './Components/StyleSelector.jsx'
import ProductInfo from './Components/ProductInfo.jsx';
import ImageGallery from './Components/ImageGallery.jsx';
import AddToCart from './Components/AddToCart.jsx';import Description from './Components/ProductInfoComponents/Description.jsx';


class Overview extends React.Component {

render () {
  return (
    <div className="Overview">

      <ImageGallery/>
      <StyleSelector/>
      <ProductInfo/>
      <AddToCart/>
      <Description/>

    </div>
  )
}
}


export default Overview;