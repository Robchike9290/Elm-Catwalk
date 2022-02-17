import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';


const Product = (props) => {
  const { currentProductId, setCurrentProductId, setCurrentProduct } = useContext(AppContext);

  const handleClick = () => {
    setCurrentProductId(props.product.id);
    setCurrentProduct(props.product);
  }

  return (<div onClick={() => handleClick()}>
    {props.product.name}
    </div>
  )
}

export default Product;