import React, { useState, useContext } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import SortDropDown from './SortDropDown.jsx';
import {AppContext } from '../context.js';

const ReviewList = ((props) => {
  const {product, productresults} = useContext(AppContext);
  const [index, setIndex] = useState(2);
  const [moreReview, setMoreReview] = useState(true);
  const results = product.results && product.results.length ? product.results : [];

  const moreReviewButton = () => {
    if ((results.length - index) < 2) {
      setMoreReview(false);
    }
    setIndex(index + 2);
  }

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
          return
            <ReviewListEntry
              product={product}
              key={i}
              rHelpful={props.rHelpful}
              setRHelpful={props.setRHelpful}
              reported={props.reported}
              setReported={props.setReported}
            />
        })}
      </div>
      <div className='cc-reviewbuttons'>
        {moreReview && <button className='cc-button' onClick={moreReviewButton}>MORE REVIEWS</button>}
        <button className='cc-button' onClick={()=>props.setAddReview(true)}>ADD A REVIEW</button>
      </div>
    </div>
  )
})

export default ReviewList;