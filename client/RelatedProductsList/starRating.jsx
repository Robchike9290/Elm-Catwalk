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
      let currentRatingPointsOccurrence = props.ratings[key];
      totalRatingPoints += (Number(currentRatingPoints) * Number(currentRatingPointsOccurrence));
      totalRatings += Number(currentRatingPointsOccurrence);
    }
    setAverageStarRating((Math.round(totalRatingPoints / totalRatings * 4) / 4).toFixed(2));
  }

  useEffect(() => {
    calculateStarRatings();
  }, [])
  // ADD CHERYL'S FUNCTIONALITY IN HERE WHEN IT IS COMPLETE...CHECK WHETHER HAVING MISSING RATINGVALUES WILL BREAK ANYTHING
  return (
    <div>
      <span>Users rate this product {averageStarRating} stars out of 5.00. <br></br>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    </div>
  )
}

export default StarRating;