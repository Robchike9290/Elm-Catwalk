import React, { useContext } from 'react';
import { AppContext } from '../context.js';


const OutfitItemXButton = (props) => {

  const context = useContext(AppContext);

  const handleClick = () => {
    //console.log('you have clicked the X button!');
    //console.log('this is the array of outfit items right now:', context.outfitProducts);
    //console.log('this is the product you have clicked the X button in:', props.name);
    let currentOutfitProducts = context.outfitProducts.slice();
    let removalIndex = 0;
    for (let i = 0; i < currentOutfitProducts.length; i++) {
      let iterationProductName = JSON.stringify(currentOutfitProducts[i].props.children.props.name);
      let selectedProductName = JSON.stringify(props.name);
      //console.log('this is the name of the current product in the array iteration:', context.outfitProducts[i].props.children.props.name);
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