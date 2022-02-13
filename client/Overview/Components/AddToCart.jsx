import React from 'react';
import AddToCartButton from './SubComponents/AddToCartButton.jsx';
import QuantitySelector from './SubComponents/QuantitySelector.jsx';

class AddToCart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

      cart: []
    }
  }

  render () {
    return (
      <div>
        <div className="cart"><AddToCartButton/></div>

        <div className='quantitySelector'>
          <QuantitySelector/>
        </div>



      </div>
    )
  }

}


export default AddToCart;