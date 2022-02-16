import React, { useContext } from 'react';
import { AppContext } from '../../../context.js';


const Product = (props) => {
  const { currentProductId, setCurrentProductId } = useContext(AppContext);

  // console.log(setCurrentProductId);
  // console.log('products:::::', props);
  // handleProductChange={props.handleProductChange}

  return (<div onClick={() => {setCurrentProductId(props.product.id)}}>
    {props.product.name}
    </div>
  )
}

export default Product;