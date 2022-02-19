import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context.js';
import RelatedProductsCarousel, { RelatedProductsCarouselItem } from './relatedProductsCarousel.jsx';
import '../src/relatedProductsListStyles.css';
import axios from 'axios';

const RelatedProductsList = () => {
  const context = useContext(AppContext);

  const getRelatedProductNumbers = () => {
    axios.get(`/products/${context.currentProductId}/related`)
    .then((receivedRelatedProductNumbers) => {
      context.setRelatedProductNumbers(receivedRelatedProductNumbers.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const getRelatedProductStyles = () => {
    context.relatedProductNumbers.forEach((productNumber) => {
      axios.get(`products/${productNumber}/styles`)
      .then((productStyle) => {
        console.log('client side got a response, here is the data:', productStyle.data.results, "END OF DATA");
        context.relatedProductsStyles.push(productStyle.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
    })
  }

  useEffect(() => {
    getRelatedProductNumbers();
  }, [])

  useEffect(() => {
    console.log("the related products in the context have changed!");
    getRelatedProductStyles();
  }, [context.relatedProductNumbers]);

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