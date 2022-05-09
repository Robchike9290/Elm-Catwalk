import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';

const ExpandedInfo = () => {
  const { currentProduct, currentStyle } = useContext(AppContext);
  return (
    <div className="rl-expanded-info">
      <span id='rl-expanded-category'> {currentProduct.category} //</span>
      <span id='rl-expanded-name'>{currentProduct.name}</span>
      {(currentStyle.sale_price === null)
      ?
      <div id='rl-price'>${currentStyle.original_price}</div>
      :
      <div id='rl-price'>
        <span id='rl-sale-price'>${currentStyle.sale_price}</span>
        <span> 	&#32;     	&#32;     	&#32;        </span>
        <span id='strikethrough'>${currentStyle.original_price}</span>
      </div>
      }
      <br></br>
      <div>
        <p id='the-word-style'>Style &#62;</p>
        <p id='rl-expanded-style'>{currentStyle.name}</p>
      </div>
      <br></br>
    </div>
  )
}

export default ExpandedInfo;