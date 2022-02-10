import React from 'react'
import axios from 'axios'
import Token from './config.js'
console.log(Token)


const getData = () =>{
  console.log('test')
axios({
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?page=1&count=100&product_id=5',
  headers : {'Authorization': Token.TOKEN }
})
  .then((data) => {
    if (data) {
     console.log('data', data);
    }
  });
}

const askQuestion = () => {
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?page=1&count=100&product_id=5',
    headers : {'Authorization': Token.TOKEN}
  })
    .then((data) => {
      if (data) {
       console.log('data', data);
      }
    });
}



const QA = () => {
  return (
    <div>
      <form action="/" method="get">
        <input
            onClick={(e) => { return getData()}}
            type="text"
            id="header-search"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
            name="s"
        />
    </form>



    <button>Ask a question</button>
    </div>
  )
}

export default QA

