import React, { useEffect, useState, useContext } from "react";
import Question from "./Question.jsx";
import axios from "axios";
import Token from "../config.js";
import { productIdContext } from "../createContext.js";
import SearchBar from "../SearchBar.jsx";
import { qListContext } from "../createContextQlist.js";

const QuestionList = ({ togglePopUp }) => {
  //const [count, changeCount] = useState(0);
  let count = 0;
  const [highlightedWords, updateHighlightedWords] = useState(null)
  const [qList, UpdateQlist] = useState([]);
  const [baseList, UpdateBaseList] = useState([]);
  const productID = useContext(productIdContext);
  const [listLength, changeListLength] = useState(4);
  const [listBool, changeListBool] = useState(false);
  const [listButtonTitle, changelistButtonTitle] = useState(
    "Show More Questions"
  );
  console.log('at the top', qList);



  const sortQuestions = (answers) => {
    qList.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });

  };
  sortQuestions();
  useEffect(() => {
    async function fetchQList() {
      const questionListData = await axios.get(`/questions/${productID}`);
      console.log("quetsionListData", questionListData);
      UpdateQlist(questionListData.data.results);
      UpdateBaseList(questionListData.data.results);
    }
    fetchQList();
  }, [productID]);

  const toggleList = () => {
    if (!listBool) {
      changelistButtonTitle("Show Less");
      changeListBool(!listBool);
      changeListLength(qList.length);
    } else {
      changelistButtonTitle("Show More Questions");
      changeListBool(!listBool);
      changeListLength(2);
    }
  };

  return (
    <div>
      <qListContext.Provider value={UpdateQlist}>
      {baseList.length > 0 && <SearchBar UpdateQlist={UpdateQlist} qList={qList} baseList={baseList} updateHighlightedWords={updateHighlightedWords} />}
    <ul className="list" id="scrollable">
      {qList.map((question) => {
        if (count < listLength) {
          count++;
          return <li  className ="qList" key = {question.question_id}  > <Question question={question} highlightedWords={highlightedWords} /></li>;
        }
      })}
      </ul>
      <button className="button" onClick={togglePopUp}>Ask a question</button>
      {qList.length > 2 && (
        <button className="button" onClick={toggleList} id="listButton">
          {" "}
          {listButtonTitle}
        </button>
      )}
      </qListContext.Provider>
    </div>
  );
};
export default QuestionList;
