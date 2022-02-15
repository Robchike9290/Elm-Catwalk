import React from 'react';
import Product from './Product.jsx'
const ProductList = (props) => {
  // console.log('producltist', props);
  return (<div className='ProductList'>
    {props.productList.map((product, key) => (
      <Product handleProductChange={props.handleProductChange} product={product} key={key}/>
    ))}
    </div>
  )
}

export default ProductList;