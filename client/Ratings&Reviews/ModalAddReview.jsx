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
  const [uploadPhoto, setUploadPhoto] = useState(false);

  const charKeys = Object.keys(characteristics)

  let countdown = characterCountdown-characterCount

  const handleBody = ((value) => {
    setCharacterCount(value.length)
    setBody(value)
  })

  const handleUploadClick = ((e) => {
    e.preventDefault()
    e.stopPropagation()
    setUploadPhoto(true)
  })

  if (countdown <= 0) {
    countdown = 'Min Reached'
  }

  if (props.addreview === false) {
    return null
  }
  return (
    <div className='cc-modal'>
      <h3 className='cc-modalHeader'>WE LOVE HEARING FROM YOU!</h3>
      <form className='cc-modal-form1'>
        <label id='cc-modal-form2'>
          How was your experience with "{currentProduct.name}?"
        </label>
        <label>
          < StarForModal />
        </label>
        <br/>
        <label>
          Do you recommend this product? *
          <input
          id='RVRecommend'
          type='radio'
          value='Yes'
          name='recommend' onClick={()=>setRecommend(true)}/>Yes
          <input
          id='RVRecommend'
          type='radio'
          value='No'
          name='recommend'onClick={()=>setRecommend(false)}/>No
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
          Review Summary max 60 Char
          <input
          type='text'
          id='modalsummary'
          name='modal-summary'
          placeholder='Example: Best purchase ever!' maxLength={60} onChange={(e)=>setSummary(e.target.value)}/>
        </label>
        <br/>
        <label>
          Review Body*
          <p className='character-counter'>
            Min Characters: {countdown}
          </p>
          <textarea
          id='modalbody'
          name="modal-body"
          rows="5"
          cols="70"
          type='text'
          placeholder='Why did you like the product or not?' maxLength={1000} onChange={(e)=>handleBody(e.target.value)}/>
        </label>
        <br/>
        <label>
          Upload Product Photos Here (5 max)
          <button className='cc-button' onClick={(e)=>handleUploadClick(e)}>Upload Photos</button>
          <PhotoUpload setUploadPhoto={setUploadPhoto} uploadPhoto={uploadPhoto}/>
        </label>
        <br/>
        <br/>
        <label>
          What is your nickname*
          <input type='text'
          id='ReviewName'
          name='RVName'
          placeholder='Example: jackson11!' maxLength={60} onChange={(e)=>setName(e.target.value)}/>
          <br/>
          “For privacy reasons, do not use your full name or email address”
        </label>
        <br/>
        <label>
          Your email*
          <input
          type='text'
          id='ReviewEmail'
          name='RVEmail'
          placeholder='Example: jackson11@email.com'
          maxLength={60}
          onChange={(e)=>setEmail(e.target.value)}/>
          <br/>
          “For authentication reasons, you will not be emailed”
        </label>
        <br/>
        <label className='cc-modalFooter'>
        <ValidationSubmitReview addreview={props.addreview} setAddReview={props.setAddReview} />
        <button className='cc-button' onClick={()=>props.setAddReview(false)}>Cancel</button>
        </label>
      </form>
    </div>
  )

})
export default ModalAddReview;