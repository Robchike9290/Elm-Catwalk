import React, { useState } from 'react';
import ComparisonModal from './comparisonModal.jsx';
import Price from './price.jsx';
import StarButton from './starButton.jsx';
import StarRating from './starRating.jsx';
import '../src/relatedProductsListStyles.css';

const RelatedProduct = (props) => {

  console.log(props);

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
        <div className="modalMat">
          <ComparisonModal isModalShown={isModalShown} hideModal={hideModal} />
        </div> :
        null}
      </div>
      <div className="productAction">
        <StarButton isModalShown={isModalShown} showModal={showModal}/>
      </div>
      <div className="productImageMat">
      <img className="productImage" src={props.image} alt="We're sorry, we don't have an image of this yet!"></img>
      </div>
      <div className="productData">Category: {props.category}</div>
      <div className="productData ">Name: {props.name}</div>
      <div className="productData">
        <Price price={props.price} salesPrice={props.salesPrice}/>
      </div>
      <div className="productStarRating">
        <StarRating/>
      </div>
    </span>
  )
}

export default RelatedProduct;