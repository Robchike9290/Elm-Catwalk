import React from 'react';
import moment from 'moment';

const ReviewListEntry = ((props) => {
  // console.log('ReviwLISTENTRY', props)
  // console.log('time', moment(props.product.date).format('LL'))
  let date = moment(props.product.date).format('LL')
  const strSum = props.product.summary
  const summary = strSum.substring(0, 59);
  // console.log('SUMMARY', summary)
  const strBody = props.product.body
  return (
    <div>
      <div className='listitem1'>
        <p>STAR RATING-BO</p>
        <p>{props.product.reviewer_name}, {date}</p>
      </div>
      <p className='summary'>{summary}</p>
      <div>
        <p>{props.product.body}</p>
        <p>SHOW MORE</p>
        <div>PHOTOS --->need Modal popout BUILD
          <img/>
        </div>
      </div>
      <p>RECOMMENDATION, CHECKMARK ICON</p>
      <p>props.product.response</p>
      <p>RATING HELPFULLNUSS {props.product.helpfulness}</p>
    </div>
  )

})

export default ReviewListEntry;