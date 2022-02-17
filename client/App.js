import React, { useContext, useState } from "react";
import axios from 'axios';
import Overview from "./Overview/Overview.jsx";
import Test from "./Overview/test.jsx";
import { AppContext } from "./context.js";


// Should give related products
// /products/:product_id/related





// [productID, updateProductId] = useState()
// [average, averageUpdate] = useState()


const AppProvider = (props) => {
   // const [currentProduct, setCurrentProduct] = useState(null);
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
         currentStar, setCurrentStar
         }}>
         {props.children}
      </AppContext.Provider>
   )
}

function App() {


   return (
      <AppProvider>

         <Overview />
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


// class App extends React.Component {
//    render () {

//       return (

//          <div ><Overview/></div>


//       )
//    }
// };

export default App;
