import React, { useEffect, useState, useContext } from "react";
import axios from 'axios'
import Token from "../config.js";
import {productIdContext} from '../createContext.js'

const QuestionPopUp = ({ changeQpopUp }) => {
  const productID = useContext(productIdContext)
  console.log(changeQpopUp)
  const togglePopUp = () => {
    changeQpopUp(false);
  };
  const submitQuestion = () =>{
    const email = document.getElementById('UserEmail').value
    const nickName = document.getElementById('UserNickname').value
    const question = document.getElementById('UserQuestion').value
    if(!question){
      alert('Question Field cannot be blank');
      return
    }else if (!nickName){
      alert('Nickname Field cannot be blank');
      return
    }else if(!email || !email.includes("@")){
      alert('enter a valild email');
    }else{
      async function postQuestion() {
        const serverResponse = await axios({
          method: "post",
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`,
          data: {
            "body": question,
            "name": nickName,
            "email": email,
            "product_id": productID
          },
          headers: { Authorization: Token.TOKEN },
        });
        console.log(serverResponse)
        togglePopUp();
    }
    postQuestion();


  }
}

  return (
    <div>
      <form action="/" method="get">
        <input
          type="text"
          id="UserQuestion"
          placeholder="Ask Your Question Here"
          name="submit question"
        />
        <input
          type="text"
          id="UserNickname"
          placeholder="What's your NickName?"
          name="nickName"
        />
        <input
          type="text"
          id="UserEmail"
          placeholder="What's your Email?"
          name="Email"
        />
      </form>
      <button
        onClick={(e) => {
          submitQuestion();
        }}
      >
        SubmitQuestion
      </button>
    </div>
  );
};

export default QuestionPopUp;
