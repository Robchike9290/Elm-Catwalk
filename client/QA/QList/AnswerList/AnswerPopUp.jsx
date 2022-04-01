import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Token from "../../../../config.js";
import { qListContext } from "../../../../client/QA/createContextQlist.js";
import { productIdContext } from "../../../../client/QA/createContext.js";

const AnswerPopUp = ({ togglePopUp, id, changeAlist }) => {
  const UpdateQlist = useContext(qListContext);
  const productID = useContext(productIdContext);
	const [photos, UpdatePhotos] = useState([])
	const [counter, updateCounter] = useState(0)

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
            photos: photos,
            id: id,
          },
        });
        const newAList = await axios.get(`/questions/${id}/answers`)

        await togglePopUp();
        await changeAlist(newAList.data.results)
      }
      postQuestion();
    }
  };

	const addPhoto = () =>{
		console.log(photos)
		if(photos.length < 4){
		const url = document.getElementById("url").value;
		photos.push(url)

		document.getElementById("url").value = ''
		console.log('photos', photos)
		updateCounter(counter+1)
		}else{
			alert('reach maxium photos')
		}
	}

  return (
		<div className="a_modal" onClick={togglePopUp}>
			<div className="a_modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="a_modal.header">
					<h3 id="modal_title">
						Provide an Answer
					</h3>
				</div>
				<div id="a_modal-body">
					<input
						className="a_input"
						type="text"
						id="UserQuestion"
						placeholder="Provide Your Answer Here"
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
					<div className="url_container">
					<input
						className="a_input"
						type="text"
						id="url"
						placeholder="enter url here"
						name="url"
					/>
					<button onClick={addPhoto}>submit url</button>

					</div>
					<h4 id="label_text">
						{" "}
						you can submit up to 4, {4-counter} remaining
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

export default AnswerPopUp;
