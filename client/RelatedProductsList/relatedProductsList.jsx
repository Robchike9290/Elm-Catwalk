import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
import RelatedProductsCarousel, { RelatedProductsCarouselItem } from './relatedProductsCarousel.jsx';
import axios from 'axios';

const config = require('../../config.js');

const firstController = new AbortController();
const firstSignal = firstController.signal;
const secondController = new AbortController();
const secondSignal = secondController.signal;
const thirdController = new AbortController();
const thirdSignal = thirdController.signal;
const fourthController = new AbortController();
const fourthSignal = fourthController.signal;

const RelatedProductsList = () => {
  const context = useContext(AppContext);

  const getRelatedProductNumbers = () => {
    axios.get(`/products/${context.currentProductId}/related`, {signal: firstSignal})
    .then((response) => {
      const relatedProductNumbers = response.data;

      firstController.abort();

      const relatedProductMajorityDataPromises = Promise.all(relatedProductNumbers.map(productNumber => {
        return axios.get(`products/${productNumber}`, {signal: secondSignal});
        secondController.abort();
      }))



      const relatedProductRemainingDataPromises = Promise.all(relatedProductNumbers.map(productNumber => {
        return axios.get(`products/${productNumber}/styles`, {signal: thirdSignal});
        thirdController.abort();
      }))


      const relatedProductReviewsPromises = Promise.all(relatedProductNumbers.map(productNumber => {
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${productNumber}`,
        {
          headers: {
            authorization: config.TOKEN
          }
        });
        fourthController.abort();
      }));

      relatedProductMajorityDataPromises.then(resolution => {
        const productData = [];
        resolution.forEach(product => {
          let currentIndex = {};
          currentIndex.category = product.data.category;
          currentIndex.default_price = product.data.default_price;
          currentIndex.name = product.data.name;
          currentIndex.features = product.data.features;
          productData.push(currentIndex);
        })
        relatedProductReviewsPromises.then(resolution => {
          for (let i = 0; i < resolution.length; i++) {
            let productRatings = resolution[i].data.ratings;
            productData[i].ratings = productRatings;
          }
        })
        relatedProductRemainingDataPromises.then(resolution => {
          for (let i = 0; i < resolution.length; i++) {
            let productImage = resolution[i].data.results[0].photos[0].url;
            let productSalesPrice = resolution[i].data.results[0].sale_price;
            productData[i].image = productImage;
            productData[i].sale_price = productSalesPrice;
          }
          context.setRelatedProductsInfo(productData);
        })
        .catch(err => {
          console.error(err);
        })
      })
    })
    .catch((err) => {
      console.error(err);
    });

  };

  useEffect(() => {
    getRelatedProductNumbers();
  }, [context.currentProductId]);

  return (
    <div className="productInnerMat">
      <RelatedProductsCarousel>
        {context.relatedProductsInfo.map((product, index) => (
          <RelatedProductsCarouselItem
          category={product.category}
          features={product.features}
          image={product.image}
          key={index}
          name={product.name}
          price={product.default_price}
          ratings={product.ratings}
          salesPrice={product.sale_price}
          >
          </RelatedProductsCarouselItem>
        ))}
      </RelatedProductsCarousel>
    </div>
  )
}

export default RelatedProductsList;