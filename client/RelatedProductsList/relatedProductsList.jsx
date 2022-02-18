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
      const relatedProducts = [];
      relatedProductNumbers.forEach((productNumber) => {
        axios.get(`/products/${productNumber}`)
        .then((productNumber) => {
          relatedProducts.push(productNumber.data);
        })
        .catch((err) => {
          console.error(err);
        })
      })
      return relatedProducts;
    })
    .then((relatedProductList) => {
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
        {context.relatedProductsList.map((product, index) => (
          // still need to get...
            // product image
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