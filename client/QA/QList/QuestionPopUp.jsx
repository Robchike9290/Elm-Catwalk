/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Token from "../../../config.js";
import { productIdContext } from "../createContext.js";
import { AppContext } from "../../context.js";

const QuestionPopUp = ({ togglePopUp }) => {
	const productID = useContext(productIdContext);
  const productName = useContext(AppContext)
  console.log(productName)

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
		<div className="a_modal" onClick={togglePopUp}>
			<div className="a_modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="a_modal.header">
					<h3>Ask a question about </h3>
					<button onClick={togglePopUp}>exit</button>
				</div>
				{/* <form action="/" method="get"> */}
				<div id="a_modal-body">


						<input
							className="a_input"
							type="text"
							id="UserQuestion"
							placeholder="Ask Your Question Here"
							name="submit question"
						/>
            <h4> For privacy reasons, do not use your full name or email address</h4>


						<input
							className="a_input"
							type="text"
							id="UserNickname"
							placeholder="What's your NickName?"
							name="nickName"
						/>


						<input
              className="a_input"
							type="text"
							id="UserEmail"
							placeholder="What's your Email?"
							name="Email"
						/>

				</div>
				{/* </form> */}
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
	);
};

export default QuestionPopUp;
