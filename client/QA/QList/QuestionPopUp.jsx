import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Token from "../../../config.js";
import { productIdContext } from "../createContext.js";

const QuestionPopUp = ({ togglePopUp }) => {
  const productID = useContext(productIdContext);

  const submitQuestion = () => {
    const email = document.getElementById("UserEmail").value;
    const nickName = document.getElementById("UserNickname").value;
    const question = document.getElementById("UserQuestion").value;
    if (!question) {
      alert("Question Field cannot be blank");
      return;
    } else if (!nickName) {
      alert("Nickname Field cannot be blank");
      return;
    } else if (!email || !email.includes("@")) {
      alert("enter a valild email");
    } else {
      async function postQuestion() {
        const serverResponse = await axios({
          method: "post",
          url: "/questions",
          data: {
            body: question,
            name: nickName,
            email: email,
            product_id: productID,
          },
          headers: { Authorization: Token.TOKEN },
        });
        togglePopUp();
      }
      postQuestion();
    }
  };

  return (
    <div className="modal" onClick={togglePopUp}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal.header">
          <h3>Ask a question about (add product name)</h3>
          <button onClick={togglePopUp}>exit</button>
        </div>
        <div className="modal-body">
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
          <div className="modal-footer">
            <button
              onClick={(e) => {
                submitQuestion();
              }}
            >
              SubmitQuestion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPopUp;
