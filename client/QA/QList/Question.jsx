import React from 'react'
import AnswerList from './AnswerList/AnswerList.jsx'

const Question = ({question}) => {

  return (
    <div>
      <div>Q:{question.question_body}</div>
      <div>Helpful? Yes {question.question_helpfulness}</div>
      <button>Add Answer</button>
     <AnswerList answers = {question.answers} />
    </div>
  )
}

export default Question