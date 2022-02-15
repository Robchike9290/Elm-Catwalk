<<<<<<< HEAD
import React from "react";
import RelatedItemsAndComparison from "./dist/components/relatedItemsAndComparison.jsx";

const App = () => {
	return (
		<div>
			<RelatedItemsAndComparison />
		</div>
	);
=======
import React, { useContext, useState } from "react";
import Overview from "./Overview/Overview.jsx";



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

         <div ><Overview/></div>


      )
   }
>>>>>>> 9f5660a18d62e32f122884bd974e1b2db68033f7
};

export default App;
