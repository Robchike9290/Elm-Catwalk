import React from 'react';
import moment from 'moment';

const ReviewListEntry = ((props) => {
  // console.log('ReviwLISTENTRY', props)
  // console.log('time', moment(props.product.date).format('LL'))
  let date = moment(props.product.date).format('LL')
  return (
    <div>
      <div className='listitem1'>
        <p>STAR RATING-BO</p>
        <p>{props.product.reviewer_name}, {date}</p>
      </div>
      <p>{props.product.summary}</p>
      <div>
        <p>{props.product.body}</p>
        <p>SHOW MORE</p>
        <div>PHOTOS</div>
      </div>
      <p>RECOMMENDATION, CHECKMARK ICON</p>
      <p>props.product.response</p>
      <p>RATING HELPFULLNUSS {props.product.helpfulness}</p>
    </div>
  )

})

export default ReviewListEntry;