import React, {useContext} from 'react';
import {AppContext } from '../context.js';
import axios from 'axios';

const ValidationSubmitReview = ((props)=> {
  const { currentProductId, setProduct, rating, recommend, meta, body, name, email, characteristic} = useContext(AppContext)

  const addNewReview = async () => {
    const serverResponse = await
    axios.post('/reviews', {
        rating: rating,
        body: body,
        recommend: recommend,
        reviewer_name: name,
        email: email,
        characteristics: characteristic,
        product_id: currentProductId,
      })
  }

  const validate = (()=> {
    const charObjCount = Object.keys(characteristic);
    if (rating && recommend && (charObjCount.length) && (body.length >= 50) && (name.length >= 1) && (email.includes('@') && email.includes('.com'))) {
      addNewReview()
    } else {
      alert('Submission canceled, please complete all mandatory fields for submission')
    }
  })

  return (
    <div>
      <button className='cc-button' onClick={()=>validate} >Submit</button>
    </div>
  )
})

export default ValidationSubmitReview;