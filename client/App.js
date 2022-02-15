import React, { useContext, useState } from "react";
import Overview from "./Overview/Overview.jsx";
import RelatedItemsAndComparison from "./dist/components/relatedItemsAndComparison.jsx";

// export const AppContext = React.createContext();

// const AppProvider = (props) => {
//    const [currentProduct, setCurrentProduct] = useState(null)

//    return (
//       <AppContext.Provider >
//          {props.children}
//       </AppContext.Provider>
//    )
// }

// const App = () => (

//       <AppProvider>
//          <Overview/>
//       </AppProvider>

// )
class App extends React.Component {
   render () {
      return (
         <div >
            <Overview/>
            <RelatedItemsAndComparison/>
         </div>
      )
   }
};

export default App;
