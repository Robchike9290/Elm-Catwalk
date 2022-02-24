import React, { useContext } from 'react';
import { AppContext } from '../context.js';


const OutfitItemXButton = (props) => {

  const context = useContext(AppContext);

  const handleClick = () => {
    let currentOutfitProducts = context.outfitProducts.slice();
    let removalIndex = 0;
    for (let i = 0; i < currentOutfitProducts.length; i++) {
      let iterationProductName = JSON.stringify(currentOutfitProducts[i].props.children.props.name);
      let selectedProductName = JSON.stringify(props.name);
      if (iterationProductName === selectedProductName) {
        removalIndex = i;
      }
    }
    currentOutfitProducts.splice(removalIndex, 1);
    context.setOutfitProducts(currentOutfitProducts);
  }

  return (
    <div>
      <button onClick={() => handleClick()}>❌</button>
    </div>
  )
}

export default OutfitItemXButton;