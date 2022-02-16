import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context.js';
import StyleSelector from './Components/StyleSelector.jsx'
import ProductInfo from './Components/ProductInfo.jsx';
import ImageGallery from './Components/ImageGallery.jsx';
import AddToCart from './Components/AddToCart.jsx'; import Description from './Components/ProductInfoComponents/Description.jsx';
import ProductList from './Components/ProductInfoComponents/ProductList.jsx';



const Overview = () => {

  const context = useContext(AppContext);

  // console.log('this is in overview', context)
  // console.log('show me product id', context.productId)

  useEffect(() => {
    axios.get('/products')
      .then((receivedProductList) => {
        // console.log(receivedProductList.data[0]);
        // console.log('in second axios req', receivedProductList.data[0].id)

        axios.get(`products/${receivedProductList.data[0].id}/styles`)
          .then((receivedStyles) => {

            context.setCurrentProductId(receivedProductList.data[0].id);
            context.setCurrentProduct(receivedProductList.data[0]);
            context.setProductList(receivedProductList.data);
            context.setStyleList(receivedStyles.data);
            context.setCurrentStyle(receivedStyles.data.results[0]);
            context.setCurrentStylePhoto(receivedStyles.data.results[0].photos[0].url);
            context.setCurrentStyleThumbnails(receivedStyles.data.results[0].photos);
            // console.log('current style', receivedStyles.data.results[0]);
            //   this.setState({
            //     // price: receivedStyles.data.results[0].original_price,
            //     // currentProduct: receivedProductList.data[0],
            //     // currentProductId: receivedProductList.data[0].id,
            //     // productList: receivedProductList.data,
            //     styleList: receivedStyles.data,
            //     currentStyle: receivedStyles.data.results[0],
            //     currentStylePhoto: receivedStyles.data.results[0].photos[0].url,
            //     currentStyleThumbnails: receivedStyles.data.results[0].photos
            //   })
            // console.log('Updated State', this.state);
          })
      })
      .catch((err) => {
        console.error(err);
        console.error('failed in inital GET');
      })
  }, [])

  useEffect(() => {
    // console.log(context.currentProduct);
    getStyles(context.currentProductId)

  }, [context.currentProductId])

// WORKING ON THIS
  const getStyles = (currentProduct) => {

    // console.log('hello');

    axios.get(`products/${currentProduct}/styles`)
      .then((receivedStyles) => {
        // console.log('current style', receivedStyles.data.results[0]);
        context.setStyleList(receivedStyles.data);
        context.setCurrentStyle(receivedStyles.data.results[0]);
        context.setCurrentStylePhoto(receivedStyles.data.results[0].photos[0].url);
        context.setCurrentStyleThumbnails(receivedStyles.data.results[0].photos);
        // this.setState({
        //   // price: receivedStyles.data.results[0].original_price,
        //   // styleList: ,
        //   // currentStyle: receivedStyles.data.results[0],
        //   // currentStylePhoto: receivedStyles.data.results[0].photos[0].url,
        //   currentStyleThumbnails: receivedStyles.data.results[0].photos
        // })
        // console.log('Updated State', this.state);
      })
      .catch((err) => {
        console.error(err);
        console.error('failed in setStyles GET');
      })


  }
  // componentDidMount() {



  // }

  // handleMainPhotoChange(newURL) {
  //   this.setState({
  //     currentStylePhoto: newURL
  //   })

  // }

  // handleProductChange(clickedProduct) {
  //   this.setState ({
  //     currentProduct: clickedProduct
  //   })
  //   this.getStyles(clickedProduct.id)

  // }






return (
  <div className="Overview">

    <ImageGallery />
    {/* <StyleSelector />
        <ProductInfo  />
        <AddToCart />
        <Description  /> */}
    <ProductList />

  </div>
)

}


export default Overview;



// ==========================Garbage Heap
/*
// constructor(props) {
//   super(props)
//   this.state = {
//     price: 0,
//     productList: [],
//     currentProduct: {},
//     currentProductId: 0,
//     currentStyle: {},
//     currentStylePhoto: '',
//     currentStyleThumbnails: [],
//     styleList: []


//   }

   // console.log();
    this.handleMainPhotoChange = this.handleMainPhotoChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.getStyles = this.getStyles.bind(this)
  }
*/