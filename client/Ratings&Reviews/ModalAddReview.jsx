import React from 'react';
import StarForModal from './StarForModal.jsx'
import filestack from 'filestack-js';

const ModalAddReview = ((props) => {
  // console.log('ModalAddReview', props)
  // console.log('ADDREVIEWFROMMODAL', props.addreview)
  // const client = filestack.init('A0xhc19o8SjieAzXbAZzEz');
  // console.log(`You discovered the Filestack client version! ${filestack.version}`);
  if (props.addreview === false) {
    return null
  }
  return (
    <div className='modal'>
      <h3>Write Your Review</h3>
      <h4>About the PRODUCT NAME</h4>
      < StarForModal />
      <div> Do you recommend this product *
        <input type='radio' value='Yes' name='choice'/>Yes
        <input type='radio' value='No' name='choice'/>No
      </div>
      {/* <CharacteristicsAdd /> */}
      <p>PLACEHOLDER CHARACTERISTICS-->BUILD</p>
      <label>
        Review Summary* (60 Char)
        <input type='text'placeholder='Example: Best purchase ever!' maxLength={60}/>
      </label>
      {/* <p>Review Summary (text input 60 char)</p> */}

      <br/>

      <label>
        Review Body* (text input, min 50, max 1000char)
        <input type='text'placeholder='Why did you like the product or not?' maxLength={1000}/>
        character counter
      </label>

      {/* <p>Review Body* (text input, min 50, max 1000char) counter needed</p> */}
      <p>Upload Photos, need upload program</p>



      <label>
        What is your nickname* (60 Char)
        <input type='text' placeholder='Example: jackson11!' maxLength={60}/>
        <br/>
        “For privacy reasons, do not use your full name or email address”
      </label>
      <br/>
      <br/>

      {/* <p>What is your nickname* input 60 char</p> */}
      <label>
        Your email* (60 Char)
        <input type='text' placeholder='Example: jackson11@email.com' maxLength={60}/>
        <br/>
        “For authentication reasons, you will not be emailed”
      </label>
      {/* <p>Your email* input 60 char</p> */}

      <br/>
      <button onClick={()=>props.setAddReview(false)}>SUBMIT</button>


    </div>
  )

})

export default ModalAddReview;

//   return (
//     <div className='modal'>
//       <h3>Write Your Review</h3>
//     <h4>About the PRODUCT NAME</h4>
//     < StarForModal />
//     <div> Do you recommend this product *
//       <input type='radio' value='Yes' name='choice'/>Yes
//       <input type='radio' value='No' name='choice'/>No
//     </div>
//     {/* <CharacteristicsAdd /> */}
//     <p>PLACEHOLDER CHARACTERISTICS-->BUILD</p>
//     <label>
//       Review Summary* (60 Char)
//       <input type='text'placeholder='Example: Best purchase ever!' maxLength={60}/>
//     </label>
//     {/* <p>Review Summary (text input 60 char)</p> */}

//     <br/>

//     <label>
//       Review Body* (text input, min 50, max 1000char)
//       <input type='text'placeholder='Why did you like the product or not?' maxLength={1000}/>
//       character counter
//     </label>

//     {/* <p>Review Body* (text input, min 50, max 1000char) counter needed</p> */}
//     <p>Upload Photos, need upload program</p>

//     <label>
//       What is your nickname* (60 Char)
//       <input type='text' placeholder='Example: jackson11!' maxLength={60}/>
//       <br/>
//       “For privacy reasons, do not use your full name or email address”
//     </label>
//     <br/>
//     <br/>

//     {/* <p>What is your nickname* input 60 char</p> */}
//     <label>
//       Your email* (60 Char)
//       <input type='text' placeholder='Example: jackson11@email.com' maxLength={60}/>
//       <br/>
//       “For authentication reasons, you will not be emailed”
//     </label>
//     {/* <p>Your email* input 60 char</p> */}

//     <br/>
//     <button onClick={()=>props.setAddReview(false)}>SUBMIT</button>


//   </div>
// )

// })

// export default ModalAddReview;