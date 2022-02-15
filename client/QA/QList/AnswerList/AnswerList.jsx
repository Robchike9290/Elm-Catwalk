import React, { useState } from "react";
import Answer from "./Answer.jsx";

const AnswerList = ({ answers }) => {
  let count = 0;
  const [answerListLength, changeanswerListLength] = useState(2);
  const sortAnswers = (answers) => {
    const sortedAnswersArr = [];
    //do sorting here
  };

  return (
    <div>
      <div>
        {Object.values(answers).map((answer) => {
          if (count < answerListLength) {
            count++;
            return <Answer answer={answer} />;
          }
        })}
      </div>
      <button></button>
    </div>
  );
};

export default AnswerList;
