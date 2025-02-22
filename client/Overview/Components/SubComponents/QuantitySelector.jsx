import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../context.js';

const QuantitySelector = () => {
  const { currentStyle, currentProduct } = useContext(AppContext);
  const [styleKeyArray, setStyleKeyArray] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSizeQuantity, setSelectedSizeQuantity] = useState(['-']);

  useEffect(() => {
    let temp = [];
    for (let key in currentStyle.skus) {
      temp.push(currentStyle.skus[key]);
    }
    setStyleKeyArray(temp);
    setSelectedSize('Select A Size');
  }, [currentStyle])

  useEffect(() => {
    let array = [];
    for (let i = 0; i < styleKeyArray.length; i++) {
      let currentObject = styleKeyArray[i];
      if (selectedSize === currentObject.size) {
        let counter = 1;
        while (counter < currentObject.quantity + 1) {
          if (counter === 16) {
            break;
          }
          array.push(counter);
          counter++;
        }
        break;
      }
    }
    if (array.length === 0) {
      array.push('-');
    }
    setSelectedSizeQuantity(array);
  }, [selectedSize])

  const handleSubmit = () => {
    (selectedQuantity === 1)
    ?
    window.alert(`${selectedQuantity} ${selectedSize} ${currentStyle.name} ${currentProduct.name} has been added to cart `)
    :
    (currentProduct.name[currentProduct.name.length-1] === 's')
    ? window.alert(`${selectedQuantity} ${selectedSize} ${currentStyle.name} ${currentProduct.name} have been added to cart `)
    :
    window.alert(`${selectedQuantity} ${selectedSize} ${currentStyle.name} ${currentProduct.name}s have been added to cart `)
  }







  return (

    <>
      <div >


        <select className='rl-size' onChange={() => setSelectedSize(event.target.value)}>
          {/* set value = sku.quantity, bypass a bunch of code. */}
          <option>Select A Size</option>
          {styleKeyArray.map((sku, key) => (
            <option key={key} value={sku.size} >{sku.size}</option>
          ))}


        </select>

      </div>
      <div >
        <select className='rl-quantity' onChange={() => setSelectedQuantity(event.target.value)} >

          {selectedSizeQuantity.map((number, key) => (
            <option key={key} value={number}>{number}</option>
          ))}

        </select>

      </div>

      <div>
        <input onClick={() => handleSubmit()} className="addToCartButton" type="submit" value="Add To Cart            +" />
      </div>
      </>



  )


}

export default QuantitySelector


{/* <form onSubmit={() => console.log('submitted:', selectedSize, selectedQuantity)}>
</form> */}
// {currentStyle.skus?.map((sku, key) => (
//   <option> {sku.size}</option>
// ))}