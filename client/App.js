import React, { useState } from "react";
import Overview from "./Overview/Overview.jsx";
import RelatedItemsAndComparison from "./RelatedProductsList/relatedItemsAndComparison.jsx";
import { AppContext } from "./context.js";

const AppProvider = (props) => {
   const [test, testUpdater] = useState(5);
   const [currentProductId, setCurrentProductId] = useState(37311);
   const [currentProduct, setCurrentProduct] = useState({});
   const [productList, setProductList] = useState([]);
   const [currentStyle, setCurrentStyle] = useState({});
   const [currentStylePhoto, setCurrentStylePhoto] = useState('');
   const [currentStyleThumbnails, setCurrentStyleThumbnails] = useState([]);
   const [styleList, setStyleList] = useState([]);
   const [currentStar, setCurrentStar] = useState('');
   const [user, setUser] = useState({});
   const [relatedProductNumbers, setRelatedProductNumbers] = useState([]);
   const [relatedProductsList, setRelatedProductsList] = useState([]);
   const [relatedProductsStyles, setRelatedProductsStyles] = useState([]);

   return (
      <AppContext.Provider value={{
         test, testUpdater,
         currentProductId, setCurrentProductId,
         currentProduct, setCurrentProduct,
         productList, setProductList,
         currentStyle, setCurrentStyle,
         currentStylePhoto, setCurrentStylePhoto,
         currentStyleThumbnails, setCurrentStyleThumbnails,
         styleList, setStyleList,
         currentStar, setCurrentStar,
         relatedProductNumbers, setRelatedProductNumbers,
         relatedProductsList, setRelatedProductsList,
         relatedProductsStyles, setRelatedProductsStyles
         }}>
         {props.children}
      </AppContext.Provider>
   )
}

function App() {
   return (
      <AppProvider>
         <Overview />
         <RelatedItemsAndComparison/>
      </AppProvider>
   )
}

export default App;
