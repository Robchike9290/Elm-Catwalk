import React from 'react';
import moment from 'moment';
import ReviewListEntryBody from './ReviewListEntryBody.jsx'

const ReviewListEntry = ((props) => {
  // console.log('ReviwLISTENTRY', props)
  // console.log('RESPONSE', props.product.response)
  // console.log('time', moment(props.product.date).format('LL'))
  let date = moment(props.product.date).format('LL')
  const strSum = props.product.summary
  const summary = strSum.substring(0, 59);
  // console.log('SUMMARY', summary)
  const strBody = props.product.body
  return (
    <div>
      <div className='listitem1'>

      <div className="star-rating">
      {[...Array(5)].map((star) => {
        return (
          <span className="star">&#9734;</span>
        );
      })}
      </div>
        {/* <p>STAR RATING-BO</p> */}

        <p>{props.product.reviewer_name}, {date}</p>
      </div>
      <p className='summary'>{summary}</p>
      <div>
        {/* <p>{props.product.body}</p> */}
        <ReviewListEntryBody body={props.product.body}/>
        <div>PHOTOS --->need Modal popout BUILD
          <img/>
        </div>
      </div>
      {/* <p>{props.product.recommend ? '✓ I recommend this product' : null}</p> */}
      <p>{props.product.recommend && '✓ I recommend this product'}</p>
      <p>{props.product.response && `Response from seller ${props.product.response}`}</p>
      <p>Was this review helpful? Yes {props.product.helpfulness}</p>
      <hr/>
    </div>
  )

})

export default ReviewListEntry;