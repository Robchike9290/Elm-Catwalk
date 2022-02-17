import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
import RelatedProductsCarousel, { RelatedProductsCarouselItem } from './relatedProductsCarousel.jsx';
import '../src/relatedProductsListStyles.css';
import axios from 'axios';

const RelatedProductsList = () => {

  const context = useContext(AppContext);

  const getRelatedProducts = () => {
    axios.get(`/products/${context.currentProductId}/related`)
    .then((relatedProductsList) => {
      context.setRelatedProductNumbers(relatedProductsList.data);
      return relatedProductsList.data;
    })
    .then((relatedProductNumbers) => {
      // create an array to store the results of the GET request for all of the related products (Promise.all??)
      const relatedProducts = [];
      // issue an axios GET request for each item in the relatedProductNumbers array, pushing it into the local array
      relatedProductNumbers.forEach((productNumber) => {
        axios.get(`/products/${productNumber}`)
        .then((productNumber) => {
          relatedProducts.push(productNumber.data);
          console.log("relatedProducts:", relatedProducts);
        })
        .catch((err) => {
          console.error(err);
        })
      })
      // return the local array
      return relatedProducts;
    })
    .then((relatedProductList) => {
      // set the relatedProductList value in the context to the input argument.
      context.setRelatedProductsList(relatedProductList);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  useEffect(() => {
    getRelatedProducts();
  }, [])

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