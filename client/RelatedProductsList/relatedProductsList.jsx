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

  const getRelatedProductList = () => {
    context.relatedProductNumbers.forEach((productNumber) => {
      axios.get(`products/${productNumber}`)
      .then((product) => {
        context.relatedProductsList.push(product.data);
        context.setRelatedProductsList(context.relatedProductsList);;
      })
      .catch((err) => {
        console.error(err);
      });
    })
  }

  const getRelatedProductImages = () => {
    for (let i = 0; i < context.relatedProductNumbers.length; i++) {
      let productNumber = context.relatedProductNumbers[i];
      axios.get(`products/${productNumber}/styles`)
      .then((productStyle) => {
        context.relatedProductsList[i].sale_price = productStyle.data.results[0].sale_price;
        context.relatedProductsList[i].image = productStyle.data.results[0].photos[0].url;
        context.setRelatedProductsList(context.relatedProductsList);
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }

  useEffect(() => {
    getRelatedProductNumbers();
  }, [context.currentProductId]);

  useEffect(() => {
    getRelatedProductList();
    getRelatedProductImages();
  }, [context.relatedProductNumbers]);

  // useEffect(() => {
  // }, [context.relatedProductNumbers]);

  return (
    <div className="productInnerMat">
      <RelatedProductsCarousel>
        {context.relatedProductsList.map((product, index) => (
          // still need to get star rating (from Cheryl)
          <RelatedProductsCarouselItem
          category={product.category}
          image={product.image}
          key={index}
          name={product.name} // async?
          price={product.default_price}  // async?
          salesPrice={product.sale_price}
          >
          </RelatedProductsCarouselItem>
        ))}
      </RelatedProductsCarousel>
    </div>
  )
}

export default RelatedProductsList;