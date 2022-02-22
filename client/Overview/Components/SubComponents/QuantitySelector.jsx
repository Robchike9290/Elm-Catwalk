/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../context.js';

const QuantitySelector = () => {

  const { currentStyle } = useContext(AppContext);
  const [styleKeyArray, setStyleKeyArray] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSizeQuantity, setSelectedSizeQuantity] = useState(['-']);
  // console.log(selectedSizeQuantity);

  useEffect(() => {
    let temp = [];
    let size = 'XS'
    for (let key in currentStyle.skus) {
      temp.push(currentStyle.skus[key]);
    }
    setStyleKeyArray(temp);
    setSelectedSize(size);

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








  return (

    <>
      <div>
        Size:

        <select onChange={() => setSelectedSize(event.target.value)}>
          {/* set value = sku.quantity, bypass a bunch of code. */}
          <option>Select A Size</option>
          {styleKeyArray.map((sku, key) => (
            <option key={key} value={sku.size} >{sku.size}</option>
          ))}


        </select>

      </div>
      <div> Quantity:
        <select onChange={() => setSelectedQuantity(event.target.value)}>

          {selectedSizeQuantity.map((number, key) => (
            <option key={key} value={number}>{number}</option>
          ))}

        </select>

      </div>

      <div>
        <input className="addToCartButton" type="submit" value="Submit" />
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