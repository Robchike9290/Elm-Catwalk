import React from 'react';
import moment from 'moment';
import ReviewListEntryBody from './ReviewListEntryBody.jsx'
import ReviewListPhotos from './ReviewListPhotos.jsx'
import RatingIcon from './RatingIcon.jsx'

const ReviewListEntry = ((props) => {
  // console.log('REVIEWLISTENTRY', props)
  // console.log('time', moment(props.product.date).format('LL'))
  let date = moment(props.product.date).format('LL')
  const strSum = props.product.summary
  const summary = strSum.substring(0, 59);
  // console.log('SUMMARY', summary)
  const strBody = props.product.body
  const photos = props.product.photos && props.product.photos.length ? props.product.photos : []

  return (
    <div>
      <div className='cc-listitem1'>
        <div className="cc-star-rating">
          {[...Array(5)].map((item, index) => {
            index += 1
            return (
              <div key={index}>
              <RatingIcon rating={props.product.rating} index={index}/>
              </div>
            )
          })}
        </div>
        <div>{props.product.reviewer_name}, {date}</div>
      </div>
        <p className='cc-summary'>{summary}</p>
      <div>
        <ReviewListEntryBody body={props.product.body}/>
        <div>
          <ReviewListPhotos photos={props.product.photos}/>
        </div>
      </div>
      <p>{props.product.recommend && '✓ I recommend this product'}</p>
      <div className='cc-seller-response'>{props.product.response && `Response from seller ${props.product.response}`}</div>
      <div className='cc-Ind-helpfulness'>
        <p>Was this review helpful?</p>
        <p onClick={(e)=>props.updateHelpfulness(e, props.product.review_id)}>Yes</p>
        <p>({props.product.helpfulness})</p>
        <p> | </p>
        <p onClick={(e)=>props.updateReport(e, props.product.review_id)}>Report</p>
      </div>

      <hr/>
    </div>
  )

})

export default ReviewListEntry;