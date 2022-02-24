import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';



const ExpandedInfo = () =>  {

  const { currentProduct, currentStyle } = useContext(AppContext);


  return (

    <div>
      {currentProduct.name}
      <br></br>
      {currentProduct.default_price}
      <br></br>
      Style > {currentStyle.name}
    </div>
  )


}

export default ExpandedInfo;