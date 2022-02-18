import React from 'react';
import moment from 'moment';
import ReviewListEntryBody from './ReviewListEntryBody.jsx'
import ReviewListPhotos from './ReviewListPhotos.jsx'

const ReviewListEntry = ((props) => {

  // console.log('time', moment(props.product.date).format('LL'))
  let date = moment(props.product.date).format('LL')
  const strSum = props.product.summary
  const summary = strSum.substring(0, 59);
  // console.log('SUMMARY', summary)
  const strBody = props.product.body
  const photos = props.product.photos && props.product.photos.length ? props.product.photos : []
  // console.log('PHOTOS', props.product.photos)
  // console.log('PHOTOS---url', props.product.photos)
  const photoURL = props.product.photos.map((url, i) => {

  })
  return (
    <div>
      <div className='listitem1'>

      <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        return (
          <span className="star" key={i}>&#9734;</span>
          // <span className="star" key={i}>&#11242;</span>
        );
      })}
      </div>
        {/* <p>STAR RATING-BO</p> */}

        <div>{props.product.reviewer_name}, {date}</div>
      </div>
      <p className='summary'>{summary}</p>
      <div>
        {/* <p>{props.product.body}</p> */}
        <ReviewListEntryBody body={props.product.body}/>
        <div>
          <ReviewListPhotos photos={props.product.photos}/>
        </div>
      </div>
      {/* <p>{props.product.recommend ? '✓ I recommend this product' : null}</p> */}
      <p>{props.product.recommend && '✓ I recommend this product'}</p>
      <p>{props.product.response && `Response from seller ${props.product.response}`}</p>
      <p>Was this review helpful? Yes({props.product.helpfulness}) | Report</p>
      <hr/>
    </div>
  )

})

export default ReviewListEntry;