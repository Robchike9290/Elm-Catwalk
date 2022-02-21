<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useContext, useState } from "react";
import Token from '../config.js'
import RatingsReviewsSection from './Ratings&Reviews/RatingsReviewsSection.jsx'
import axios from 'axios';
>>>>>>> c6cc1e04ace9a5c04fe4560603ce8c0dda8a3730
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
   const [user, setUser] = useState({});
<<<<<<< HEAD
   const [relatedProductsInfo, setRelatedProductsInfo] = useState([]);
=======

   // ! Cheryl
   const [recommend, setRecommend] = useState(false);
   const[meta, setMeta] = useState ([]);
   const[product, setProduct] = useState({});
   const [rating, setRating] = useState(0);
   const [summary, setSummary] = useState('');
   const [body, setBody] = useState('');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [characteristic, setCharacteristic] = useState({});
   const [selectedratings, setSelectedRatings] = useState([])
   const [productresults, setProductResults] = useState([])
   const [average, setAverage] = useState(0);
   // ! Cheryl
>>>>>>> c6cc1e04ace9a5c04fe4560603ce8c0dda8a3730

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
<<<<<<< HEAD
         currentStar, setCurrentStar,
         relatedProductsInfo, setRelatedProductsInfo,
=======

         // ! Cheryl
         recommend, setRecommend,
         meta, setMeta,
         product, setProduct,
         rating, setRating,
         summary, setSummary,
         body, setBody,
         name, setName,
         email, setEmail,
         characteristic, setCharacteristic,
         selectedratings, setSelectedRatings,
         productresults, setProductResults,
         average, setAverage,
         // ! Cheryl
>>>>>>> c6cc1e04ace9a5c04fe4560603ce8c0dda8a3730
         }}>
         {props.children}
      </AppContext.Provider>
   )
}

function App() {
   return (
      <AppProvider>
         <Overview />
<<<<<<< HEAD
         <RelatedItemsAndComparison/>
=======
         <RatingsReviewsSection/>
>>>>>>> c6cc1e04ace9a5c04fe4560603ce8c0dda8a3730
      </AppProvider>
   )
}

export default App;
