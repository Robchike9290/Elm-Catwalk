import React, { useState, useContext } from 'react';
import { AppContext } from '../context.js';
import ComparisonModal from './comparisonModal.jsx';
import Price from './price.jsx';
import StarButton from './starButton.jsx';
import StarRating from './starRating.jsx';
import '../src/relatedProductsListStyles.css';

const RelatedProduct = (props) => {

  const { currentStylePhoto } = useContext(AppContext);
  const [isModalShown, setIsModalShown] = useState(false);

  const hideModal = () => {
    setIsModalShown(false);
  }

  const showModal = () => {
    setIsModalShown(true);
  }

  return (
    <span className="product">
      <div>
        {isModalShown ?
        <ComparisonModal isModalShown={isModalShown} hideModal={hideModal} /> :
        null}
      </div>
      <p className="productAction">
        <StarButton isModalShown={isModalShown} showModal={showModal}/>
      </p>
      <div>
      <img className="productImage" src={currentStylePhoto} alt="This is the image for the product."></img>
      </div>
      <p className="productData">{props.category}</p>
      <p className="productData ">{props.name}</p>
      <p className="productData">
        <Price price={props.price} salesPrice={props.salesPrice}/>
      </p>
      <p className="productStarRating">
        <StarRating/>
      </p>
      <br></br>
    </span>
  )
}

export default RelatedProduct;