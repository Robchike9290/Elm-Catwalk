import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';



const Description = (props) => {

  const { currentProduct } = useContext(AppContext) ;
  return (
  <div className='bigDescription'>
    {currentProduct.description}
  </div>
  )
}

export default Description;