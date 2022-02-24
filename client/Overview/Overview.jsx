/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context.js';
import StyleSelector from './Components/StyleSelector.jsx'
import ProductInfo from './Components/ProductInfo.jsx';
import ImageGallery from './Components/ImageGallery.jsx';
import AddToCart from './Components/AddToCart.jsx';
import Description from './Components/ProductInfoComponents/Description.jsx';
import ProductList from './Components/ProductInfoComponents/ProductList.jsx';
import BigGallery from './Components/BigImageGallery.jsx';



const Overview = () => {

  const context = useContext(AppContext);


  // console.log(context);


  useEffect(() => {
    // drop log to see how often this happens
    axios.get('/products')
      .then((receivedProductList) => {
        // console.log('inside axios get from productId');
        axios.get(`products/${receivedProductList.data[0].id}/styles`)
          .then((receivedStyles) => {

            context.setCurrentProductId(receivedProductList.data[0].id);
            context.setCurrentProduct(receivedProductList.data[0]);
            context.setProductList(receivedProductList.data);
          })
      })
      .catch((err) => {
        console.error(err);
        console.error('failed in inital GET');
      })
  }, [])

  useEffect(() => {
    // console.log(context.currentProductID)
    getStyles(context.currentProductId);


  }, [context.currentProductId])


  // const getFeatures = (currentProductID) => {

  //     .catch((err) => {
  //       console.error(err);
  //       console.error('failed in front end feature GET');
  //     })
  // }


  const getStyles = (currentProduct) => {



    axios.get(`products/${currentProduct}/styles`)
      .then((receivedStyles) => {
        // console.log('inside getproducts request');
        context.setStyleList(receivedStyles.data);
        context.setCurrentStyle(receivedStyles.data.results[0]);
        context.setCurrentStylePhoto(receivedStyles.data.results[0].photos[0].url);
        context.setCurrentStyleThumbnails(receivedStyles.data.results[0].photos);
      })
      .then((receivedStyles) => {
        axios.get(`products/${currentProduct}`)
          .then((receivedFeatures) => {
        context.setCurrentProductFeatures(receivedFeatures.data);
      })
      })
      .catch((err) => {
        console.error(err);
        console.error('failed in setStyles GET');
      })


  }

  return (
    <div >

      {(!context.bigGallery) ? <div className="Overview"> <ImageGallery />
      <StyleSelector />
      <ProductInfo />
      <AddToCart />
      <ProductList />
      <Description />
     </div> :<div className="Overview"><BigGallery/>
     <ProductList />
       <Description />
      </div> }


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