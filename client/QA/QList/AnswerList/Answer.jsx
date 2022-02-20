import React, {useContext, useState} from 'react'
import { qListContext } from "/Users/alexmnahas/Elm-Catwalk/client/QA/createContextQlist.js";
import { productIdContext } from "/Users/alexmnahas/Elm-Catwalk/client/QA/createContext.js";
import axios from 'axios'

const Answer = ({answer}) => {
  const [helpfulness, changehelpfullness] = useState(answer.helpfulness)
  const UpdateQlist = useContext(qListContext);
  const productID = useContext(productIdContext);
  const [Ahelpful, changeAhelpful] = useState(false)
  const [Areport, changeAreport] = useState('report')
  const toggleAhelpful = () =>{
    if(!Ahelpful){
    async function markAasHelpful() {
      const serverResponse = await axios.put(`/answers/${answer.id}`);
      const newQlist = await axios.get(`/questions/${productID}`);
      await UpdateQlist(newQlist.data.results);
      changeAhelpful(true)
      //await forceReRender(!Render)
      changehelpfullness(helpfulness+ 1)
    }
    markAasHelpful();

  }
  }

  const toggleReport = () => {
    if(Areport === 'report'){
    async function report() {
      const serverResponse = await axios.put(`/answers/${answer.id}/report`);
      const newQlist = await axios.get(`/questions/${productID}`);
      await UpdateQlist(newQlist.data.results);
      changeAreport('reported')
      //await forceReRender(!Render)

    }
    report();

  }

  }

  return (
    <div>
      <div>A: {answer.body}</div>
      <div>by {answer.answerer_name}</div>
      <div>{answer.date}</div>
      <div onClick={toggleAhelpful}>Helpful? Yes {helpfulness}</div>
      <button>Report</button>
    </div>
  )
}

export default Answer