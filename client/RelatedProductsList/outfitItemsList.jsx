import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../context.js';
import OutfitAddItem from './outfitAddItem.jsx';
import OutfitItem from './outfitItem.jsx';
import OutfitItemsCarousel from './outfitItemsCarousel.jsx';

const OutfitItems = () => {

  const context = useContext(AppContext);

  // const [outfitProducts, setOutfitProducts] = useState([]);

  const OutfitItemsCarouselItem = () => {
    return (
      <span className="carouselItem" >
        <OutfitItem
        name={context.currentProduct.name}
        category={context.currentProduct.category}
        image={context.currentStylePhoto}
        price={context.currentProduct.default_price}
        averageRating={context.average}
        salesPrice={context.styleList.results[0].sale_price}
        width='25%'
        >
        </OutfitItem>
      </span>
    );
  };

  const addCurrentProductToOutfit = () => {
    let currentOutfitItems = context.outfitProducts.slice();
    let newOutfitItem = OutfitItemsCarouselItem();
    let isAlreadyInYourOutfit = false;

    for (let i = 0; i < currentOutfitItems.length; i++) {
      let currentOutfitItemName = JSON.stringify(currentOutfitItems[i].props.children.props.name);
      let newOutfitItemName = JSON.stringify(newOutfitItem.props.children.props.name);
      if (currentOutfitItemName === newOutfitItemName) {
        isAlreadyInYourOutfit = true;
      }
    }

    if (!isAlreadyInYourOutfit) {
      currentOutfitItems.push(newOutfitItem);
    }

    context.setOutfitProducts(currentOutfitItems);
  }

  return (
    <div className="productInnerMat">
      <span>
        <button className="addToOutfitButton" onClick={() => {addCurrentProductToOutfit()}}>
          Add the currently<br></br> displyed item<br></br> to your outfit
        </button>
      </span>
      <span>
        <OutfitItemsCarousel>
          {context.outfitProducts.map((product, index) => (
            <span key={index}>{context.outfitProducts[index]}</span>
          ))}
        </OutfitItemsCarousel>
      </span>
    </div>
  )
}

export default OutfitItems;