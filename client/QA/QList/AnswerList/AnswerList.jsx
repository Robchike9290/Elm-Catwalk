import React, { useState, useEffect } from "react";
import Answer from "./Answer.jsx";
import AnswerPopUp from './AnswerPopUp.jsx'

const AnswerList = ({ answers, id, togglePopUp, ApopUp}) => {
  let count = 0;
  const [sortType, changeSortType] = useState("popular");

  const [Alist, changeAlist] = useState(answers.sort((a, b) => {
    if(a && b){
    return b.helpfulness - a.helpfulness;
    }
  }));
  const [answerListLength, changeanswerListLength] = useState(2);
  const [listABool, changeAListBool] = useState(false);
  const [listAButtonTitle, changeAlistButtonTitle] =
    useState("Show More Answers");


  Alist.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });



  const toggleAList = () => {
    if (!listABool) {
      changeAlistButtonTitle("Show Less");
      changeAListBool(!listABool);
      changeanswerListLength(100);
    } else {
      changeAlistButtonTitle("Show More Answers");
      changeAListBool(!listABool);
      changeanswerListLength(2);
    }
  };

  return (
    <div id="answer_list">
      {ApopUp && <AnswerPopUp  togglePopUp={togglePopUp} id={id} changeAlist={changeAlist} />}
      <div>
    <ul className="list">
        {Alist.length === 0 ? (<div>Be the first to Answer</div>) : (Alist.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  }).map((answer) => {
          if (count < answerListLength) {
            count++;
            return <li key={answer.id} className ="aList"><Answer answer={answer} key={answer.id} changeAlist={changeAlist} id={id}/></li>;
          }
        }))}
        </ul>
      </div>
      {Alist.length > 2 && (
        <div onClick={toggleAList}>{listAButtonTitle}</div>
      )}

    </div>
  );
};

export default AnswerList;
