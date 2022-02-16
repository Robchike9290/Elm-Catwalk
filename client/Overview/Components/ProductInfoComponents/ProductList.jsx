import React, { useContext } from 'react';
import Product from './Product.jsx'
import { AppContext } from '../../../context.js';

const ProductList = ({watcher, setWatcher}) => {
  // console.log('producltist', props);

  const { productList } = useContext(AppContext);

  // console.log('in product List', productList);

  // handleProductChange={this.handleProductChange} productList={this.state.productList}

  return (<div className='ProductList'>
    {productList?.map((product, key) => (
      <Product  product={product} key={key}/>
    ))}
    </div>
  )
}

export default ProductList;