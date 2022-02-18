import React, { useState, useContext } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'
import SortDropDown from './SortDropDown.jsx'
import ModalAddReview from './ModalAddReview.jsx'
import {AppContext } from '../context.js';

const ReviewList = ((props) => {
  const {product} = useContext(AppContext)
  // console.log('REVIEWSLIST', props)
  const [index, setIndex] = useState(2)
  // !  const results = props.product.results && props.product.results.length ? props.product.results : [];
  const results = product.results && product.results.length ? product.results : [];
  // console.log('RESULTS FROM REVIEW LIST', results)
  // console.log('.......RESULTS FROM REVIEW LIST', results.length)
  return (
    <div>
      <div className='sort'>
      <p>{results.length} reviews, sorted by </p>
      <SortDropDown sort={props.sort} setSort={props.setSort}/>
      </div>
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