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
  const results = product.results && product.results.length ? product.results : [];
  // console.log('PRODUCT RESULTS FROM REVIEW LIST', productresults)
  // console.log('RESULTS FROM REVIEW LIST', results)
  // console.log('.......RESULTS FROM REVIEW LIST', results.length)
  const moreReviewButton = () => {
    if ((results.length - index) < 2) {
      setMoreReview(false)
      console.log('hello')
    }
    setIndex(index+2)
  }
  // console.log('INDEX+2', index)
  // console.log('CLICKEDRESULTS', results.length)
  return (
    <div>
      <div className='sort'>
      <p>{results.length} reviews, sorted by </p>
      <SortDropDown sort={props.sort} setSort={props.setSort}/>
      </div>
      <div className='reviewlist'>
      {productresults.slice(0, index).map((product, i) => {
        return <ReviewListEntry product={product} key={i} updateHelpfulness={props.updateHelpfulness} updateReport={props.updateReport}/>
      })}
      </div>
      {/* <button onClick={()=>setIndex(index+2)}>MORE REVIEWS</button> */}
      {moreReview && <button onClick={moreReviewButton}>MORE REVIEWS</button>}
      <button onClick={()=>props.setAddReview(true)}>ADD A REVIEW</button>
    </div>
  )
})


export default ReviewList;