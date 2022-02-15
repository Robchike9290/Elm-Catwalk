import React from 'react';

const ModalAddReview = ((props) => {
  console.log('ModalAddReview', props)
  console.log('ADDREVIEWFROMMODAL', props.addreview)
  if (props.addreview === false) {
    return null
  }
  return (
    <div>
      <h3>Write Your Review</h3>
      <h4>About the PRODUCT NAME</h4>
      <div> Overall Rating *
        <p>BO STAR RATING (5-'Poor', 'Fair', 'Average', 'Good', 'Great')</p>
      </div>
      <div> Do you recommend this product *
        <input type='radio' value='Yes' name='choice'/>Yes
        <input type='radio' value='No' name='choice'/>No
      </div>
      {/* <CharacteristicsAdd /> */}
      <p>PLACEHOLDER CHARACTERISTICS-->BUILD</p>
      <p>Review Summary (text input 60 char)</p>
      <p>Review Body* (rext input, min 50, max 1000char) counter needed</p>
      <p>Upload Photos, need upload program</p>
      <p>What is your nickname* input 60 char</p>
      <p>Your email* input 60 char</p>
      <button onClick={()=>props.setAddReview(false)}>SUBMIT</button>


    </div>
  )

})

export default ModalAddReview;