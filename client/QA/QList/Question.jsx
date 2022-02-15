import AnswerList from './AnswerList/AnswerList.jsx'
import React, { useEffect, useState } from "react";
import AnswerPopUp from './AnswerList/AnswerPopUp.jsx'

const Question = ({question}) => {
  const [ApopUp, changeApopUp] = useState(false);
  const togglePopUp = () => {
    changeApopUp(!ApopUp);
  };

  return (
    <div>
      <div>Q:{question.question_body}</div>
      <div>Helpful? Yes {question.question_helpfulness}</div>
      <button onClick={togglePopUp}>Add Answer</button>
     <AnswerList answers = {question.answers} />
     {ApopUp && <AnswerPopUp  changeApopUp={changeApopUp} id={question.question_id}/>}
    </div>
  )
}

export default Question