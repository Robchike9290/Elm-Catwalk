import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'
import SortDropDown from './SortDropDown.jsx'
import ModalAddReview from './ModalAddReview.jsx'

const ReviewList = ((props) => {
  // console.log('REVIEWSLIST', props)
  const [index, setIndex] = useState(2)
  // const [addreview, setAddReview] = useState(false)
  // console.log('reviewslength', props.product.results)
  // The declared const below is checking if there is a results property in the props.product object and if its length is not zero then results is equal to props.product.results or its an empty array
  const results = props.product.results && props.product.results.length ? props.product.results : [];
  return (
    <div>
      <div className='sort'>
      <p>{props.product.count} reviews, sorted by </p>
      <SortDropDown sort={props.sort} setSort={props.setSort}/>
      </div>
      {/* <ModalAddReview addreview={addreview} setAddReview={setAddReview}/> */}
      <div className='reviewlist'>
      {results.slice(0, index).map((product, i) => {
        return <ReviewListEntry product={product} key={i}/>
      })}
      </div>
      <button onClick={()=>setIndex(index+2)}>MORE REVIEWS</button>
      <button onClick={()=>props.setAddReview(true)}>ADD A REVIEW</button>
    </div>
  )
})


export default ReviewList;