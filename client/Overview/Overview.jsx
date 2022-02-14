import React from 'react';
import axios from 'axios';
import StyleSelector from './Components/StyleSelector.jsx'
import ProductInfo from './Components/ProductInfo.jsx';
import ImageGallery from './Components/ImageGallery.jsx';
import AddToCart from './Components/AddToCart.jsx';import Description from './Components/ProductInfoComponents/Description.jsx';



class Overview extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      productList: [],
      currentProduct: {},
      currentProductId: 0,
      currentStyle: {},
      currentStylePhoto: '',
      currentStyleThumbnails: [],
      styleList: []


    }
    // console.log();
    this.handleMainPhotoChange = this.handleMainPhotoChange.bind(this);
  }

  componentDidMount () {

    axios.get('/products')
      .then((receivedProductList) => {
        console.log(receivedProductList.data[0]);

        axios.get(`products/${receivedProductList.data[0].id}/styles`)
          .then((receivedStyles) => {
            // console.log('current style', receivedStyles.data.results[0]);
            this.setState ({
              currentProduct: receivedProductList.data[0],
              currentProductId: receivedProductList.data[0].id,
              productList: receivedProductList.data,
              styleList: receivedStyles.data,
              currentStyle: receivedStyles.data.results[0],
              currentStylePhoto: receivedStyles.data.results[0].photos[0].url,
              currentStyleThumbnails: receivedStyles.data.results[0].photos
            })
            console.log('Updated State', this.state);
          })
      })
      .catch ((err) => {
        console.error(err);
        console.error('failed in inital GET');
      })

  }

  handleMainPhotoChange (newURL) {
    this.setState({
      currentStylePhoto: newURL
    })

  }

render () {
  return (
    <div className="Overview">

      <ImageGallery currentStyle={this.state.currentStyle} currentStylePhoto={this.state.currentStylePhoto} currentStyleThumbnails={this.state.currentStyleThumbnails} handleMainPhotoChange={this.handleMainPhotoChange}/>
      <StyleSelector/>
      <ProductInfo currentProduct={this.state.currentProduct} styleList={this.state.styleList}/>
      <AddToCart/>
      <Description/>

    </div>
  )
}
}


export default Overview;