import React, { useState, useContext } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'
import SortDropDown from './SortDropDown.jsx'
import ModalAddReview from './ModalAddReview.jsx'
import {AppContext } from '../context.js';

const ReviewList = ((props) => {
  const {product, productresults} = useContext(AppContext)
  // console.log('REVIEWSLIST', props)
  const [index, setIndex] = useState(2)
  const [moreReview, setMoreReview] = useState(true)
  // const [moreReview, setMoreReview] = useState(true)
  const results = product.results && product.results.length ? product.results : [];
  // console.log('PRODUCT RESULTS FROM REVIEW LIST', productresults)
  // console.log('RESULTS FROM REVIEW LIST', results)
  // console.log('.......RESULTS FROM REVIEW LIST', results.length)
  const moreReviewButton = () => {
    if ((results.length - index) < 2) {
      setMoreReview(false)
    }
    setIndex(index+2)
  }
  // console.log('INDEX+2', index)
  // console.log('CLICKEDRESULTS', results.length, productresults.length, product.length)
  if (productresults.length === 0) {
    return null;
  }
  return (
    <div className='cc-review-list-parent'>
      <div className='cc-sort'>
      <p>{results.length} reviews, sorted by </p>
      <SortDropDown sort={props.sort} setSort={props.setSort}/>
      </div>
      <div className='cc-reviewlist'>
      {productresults.slice(0, index).map((product, i) => {
        return <ReviewListEntry product={product} key={i} rHelpful={props.rHelpful} setRHelpful={props.setRHelpful} reported={props.reported} setReported={props.setReported}/>
      })}
      </div>
      {moreReview && <button onClick={moreReviewButton}>MORE REVIEWS</button>}
      <button onClick={()=>props.setAddReview(true)}>ADD A REVIEW</button>
    </div>
  )
})


export default ReviewList;