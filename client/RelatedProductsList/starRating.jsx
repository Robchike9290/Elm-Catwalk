import React, { useEffect, useState } from 'react';
import { AppContext } from '../context.js';
import RatingIcon from '../../client/Ratings&Reviews/RatingIcon.jsx'

const StarRating = (props) => {

  const [averageStarRating, setAverageStarRating] = useState(0);

  const calculateStarRatings = () => {
    let totalRatingPoints = 0;
    let totalRatings = 0;
    let averageRatingProps = 0;
    let averageRatingState = 0;
    if (props.ratings) {
      for (let key in props.ratings) {
        let currentRatingPoints = key;
        let currentRatingPointsOccurrence = props.ratings[key];
        totalRatingPoints += (Number(currentRatingPoints) * Number(currentRatingPointsOccurrence));
        totalRatings += Number(currentRatingPointsOccurrence);
      }
      averageRatingState = (Math.round(totalRatingPoints / totalRatings * 4) / 4).toFixed(2);
    } else {
      averageRatingProps = props.averageRating.toFixed(2);
    }
    console.log("this is the average rating in the related prodcuts list:", averageRatingState);
    console.log("this is the average rating in the outfit items list:", averageRatingProps);
    setAverageStarRating(averageRatingState || averageRatingProps);
  }

  useEffect(() => {
    calculateStarRatings();
  }, [])
  // ADD CHERYL'S FUNCTIONALITY IN HERE WHEN IT IS COMPLETE...CHECK WHETHER HAVING MISSING RATINGVALUES WILL BREAK ANYTHING
  return (
    <div>
      <div>
        <span>
          Users rate this product {averageStarRating} stars out of 5.00.
        </span>
      </div>
      <div className='cc-star-rating'>
        {[...Array(5)].map((item, index) => {
        index += 1
        return (
        <div key={index}>
        <RatingIcon rating={averageStarRating} index={index}/>
        </div>
        )
        })}
      </div>
    </div>
  )
}

export default StarRating;