import React from 'react'
import axios from 'axios'
import Token from './config.js'
import SearchBar from "./SearchBar.jsx";
import QuestionList from './QList/QuestionList.jsx'



const askQuestion = () => {

}



const QA = () => {
  return (
    <div>
      <SearchBar />
      <QuestionList productID ={37311}/>
    </div>
  )
}

export default QA

