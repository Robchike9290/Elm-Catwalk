import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
import RelatedProductsCarousel, { RelatedProductsCarouselItem } from './relatedProductsCarousel.jsx';
import '../src/relatedProductsListStyles.css';
import axios from 'axios';

const RelatedProductsList = () => {
  const context = useContext(AppContext);

  const getRelatedProductData = () => {
    axios.get(`/products/${context.currentProductId}/related`)
    .then((receivedRelatedProductNumbers) => {
      context.setRelatedProductNumbers(receivedRelatedProductNumbers.data);
      return receivedRelatedProductNumbers.data;
    })
    .then((receivedRelatedProductNumbers) => {
      const relatedProductsForContext = [];
      receivedRelatedProductNumbers.forEach((receivedProductNumber) => {
        axios.get(`/products/${receivedProductNumber}`)
        .then((receivedProductNumber) => {
          relatedProductsForContext.push(receivedProductNumber.data);
        })
        .catch((err) => {
          console.error(err);
        })
      })
      return relatedProductsForContext;
    })
    .then((relatedProductListForContext) => {
      context.setRelatedProductsList(relatedProductListForContext);
      return relatedProductListForContext;
    })
    .then((relatedProductListForAdditionalRequest) => {
      getRelatedProductImages(relatedProductListForAdditionalRequest);
      return relatedProductListForAdditionalRequest;
    })
    // .then((receivedRelatedProductImages) => {
    //   context.setRelatedProductImages(receivedRelatedProductImages);
    //   return receivedRelatedProductImages;
    // })
    .catch((err) => {
      console.error(err);
    });
  };

  const getRelatedProductImages = (relatedProductListForAdditionalRequest) => {
    console.log("Inside function for related products list!");
    // create an array to store the images for each of the related products
    const receivedRelatedProductImages = [];
    // perform a GET request for each of the products
    // for (let i = 0; i < relatedProductListForAdditionalRequest.length; i++) {
    //   axios.get(`products/${relatedProductListForAdditionalRequest[i].id}/styles`)
    //   .then((receivedRelatedProductStyle) => {
    //     receivedRelatedProductImages.push(receivedRelatedProductStyle);
    //   })
    // }
    return relatedProductListForAdditionalRequest;
  }

  useEffect(() => {
    getRelatedProductData();
  }, [])

  return (
    <div className="productInnerMat">
      <RelatedProductsCarousel>
        {context.relatedProductsList.map((product, index) => (
          // still need to get...
            // product image
            // sales price
            // star rating (from Cheryl)
          <RelatedProductsCarouselItem
          category={product.category}
          key={index}
          name={product.name}
          price={product.default_price}
          salesPrice={product.sales_price}
          >
          </RelatedProductsCarouselItem>
        ))}
      </RelatedProductsCarousel>
    </div>
  )
}

export default RelatedProductsList;