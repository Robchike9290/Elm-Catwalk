import React, {useContext} from 'react';
import {AppContext } from '../context.js';

const ValidationSubmitReview = (()=> {
  const {currentProduct, rating, recommend, meta, body, name, email, characteristic} = useContext(AppContext)

  const addNewReview = (()=> {
    axios.post()
  })

  const validate = ((e)=> {
    e.preventDefault()
    e.stopPropagation()
    const charObjCount = Object.keys(characteristic);
    if (rating && recommend && (charObjCount.length) && (body.length >= 50) && (name.length >= 1) && (email.includes('@') && email.includes('.com'))) {
      console.log('true')
      return true
    }
    console.log('false')
    return 'Please complete all mandatory fields for submission'
  })

  return (
    <div>
      <button onClick={(e)=>validate(e)} >Submit</button>
    </div>
  )
})

export default ValidationSubmitReview;