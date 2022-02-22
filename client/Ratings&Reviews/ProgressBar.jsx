import React, {useState, useContext} from 'react';
import FillerProgressBar from './FillerProgressBar.jsx';
import {AppContext } from '../context.js';

const ProgressBar = ((props) => {
  const {meta, selectedratings, setSelectedRatings, product, setProduct} = useContext(AppContext)
  // console.log('FROM PROGRESS BAR', props)
  const [percentage, setPercentage] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const toggleRating = ()=> {
    let ratings = selectedratings;
    if (isSelected) {
      const ratingsIndex = ratings.indexOf(props.star)
      const splicedRating = ratings.slice(ratingsIndex, 1)
      console.log('RATINGSAFTER SPLICE AND INDEX', {ratingsIndex, ratings}, splicedRating)
      setSelectedRatings(splicedRating)
      setIsSelected(!isSelected)
    } else {
      setSelectedRatings([...selectedratings, props.star])
      setIsSelected(true)
      console.log('RATINGSAFTER ADD AND INDEX', ratings, selectedratings)
    }
  }
  // console.log('calc', Number(props.ratingArray[0])/props.totalEntries * 100)
  // console.log('SELECTED RATINGS FROM PROGRESS BAR', selectedratings)

  return(
    <div className='cc-ratings' onClick={toggleRating}>
      <div className='cc-starNumber'>{props.star} stars</div>
      <FillerProgressBar percentage={props.percentage}/>
      <div>{props.value}</div>
    </div>
  )
})

export default ProgressBar;