import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context.js';
import RelatedProductsCarousel, { RelatedProductsCarouselItem } from './relatedProductsCarousel.jsx';
import '../src/relatedProductsListStyles.css';
import axios from 'axios';

const RelatedProductsList = () => {

  const context = useContext(AppContext);
  console.log("Context", context);
  console.log("Product ID", context.currentProductId);

  // const getRelatedProducts = () => {
  //   console.log('Fired the hook!');
  //   axios.get(`/products/?id=${context.currentProductId}/related`)
  //     .then((relatedProductsList) => {
  //       console.log("Related Products List Data", relatedProductsList.data);
  //       return relatedProductsList.data;
  //   })
  //     .catch((err) => {
  //       //res.status(404).end();
  //       return err;
  //   });
  // };

  // useEffect = () => {
  //   getRelatedProducts();
  // }

  return (
    <div className="productInnerMat">
      <RelatedProductsCarousel>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
        <RelatedProductsCarouselItem></RelatedProductsCarouselItem>
      </RelatedProductsCarousel>
    </div>
  )
}

export default RelatedProductsList;