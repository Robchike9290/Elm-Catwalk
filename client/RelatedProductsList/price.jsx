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
      <span className="regularPrice">${props.price}</span>
      <span>
        {isOnSale ? <span className="salesPrice">${props.salesPrice}</span> : null}
      </span>
    </div>
  )
}

export default Price;