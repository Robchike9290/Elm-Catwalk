import React, { useState, useEffect } from 'react';

const Price = (props) => {

  const [isOnSale, setIsOnSale] = useState(false);

  const putOnSale = () => {
    if (props.salesPrice) {
      setIsOnSale(true);
    }
  }

  useEffect(() => {
    putOnSale();
  })

  return (
    <div>
      <span>
        {isOnSale ?
        <span className="regularPriceOnSale">Regular Price: ${props.price}  </span> :
        <span className="regularPriceOffSale">Price: ${props.price}</span>}
      </span>
      <span>
        {isOnSale ? <span className="salesPrice">Sales Price: ${props.salesPrice}</span> : null}
      </span>
    </div>
  )
}

export default Price;