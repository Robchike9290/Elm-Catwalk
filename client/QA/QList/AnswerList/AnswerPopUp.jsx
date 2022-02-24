import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Token from "../../../../config.js";
import { qListContext } from "../../../../client/QA/createContextQlist.js";
import { productIdContext } from "../../../../client/QA/createContext.js";

const AnswerPopUp = ({ togglePopUp, id, changeAlist }) => {
  const UpdateQlist = useContext(qListContext);
  const productID = useContext(productIdContext);
  // const togglePopUp = () => {
  //   changeApopUp(false);
  // };
  const submitQuestion = () => {
    const email = document.getElementById("UserEmail").value;
    const nickName = document.getElementById("UserNickname").value;
    const answer = document.getElementById("UserQuestion").value;
    if (!answer) {
      alert("Answer Field cannot be blank");
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
          url: `answers`,
          data: {
            body: answer,
            name: nickName,
            email: email,
            photos: [],
            id: id,
          },

        });
        const newAList = await axios.get(`/questions/${id}/answers`)
        console.log('serverresponse', newAList)
        await changeAlist(newAList.data.results)
        await togglePopUp();
      }
      postQuestion();
    }
  };

  return (
    <div className="a_modal" onClick={togglePopUp}>
      <div className="a_modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="a_modal-header">
          <h3>Ask a question about (add product name)</h3>
          <button onClick={togglePopUp}>exit</button>
        </div>
        <div className="a_modal-body">
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
          <div className="a_modal-footer">
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

export default AnswerPopUp;
