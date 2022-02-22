import React, { useContext, useState } from "react";
import { qListContext } from "/Users/alexmnahas/Elm-Catwalk/client/QA/createContextQlist.js";
import { productIdContext } from "/Users/alexmnahas/Elm-Catwalk/client/QA/createContext.js";
import axios from "axios";
import dateFormat, { masks } from "dateformat";


const Answer = ({ answer }) => {
  const [helpfulness, changehelpfullness] = useState(answer.helpfulness);
  const UpdateQlist = useContext(qListContext);
  const productID = useContext(productIdContext);
  const [Ahelpful, changeAhelpful] = useState(false);
  const [Areport, changeAreport] = useState("report");
  const toggleAhelpful = () => {
    if (!Ahelpful) {
      async function markAasHelpful() {
        const serverResponse = await axios.put(`/answers/${answer.id}`);
        const newQlist = await axios.get(`/questions/${productID}`);
        await UpdateQlist(newQlist.data.results);
        changeAhelpful(true);
        changehelpfullness(helpfulness + 1);
      }
      markAasHelpful();
    }
  };

  const toggleReport = () => {
    if (Areport === "report") {
      changeAreport("reported");
      async function report() {
        const serverResponse = await axios.put(`/answers/${answer.id}/report`);
        const newQlist = await axios.get(`/questions/${productID}`);
        await UpdateQlist(newQlist.data.results);
      }
      report();
    }
  };

  return (
    <div>
      <div>A: {answer.body}</div>
      {answer.photos.map((photo) =>{
        return <img className="thumb" src={photo} width="60" height="auto" ></img>
      })}
      <div className="answer_info">
        <div id="leftA">by {answer.answerer_name},{dateFormat(answer.date, "dddd, mmmm dS, yyyy")} |  Helpful? <u onClick={toggleAhelpful}>Yes</u> ({helpfulness})  | <u onClick={toggleReport}>{Areport}</u></div>
      </div>
    </div>
  );
};

export default Answer;
