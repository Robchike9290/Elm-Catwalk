import React from 'react'

const Answer = ({answer}) => {

  return (
    <div>
      <div>A: {answer.body}</div>
      <div>by {answer.answerer_name}</div>
      <div>{answer.date}</div>
      <div>Helpful? Yes {answer.helpfulness}</div>
      <button>Report</button>
    </div>
  )
}

export default Answer