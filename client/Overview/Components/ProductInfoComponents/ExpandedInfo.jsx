import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';



const ExpandedInfo = () => {

  const { currentProduct, currentStyle } = useContext(AppContext);



  return (

    <div className="rl-expanded-info">
      {currentProduct.name}
      <br></br>
      {(currentStyle.sale_price === null) ? <div>${currentStyle.original_price}</div> :
        <div >
          <span id='rl-sale-price'>${currentStyle.sale_price}</span>
          <span> 	&#32;     	&#32;     	&#32;        </span>
          <span id='strikethrough'>${currentStyle.original_price}</span>
        </div>}
      <br></br>
      Category || {currentProduct.category}
      <br></br>
      Style &#62; {currentStyle.name}
    </div>
  )


}

export default ExpandedInfo;