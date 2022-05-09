import React, { useContext, useState } from 'react';
import { AppContext } from '../../context.js';
import AddToCartButton from './SubComponents/AddToCartButton.jsx';
import QuantitySelector from './SubComponents/QuantitySelector.jsx';

const AddToCart= () =>  {
  const [cart, setCart] = useState({});
  const { currentStyle } = useContext(AppContext);

  return (
    <div className="AddToCart">
      <div className="cart">
        <AddToCartButton/>
      </div>
      <div className='quantitySelector'>
        <QuantitySelector/>
      </div>
    </div>
  )
}

export default AddToCart;