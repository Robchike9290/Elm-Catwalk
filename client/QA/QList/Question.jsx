import AnswerList from './AnswerList/AnswerList.jsx'
import React, { useEffect, useState, useContext } from "react";
import AnswerPopUp from './AnswerList/AnswerPopUp.jsx'
import { qListContext } from "/Users/alexmnahas/Elm-Catwalk/client/QA/createContextQlist.js";
import { productIdContext } from "/Users/alexmnahas/Elm-Catwalk/client/QA/createContext.js";
import axios from 'axios'
import Highlighter from "react-highlight-words";


const Question = ({question, highlightedWords}) => {

  const UpdateQlist = useContext(qListContext);
  const productID = useContext(productIdContext);
  const [Qhelpful, changeQhelpful] = useState(false)
  const [ApopUp, changeApopUp] = useState(false);
  const togglePopUp = () => {
    changeApopUp(!ApopUp);
  };
  const toggleQhelpful = () =>{// need to make a database for persisent data
    changeQhelpful(true)
    if(!Qhelpful){
    async function markasHelpful() {
      const serverResponse = await axios.put(`/questions/${question.question_id}`);
      const newQlist = await axios.get(`/questions/${productID}`);
      UpdateQlist(newQlist.data.results);
    }
    markasHelpful();
  }
  }

  return (
    <div className="question">
      <div className="question_header">
      <Highlighter
      id="left"
      className="question_body"
    highlightClassName="YourHighlightClass"
    searchWords={[highlightedWords]}
    autoEscape={true}
    textToHighlight={question.question_body}
  />
      <div id="middle" >Helpful? <u onClick ={toggleQhelpful}>Yes</u> ({question.question_helpfulness})  | <u onClick={togglePopUp}>Add Answer</u></div>
      </div>
     <AnswerList answers = {question.answers} />
     {ApopUp && <AnswerPopUp  changeApopUp={changeApopUp} id={question.question_id}/>}
    </div>
  )
}

export default Question