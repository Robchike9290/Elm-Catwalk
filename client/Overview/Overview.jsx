import React from 'react';
import StyleSelector from './Components/StyleSelector.jsx'
import ProductInfo from './Components/ProductInfo.jsx';
import ImageGallery from './Components/ImageGallery.jsx';
import AddToCart from './Components/AddToCart.jsx';


class Overview extends React.Component {

render () {
  return (
    <div>
      <ImageGallery/>
      <StyleSelector/>
      <ProductInfo/>
      <AddToCart/>

    </div>
  )
}
}


export default Overview;