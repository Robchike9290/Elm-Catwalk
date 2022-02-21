import React, { useState, useEffect } from "react";
import Answer from "./Answer.jsx";

const AnswerList = ({ answers }) => {
  let count = 0;
  const [sortType, changeSortType] = useState("popular");
  const [Alist, changeAlist] = useState(Object.values(answers).sort((a, b) => {
    return b.helpfulness - a.helpfulness;
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
    <div>
      <div>
    <ul className="list">
        {Alist.length === 0 ? (<div>Be the first to Answer</div>) : (Alist.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  }).map((answer) => {
          if (count < answerListLength) {
            count++;
            console.log(answer.id)
            return <li key={answer.id}><Answer answer={answer} /></li>;
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
