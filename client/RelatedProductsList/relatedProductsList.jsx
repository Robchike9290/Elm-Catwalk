import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
import RelatedProductsCarousel, { RelatedProductsCarouselItem } from './relatedProductsCarousel.jsx';
import '../src/relatedProductsListStyles.css';
import axios from 'axios';
const config = require('../../config.js');

const RelatedProductsList = () => {
  const context = useContext(AppContext);
  // console.log(config.TOKEN);

  const getRelatedProductNumbers = () => {
    axios.get(`/products/${context.currentProductId}/related`)
    .then((response) => {
      const relatedProductNumbers = response.data;

      const relatedProductMajorityDataPromises = Promise.all(relatedProductNumbers.map(productNumber => {
        return axios.get(`products/${productNumber}`);
      }))

      const relatedProductRemainingDataPromises = Promise.all(relatedProductNumbers.map(productNumber => {
        return axios.get(`products/${productNumber}/styles`);
      }))

      const relatedProductReviewsPromises = Promise.all(relatedProductNumbers.map(productNumber => {
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${productNumber}`, {
          headers: {
            authorization: config.TOKEN
          }
        });
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
          // still need to get star rating (from Cheryl)
          <RelatedProductsCarouselItem
          category={product.category}
          features={product.features}
          image={product.image}
          key={index}
          name={product.name}
          price={product.default_price}
          salesPrice={product.sale_price}
          >
          </RelatedProductsCarouselItem>
        ))}
      </RelatedProductsCarousel>
    </div>
  )
}

export default RelatedProductsList;