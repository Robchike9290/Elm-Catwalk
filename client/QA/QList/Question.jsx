import React from 'react'
import AnswerList from './AnswerList/AnswerList.jsx'
import AnswerPopUp from './AnswerList/AnswerPopUp.jsx'

const Question = ({question}) => {
  const [ApopUp, changeApopUp] = useState(false);
  const togglePopUp = () => {
    changeQpopUp(!ApopUp);
  };

  return (
    <div>
      <div>Q:{question.question_body}</div>
      <div>Helpful? Yes {question.question_helpfulness}</div>
      <button>Add Answer</button>
     <AnswerList answers = {question.answers} />
     {ApopUp && <AnswerPopUp/>}
    </div>
  )
}

export default Question