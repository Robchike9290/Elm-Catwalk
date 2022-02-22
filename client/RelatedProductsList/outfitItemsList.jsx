import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../context.js';
import OutfitAddItem from './outfitAddItem.jsx';
import OutfitItem from './outfitItem.jsx';
import OutfitItemsCarousel from './outfitItemsCarousel.jsx';

const OutfitItems = () => {

  const context = useContext(AppContext);

  const [outfitProducts, setOutfitProducts] = useState([]);

  const OutfitItemsCarouselItem = () => {
    console.log('current product in context:', context.currentProduct);
    // style={{ width: 25% }}
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
        >TEST OUTFIT ITEM</OutfitItem>
      </span>
    );

  };

  const addCurrentProductToOutfit = () => {
    console.log("firing the add outfit item button fom the outfitItemsList component!");
    let currentOutfitItems = outfitProducts.slice();
    let newOutfitItem = OutfitItemsCarouselItem();

    currentOutfitItems.push(newOutfitItem);

    setOutfitProducts(currentOutfitItems);
  }

  // const createNewOutfitItem = () => {
  //   return (
  //     <OutfitItem></OutfitItem>
  //   )
  // }

  return (
    <div className="productInnerMat">
      <span>
        <button className="addToOutfitButton" onClick={() => {addCurrentProductToOutfit()}}>
          Add the currently<br></br> displyed item<br></br> to your outfit
        </button>
      </span>
      <span>
        <OutfitItemsCarousel>
          <span>{outfitProducts[0]}</span>
          <span>{outfitProducts[1]}</span>
          <span>{outfitProducts[2]}</span>
        </OutfitItemsCarousel>
      </span>
    </div>
  )
}

export default OutfitItems;