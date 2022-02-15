import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'
import SortDropDown from './SortDropDown.jsx'

const ReviewList = ((props) => {
  console.log('REVIEWSLIST', props)
  const [index, setIndex] = useState(2)
  // console.log('reviewslength', props.product.results)
  // ! The declared const below is checking if there is a results property in the props.product object and if its length is not zero then results is equal to props.product.results or its an empty array
  const results = props.product.results && props.product.results.length ? props.product.results : [];
  return (
    <div>
      <h4>{props.product.count} reviews, sorted by </h4>
      <SortDropDown/>
      <div className='reviewlist'>
      {results.slice(0, index).map((product, i) => {
        return <ReviewListEntry product={product} key={i}/>
      })}
      </div>
      <button onClick={()=>setIndex(index+2)}>MORE REVIEWS</button> <button>ADD A REVIEW</button>
    </div>
  )
})


export default ReviewList;