import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
import RelatedProductsCarousel, { RelatedProductsCarouselItem } from './relatedProductsCarousel.jsx';
import '../src/relatedProductsListStyles.css';
import axios from 'axios';

const RelatedProductsList = () => {
  const context = useContext(AppContext);

  const getRelatedProductNumbers = () => {
    axios.get(`/products/${context.currentProductId}/related`)
    .then((response) => {
      const relatedProductNumbers = response.data;
      console.log("These are the related product numbers:", relatedProductNumbers);

      const relatedProductMajorityDataPromises = Promise.all(relatedProductNumbers.map(productNumber => {
        return axios.get(`products/${productNumber}`);
      }))

      const relatedProductRemainingDataPromises = Promise.all(relatedProductNumbers.map(productNumber => {
        return axios.get(`products/${productNumber}/styles`);
      }))

      // const relatedProductReviewsPromises = Promise.all(relatedProductNumbers.map(productNumber => {
      //   return axios.get(`reviews/${productNumber}`);
      // }))

      relatedProductMajorityDataPromises.then(resolution => {
        const productData = [];
        resolution.forEach(product => {
          let currentIndex = {};
          currentIndex.category = product.data.category;
          currentIndex.default_price = product.data.default_price;
          currentIndex.name = product.data.name;
          currentIndex.features = product.data.features;
          productData.push(currentIndex);
          console.log("this is the product data array after this iteration:", productData);
        })

        relatedProductRemainingDataPromises.then(resolution => {
          for (let i = 0; i < resolution.length; i++) {
            let productImage = resolution[i].data.results[0].photos[0].url;
            let productSalesPrice = resolution[i].data.results[0].sale_price;
            productData[i].image = productImage;
            productData[i].sale_price = productSalesPrice;
            console.log("this is the product data array augmented with new data:", productData);
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