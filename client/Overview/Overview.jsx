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
import MastHead from './Components/MastHead.jsx';

const Overview = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    axios.get('/products')
    .then((receivedProductList) => {
      axios.get(`products/${receivedProductList.data[0].id}/styles`)
      .then((receivedStyles) => {
        context.setCurrentProductId(receivedProductList.data[0].id);
        context.setCurrentProduct(receivedProductList.data[0]);
        context.setProductList(receivedProductList.data);
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }, [])

  useEffect(() => {
    getStyles(context.currentProductId);
  }, [context.currentProductId])

  const getStyles = (currentProduct) => {
    axios.get(`products/${currentProduct}/styles`)
    .then((receivedStyles) => {
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
    })
  }

  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  return (
    <div >
      {(!context.bigGallery)
      ?
      <div className="Overview"> <ImageGallery/>
        <StyleSelector/>
        <ProductInfo/>
        <AddToCart/>
        <ProductList/>
        <Description/>
      </div>
      :
      <div className="Overview"><BigGallery/>
        <ProductList/>
        <Description/>
      </div>
      }
    </div>
  )
}

export default Overview;