import React, { useEffect, useState } from "react";
import axios from "axios";
import Token from "./config.js";
import SearchBar from "./SearchBar.jsx";
import QuestionList from "./QList/QuestionList.jsx";
import QuestionPopUp from "./QList/QuestionPopUp.jsx";
import {productIdContext} from './createContext.js'

const QA = () => {
  const [QpopUp, changeQpopUp] = useState(false);
  const [listLength, changeListLength] = useState(2);
  const togglePopUp = () => {
    changeQpopUp(!QpopUp);
    changeListLength(2)
  };
  console.log(listLength)
  return (
    <div>
      <productIdContext.Provider value={37311}>
      <SearchBar />
      {QpopUp ? (
        <QuestionPopUp  changeQpopUp={changeQpopUp}   />
      ) : (
        <div>
        <QuestionList  listLength = {listLength} />

        <button onClick={togglePopUp}>Ask a question</button>
        </div>
      )}
      </productIdContext.Provider>

    </div>
  );
};

export default QA;
