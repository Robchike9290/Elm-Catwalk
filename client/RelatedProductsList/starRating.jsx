import React, { useEffect, useState } from 'react';
import { AppContext } from '../context.js';
import '../src/relatedProductsListStyles.css';

const StarRating = (props) => {

  const [averageStarRating, setAverageStarRating] = useState(0);

  const calculateStarRatings = () => {
    let totalRatingPoints = 0;
    let totalRatings = 0;
    for (let key in props.ratings) {
      let currentRatingPoints = key;
      //console.log(typeof currentRatingPoints);
      let currentRatingPointsOccurrence = props.ratings[key];
      //console.log(typeof currentRatingPointsOccurrence);
      totalRatingPoints += (Number(currentRatingPoints) * Number(currentRatingPointsOccurrence));
      totalRatings += Number(currentRatingPointsOccurrence);
    }
    console.log('ratings data for this product:', props.ratings);
    setAverageStarRating((Math.round(totalRatingPoints / totalRatings * 4) / 4).toFixed(2));
    // console.log('total ratings', totalRatings);
    // console.log('total rating points', totalRatingPoints);
  }

  useEffect(() => {
    calculateStarRatings();
  }, [])
  // ADD CHERYL'S FUNCTIONALITY IN HERE WHEN IT IS COMPLETE...CHECK WHETHER HAVING MISSING RATINGVALUES WILL BREAK ANYTHING
  return (
    <div>
      <span>Users rate this product at {averageStarRating} stars out of 5. <br></br>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    </div>
  )
}

export default StarRating;