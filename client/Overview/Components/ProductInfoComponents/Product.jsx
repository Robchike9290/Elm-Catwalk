import React from 'react';

const Product = (props) => {
  // console.log('products:::::', props);
  return (<div onClick={() => {props.handleProductChange(props.product)}}>
    {props.product.name}
    </div>
  )
}

export default Product;