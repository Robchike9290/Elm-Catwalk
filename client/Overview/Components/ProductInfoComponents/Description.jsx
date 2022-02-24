import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';



const Description = (props) => {

  const { currentProduct, currentProductFeatures } = useContext(AppContext) ;
  console.log(currentProductFeatures);
  return (
  <div
  className='bigDescription'>
    <div className='rl-actual-description'>
    <h1>{currentProductFeatures.slogan}</h1>
    <h5>{currentProduct.description}</h5>
    </div>
    <div className="rl-features-list">
      {currentProductFeatures.features?.map((feature, key) => (
        <span key={key}>✔ {feature.feature}: {feature.value} </span>
      ))}
      </div>


  </div>
  )
}

export default Description;