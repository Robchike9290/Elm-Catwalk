import React, { useContext } from 'react';
import Product from './Product.jsx'
import { AppContext } from '../../../context.js';

const ProductList = ({watcher, setWatcher}) => {

  const { productList } = useContext(AppContext);


  return (<div className='rl-ProductList'>
    {productList?.map((product, key) => (
      <Product  product={product} key={key}/>
    ))}
    </div>
  )
}

export default ProductList;