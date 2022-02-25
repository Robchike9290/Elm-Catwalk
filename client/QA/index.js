import React, { useEffect, useState , useContext} from "react";
import axios from "axios";

import QuestionList from "./QList/QuestionList.jsx";
import QuestionPopUp from "./QList/QuestionPopUp.jsx";
import { productIdContext } from "./createContext.js";
import { AppContext } from "../context.js";


const QA = () => {

  const productID = useContext(AppContext)
  const [QpopUp, changeQpopUp] = useState(false);
  const togglePopUp = () => {
    changeQpopUp(!QpopUp);
  };

  return (
    <div id="parent">
      <h1 id="title"> QUESTIONS & ANSWERS</h1>
      <productIdContext.Provider value={productID.currentProduct.id}>
        {QpopUp && (
          <QuestionPopUp togglePopUp={togglePopUp} />
        ) }
          <div>
            <QuestionList togglePopUp={togglePopUp} QpopUp={QpopUp} />
          </div>

      </productIdContext.Provider>
    </div>
  );
};

export default QA;

