/* eslint-disable no-unused-vars */

import QA from "./QA/index.js"
import React, { useContext, useState } from "react";
import Token from '../config.js'
import RatingsReviewsSection from './Ratings&Reviews/RatingsReviewsSection.jsx'
import axios from 'axios';
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
   const [activeIndex, setActiveIndex] = useState(0);
   const [currentProductFeatures, setCurrentProductFeatures] = useState({})
   const [relatedProductsInfo, setRelatedProductsInfo] = useState([]);
   const [bigGallery, setBigGallery] = useState(false);

   // ! Cheryl Hello
   const [outfitProducts, setOutfitProducts] = useState([]);
   const [relatedProductsActiveIndex, setRelatedProductsActiveIndex] = useState(0);
   const [recommend, setRecommend] = useState(false);
   const[meta, setMeta] = useState ([]);
   const[product, setProduct] = useState({});
   const [rating, setRating] = useState(0);
   const [summary, setSummary] = useState('');
   const [body, setBody] = useState('');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [characteristic, setCharacteristic] = useState({});
   const [productresults, setProductResults] = useState([])
   const [average, setAverage] = useState(0);

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
         activeIndex, setActiveIndex,
         currentProductFeatures, setCurrentProductFeatures,
         user, setUser,
         relatedProductsInfo, setRelatedProductsInfo,
         bigGallery, setBigGallery,

         // ! Cheryl
         outfitProducts, setOutfitProducts,
         relatedProductsActiveIndex, setRelatedProductsActiveIndex,
         recommend, setRecommend,
         meta, setMeta,
         product, setProduct,
         rating, setRating,
         summary, setSummary,
         body, setBody,
         name, setName,
         email, setEmail,
         characteristic, setCharacteristic,
         productresults, setProductResults,
         average, setAverage,
         }}>
         {props.children}
      </AppContext.Provider>
   )
}

function App() {
   document.documentElement.setAttribute('data-theme', 'light');
   return (
      <AppProvider>
         <Overview />
         <RelatedItemsAndComparison/>
         <QA/>
         <RatingsReviewsSection/>
      </AppProvider>
   )
}

// function App() {

//    const [test, testUpdater] = useState(5);
//    // const [ users, setUsers ] = useState([]);

//    // return (
// 	// 	<div >
// 	// 		<AppContext.Provider value={{ users, dispatchUserEvent }}>
// 	// 			<AddUser />
// 	// 			<UserList />
// 	// 		</AppContext.Provider>
// 	// 	</div>
// 	// );


//    return (
//       <div>
//          <AppContext.Provider value={{test, testUpdater}}>
//          {/* <Overview/> */}
//          <Test />
//          {/* // 3 other widgets here */}
//       </AppContext.Provider>
//       </div>


//    )
// }

// const ProfileContext = React.createContext();
// const ProfileProvider = (props) => {
//    const userInformation = {
//      company: 'Progress',
//      companyImage: 'https://svgshare.com/i/9ir.svg',
//      url: 'https://www.telerik.com/kendo-react-ui/',
//      userImage: 'https://i.imgur.com/Y1XRKLf.png',
//      userName: 'Kendoken',
//      fullName: 'Kendoken No Michi',
//      team: 'KendoReact',
//      toggleTeam: (property, value) => {
//        setUserInfo(
//          {...userInfo,[property]: value}
//        );
//      }
//    }
//    const [userInfo, setUserInfo] = useState(userInformation);
//    return (
//      <ProfileContext.Provider value={userInfo}>
//        {props.children}
//      </ProfileContext.Provider>
//    )
//  }

//  const Profile = () => {
//    const context = useContext(ProfileContext);
//    return (
//      <div className="profile">
//        <img src={context.companyImage} />
//        <User />
//      </div>
//    )
//  }


// )
// class App extends React.Component {
//    render () {

//       return (
// class App extends React.Component {
//    render () {

//       return (

//          <div ><Overview/></div>

//          <div ><Overview/></div>


//       )
//    }
// };

export default App;


