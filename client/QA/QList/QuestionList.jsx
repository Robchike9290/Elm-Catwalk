import React, { useEffect, useState } from "react";
import Question from "./Question.jsx";
import axios from "axios";
import Token from "../config.js";

const QuestionList = ({ productID }) => {
  const [qList, UpdateQlist] = useState([]);
  useEffect(() => {
    async function fetchQList() {
      const questionListData = await axios({
        method: "get",
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?page=1&count=100&product_id=${productID}`,
        headers: { Authorization: Token.TOKEN },
      });
      UpdateQlist(questionListData.data.results);
    }
    fetchQList();
  }, [productID]);

  return (
    <div>
      <h3>QuestionList</h3>
      {qList.map((question) => {
        return <Question question={question} />;
      })}
    </div>
  );
};
export default QuestionList;
