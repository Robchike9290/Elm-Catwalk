import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Token from "../../../config.js";
import { productIdContext } from "../createContext.js";
import { AppContext } from "../../context.js";

const QuestionPopUp = ({ togglePopUp }) => {
	const productID = useContext(productIdContext);
	const productName = useContext(AppContext);

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
					<h3 id="modal_title">
						Ask a question about the {productName.currentProduct.name}{" "}
					</h3>
				</div>
				<div id="a_modal-body">
					<input
						className="a_input"
						type="text"
						id="UserQuestion"
						placeholder="Ask Your Question Here"
						name="submit question"
					/>
					<h4 id="label_text"> Maxium 1000 characters</h4>
					<input
						className="a_input"
						type="text"
						id="UserNickname"
						placeholder="What's your NickName?"
						name="nickName"
					/>
					<h4 id="label_text">
						{" "}
						For privacy reasons, do not use your full name or email address
					</h4>
					<input
						className="a_input"
						type="text"
						id="UserEmail"
						placeholder="What's your Email?"
						name="Email"
					/>
					<h4 id="label_text">
						{" "}
						For authentication reasons, you will not be emailed
					</h4>
				</div>
				<div className="a_modal-footer">
					<button
						className="a_button"
						onClick={(e) => {
							submitQuestion();
						}}
					>
						SubmitQuestion
					</button>
					<button className="a_button" onClick={togglePopUp}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuestionPopUp;