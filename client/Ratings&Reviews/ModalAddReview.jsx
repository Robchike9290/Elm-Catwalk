import React, { useState, useContext} from 'react';
import StarForModal from './StarForModal.jsx'
import CharacteristicsAdd from './CharacteristicsAdd.jsx'
import ValidationSubmitReview from './ValidationSubmitReview.jsx'
import PhotoUpload from './PhotoUpload.jsx'
import filestack from 'filestack-js';
import {AppContext } from '../context.js';


const ModalAddReview = ((props) => {
  const {currentProduct, recommend, setRecommend, meta, summary, setSummary, body, setBody, name, setName, email, setEmail} = useContext(AppContext)
  const [characterCount, setCharacterCount] = useState(0)
  const [characterCountdown, setCharacterCountdown] = useState(50)
  const characteristics = meta.characteristics ? meta.characteristics : {}
  // console.log('RECOMMEND', recommend)
  // console.log('SUMMARY', summary)
  // console.log('BODY', body)
  // console.log('NAME', name)
  // console.log('EMAIL', email)
  // console.log('CHARACTER---COUNT', characterCount)



  const charKeys = Object.keys(characteristics)


  let countdown = characterCountdown-characterCount

  const handleBody = ((value) => {
    setCharacterCount(value.length)
    setBody(value)
  })

  if (countdown <= 0) {
    countdown = 'Min Reached'
  }
  // console.log('COUNTDOWN', countdown)
  if (props.addreview === false) {
    return null
  }
  return (
    <div className='modal'>
      <h3>Write Your Review</h3>
      <form >
        <label>
          About the {currentProduct.name}
          < StarForModal />
        </label>
        <br/>
        <label>
          Do you recommend this product? *
          <input type='radio' value='Yes' name='recommend' onClick={()=>setRecommend(true)}/>Yes
          <input type='radio' value='No' name='recommend'onClick={()=>setRecommend(false)}/>No
        </label>
        <br/>
        <br/>
        <label>
          Characteristics*
          {charKeys.map((characteristic, i) => {
            return <CharacteristicsAdd characteristic={characteristic} key={i}/>
          })}
        </label>
        <br/>
        <label>
          Review Summary (60 Char)
          <input type='text'placeholder='Example: Best purchase ever!' maxLength={60} onChange={(e)=>setSummary(e.target.value)}/>
        </label>
        <br/>
        <label>
          Review Body* (text input, min 50, max 1000char)
          <input type='text'placeholder='Why did you like the product or not?' maxLength={1000} onChange={(e)=>handleBody(e.target.value)}/>
          <p>
            Min Characters: {countdown}
          </p>
        </label>
        <br/>
        <label>
          <PhotoUpload/>
          {/* <p>Upload Photos, need upload program</p> */}
        </label>
        <label>
          What is your nickname* (60 Char)
          <input type='text' placeholder='Example: jackson11!' maxLength={60} onChange={(e)=>setName(e.target.value)}/>
          <br/>
          “For privacy reasons, do not use your full name or email address”
        </label>
        <br/>
        <label>
          Your email* (60 Char)
          <input type='text' placeholder='Example: jackson11@email.com' maxLength={60} onChange={(e)=>setEmail(e.target.value)}/>
          <br/>
          “For authentication reasons, you will not be emailed”
        </label>
        <br/>
        {/* <button onClick={()=>props.setAddReview(false)}>SUBMIT</button> */}
        <ValidationSubmitReview/>
      </form>
    </div>
  )

})
export default ModalAddReview;