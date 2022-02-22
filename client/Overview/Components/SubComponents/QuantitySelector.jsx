/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../context.js';

const QuantitySelector = () => {

  const { currentStyle, currentProduct } = useContext(AppContext);
  const [styleKeyArray, setStyleKeyArray] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSizeQuantity, setSelectedSizeQuantity] = useState(['-']);
  // console.log(selectedSizeQuantity);

  useEffect(() => {
    let temp = [];
    // let size = 'XS'
    for (let key in currentStyle.skus) {
      temp.push(currentStyle.skus[key]);
    }
    setStyleKeyArray(temp);
    // setSelectedSize(size);

    // return () => {
    //   styleKeyArray = [];
    // }

  }, [currentStyle])

  useEffect(() => {

    // console.log(selectedSize);
    let array = [];
    for (let i = 0; i < styleKeyArray.length; i++) {
      // console.log(styleKeyArray[i]);
      let currentObject = styleKeyArray[i];
      // console.log(currentObject.size);
      if (selectedSize === currentObject.size) {
        // console.log(selectedSize, currentObject.size);
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
    ? window.alert(`${selectedQuantity} ${selectedSize} ${currentStyle.name} ${currentProduct.name} has been added to cart `)
    : (currentProduct.name[currentProduct.name.length-1] === 's') ? window.alert(`${selectedQuantity} ${selectedSize} ${currentStyle.name} ${currentProduct.name} have been added to cart `) : window.alert(`${selectedQuantity} ${selectedSize} ${currentStyle.name} ${currentProduct.name}s have been added to cart `)


  }







  return (

    <>
      <div className='rl-size'>
        Size:

        <select onChange={() => setSelectedSize(event.target.value)}>
          {/* set value = sku.quantity, bypass a bunch of code. */}
          <option>Select A Size</option>
          {styleKeyArray.map((sku, key) => (
            <option key={key} value={sku.size} >{sku.size}</option>
          ))}


        </select>

      </div>
      <div className='rl-quantity'> Quantity:
        <select onChange={() => setSelectedQuantity(event.target.value)}>

          {selectedSizeQuantity.map((number, key) => (
            <option key={key} value={number}>{number}</option>
          ))}

        </select>

      </div>

      <div>
        <input onClick={() => handleSubmit()} className="addToCartButton" type="submit" value="Add To Cart" />
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