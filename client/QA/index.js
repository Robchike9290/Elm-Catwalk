import React, { useEffect, useState } from "react";
import axios from "axios";
import Token from "./config.js";
import SearchBar from "./SearchBar.jsx";
import QuestionList from "./QList/QuestionList.jsx";
import QuestionPopUp from "./QList/QuestionPopUp.jsx";

const QA = () => {
  const [QpopUp, changeQpopUp] = useState(false);
  const togglePopUp = () => {
    changeQpopUp(!QpopUp);
  };

  return (
    <div>
      <SearchBar />
      {QpopUp ? (
        <QuestionPopUp productID={37311} changeQpopUp={changeQpopUp}  />
      ) : (
        <div>
        <QuestionList productID={37311} />

        <button onClick={togglePopUp}>Ask a question</button>
        </div>
      )}

    </div>
  );
};

export default QA;
