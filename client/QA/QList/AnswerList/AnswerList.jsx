import React from 'react'
import Answer from './Answer.jsx'

const AnswerList = ({answers}) => {
  const sortAnswers = (answers) => {
    const sortedAnswersArr = [];
    //do sorting here
  }

  return (
    <div>
      <div>
        {Object.values(answers).map((answer) =>{
          return <Answer answer={answer}/>
        })}
      </div>


    </div>
  )
}

export default AnswerList