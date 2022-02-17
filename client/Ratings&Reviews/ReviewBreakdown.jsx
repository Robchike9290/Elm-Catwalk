import React from 'react';
import BreakdownBar from './BreakdownBar.jsx'

const ReviewBreakdown = ((props) => {
  // console.log('METAfromBREAKDOWN', props)
  // console.log('1recomFROMMETA', props.meta.recommended)
  const ratings = props.meta.ratings ? props.meta.ratings : {};
  const recommended = props.meta.recommended ? props.meta.recommended : {};
  // console.log('recommendFROMMETA', recommended.true)
  // console.log('RATINGS__FROMMETA', ratings[1])

  // console.log('RATINGS', ratings)
  // let average = Object.values(ratings)
  // // console.log('avg', average[0])
  // const total = average.reduce((accum, number, index) => {
  //   const rating = index+1;
  //   const totalEntries = accum.totalEntries + Number(number);
  //   const totalPoints = number * rating + accum.totalPoints
  //   return {totalEntries, totalPoints}
  // }, {totalPoints: 1,totalEntries: 0})

  const rating = parseFloat((props.total.totalPoints / props.total.totalEntries).toFixed(1))
  // console.log('TOTAL', total)
  // console.log('RATING', rating)
  const avgRecommended = parseFloat(((recommended.true / props.total.totalEntries) * 100).toFixed(2))

  // console.log({"totalEntries": total.totalEntries, "true":recommended.true}, 'avgRecommended', avgRecommended)

  return (
    <div className='breakdown'>
      <div className='average'>
        <p className='numavg'>{rating}</p>
        <div className="star-rating">
        {[...Array(5)].map((star, i) => {
          return (
            <span className="star" key={i}>&#9734;</span>
          );
        })}
        </div>
      </div>

      <p>{props.total.totalEntries} ratings</p>
      <BreakdownBar ratings={props.meta.ratings} totalEntries={props.total.totalEntries} starpoint={props.starpoint}/>
      <p> {avgRecommended}% of reviews recommend this product</p>
      <div>
        <p>Size Bar Graph Placeholder</p>
      </div>
      <div>
        <p>Comfort Bar Graph Placeholder</p>
      </div>

    </div>
  )
})




export default ReviewBreakdown;