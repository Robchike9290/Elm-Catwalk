import React, {useState, useContext} from 'react';
import FillerProgressBar from './FillerProgressBar.jsx';
import {AppContext } from '../context.js';

const ProgressBar = ((props) => {
  const {meta, product, setProduct} = useContext(AppContext)
  const [percentage, setPercentage] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [hover, setHover] = useState(0);

  // const starFilterFolder = [];

  const toggleRating = ()=> {
    let ratings = props.selectedratings;
    if (isSelected) {
      const ratingsIndex = ratings.indexOf(props.star)
      const splicedRating = ratings.splice(ratingsIndex, 1)
      props.setSelectedRatings(ratings)
      props.setSelectedLength(ratings.length)

      setIsSelected(!isSelected)
    } else {
      props.setSelectedRatings([...ratings, props.star])
      props.setSelectedLength(ratings.length + 1)
      setIsSelected(true)
    }
  }

  return(
    <div
    id='cc-ratings'
    className={isSelected ? 'yes' : 'no'}
    onClick={toggleRating}>
      <div className='cc-starNumber'>{props.star} star</div>
      <FillerProgressBar percentage={props.percentage}/>
      <div>{props.value}</div>
    </div>
  )
})

export default ProgressBar;