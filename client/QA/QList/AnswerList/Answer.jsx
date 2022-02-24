import React, { useContext, useState } from "react";
import { qListContext } from "../../../../client/QA/createContextQlist.js";
import { productIdContext } from "../../../../client/QA/createContext.js";
import axios from "axios";
import dateFormat, { masks } from "dateformat";
import PicturePopUp from "./PicturePopUp.jsx";


const Answer = ({ answer, changeAlist, id }) => {

  const [togglePicture, changeTogglePicture] = useState(false)
  const [currentPicture, changeCurrentPicture] = useState(null)
  const [helpfulness, changehelpfullness] = useState(answer.helpfulness);
  const UpdateQlist = useContext(qListContext);
  const productID = useContext(productIdContext);
  const [Ahelpful, changeAhelpful] = useState(false);
  const [Areport, changeAreport] = useState("report");
  const toggleAhelpful = () => {
    if (!Ahelpful) {
      async function markAasHelpful() {
        const serverResponse = await axios.put(`/answers/${answer.id}`);
        // changeAhelpful(true);
        // changehelpfullness(helpfulness + 1);
        const newAList = await axios.get(`/questions/${id}/answers`)
        await changeAlist(newAList.data.results)

      }
      markAasHelpful();

    }
  };

  const toggleReport = () => {
    if (Areport === "report") {
      changeAreport("reported");
      async function report() {
        const serverResponse = await axios.put(`/answers/${answer.id}/report`);
      }
      report();
    }
  };

  const expandThumbnail = (e) =>{
    changeCurrentPicture(e.target.src)
    changeTogglePicture(!togglePicture)
  }


  return (
    <div className="question">
      <div className="quetion_body">{answer.body}</div>
      {answer.photos.map((photo, key) =>{
        return <a ><img key={key}  className="thumb" src={photo} onClick={e => {return expandThumbnail(e)}} ></img></a>
      })}
      <div className="answer_info">
        <div id="leftA">by {answer.answerer_name},{dateFormat(answer.date, "dddd, mmmm dS, yyyy")} |  Helpful? <u onClick={toggleAhelpful}>Yes</u> ({helpfulness})  | <u onClick={toggleReport}>{Areport}</u></div>
      </div>
      {togglePicture && <PicturePopUp currentPicture={currentPicture} changeTogglePicture={changeTogglePicture}/>}
    </div>
  );
};

export default Answer;
