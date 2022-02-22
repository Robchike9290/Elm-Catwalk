import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context.js';
import ComparisonModal from './comparisonModal.jsx';
import Price from './price.jsx';
import StarButton from './starButton.jsx';
import StarRating from './starRating.jsx';
import '../src/relatedProductsListStyles.css';

const RelatedProduct = (props) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const context = useContext(AppContext);

  const [currentProductValues, setCurrentProductValues] = useState([]);
  const [modalProperties, setModalProperties] = useState([]);
  const [comparedProductValues, setComparedProductValues] = useState([]);

  const populateModalProperties = () => {
    const currentValues = [];
    const comparedValues = [];
    const allProperties = [];
    const currentProperties = Object.entries(context.currentProduct);

    for (let i = 0; i < currentProperties.length; i++) {
      let currentProperty = currentProperties[i][0];
      let currentValue = currentProperties[i][1];
      if (currentProperty === 'name' ||
          currentProperty === 'category' ||
          currentProperty === 'default_price' ||
          currentProperty === 'features'
        ) {
        if (currentProperty !== 'default_price') {
          allProperties.push(currentProperty);
        }
        currentValues.push(currentValue);
      }
    }

    let currentProductSalesPrice = context.currentStyle.sale_price;
    currentValues.push(currentProductSalesPrice);

    for (let prop in props) {
      if (prop !== 'image' && prop !== 'ratings' && !allProperties.includes(prop)) {
        allProperties.push(prop);
      }
      if (prop !== 'image' && prop !== 'ratings') {
        comparedValues.push(props[prop]);
      }
    }

    setCurrentProductValues(currentValues);
    setModalProperties(allProperties);
    setComparedProductValues(comparedValues);
  }

  const hideModal = () => {
    setIsModalShown(false);
  }

  const showModal = () => {
    setIsModalShown(true);
  }

  useEffect(() => {
    populateModalProperties();
  }, []);

  return (
    <span className="product">
      <div>
        {isModalShown ?
        <div className="modalMat">
          <ComparisonModal
          comparedProductValues={comparedProductValues}
          currentProductValues={currentProductValues}
          hideModal={hideModal}
          isModalShown={isModalShown}
          modalProperties={modalProperties}
          />
        </div> :
        null}
      </div>
      <div className="productAction">
        <StarButton isModalShown={isModalShown} showModal={showModal}/>
      </div>
      <div className="productImageMat">
      <img className="productImage" src={props.image} alt=" No image yet! 📸"></img>
      </div>
      <div className="productData">Category: {props.category}</div>
      <div className="productData ">Name: {props.name}</div>
      <div className="productData">
        <Price price={props.price} salesPrice={props.salesPrice}/>
      </div>
      <div className="productStarRating">
        <StarRating ratings={props.ratings}/>
      </div>
    </span>
  )
}

export default RelatedProduct;