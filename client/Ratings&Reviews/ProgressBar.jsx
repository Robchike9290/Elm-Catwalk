import React, {useState, useContext} from 'react';
import FillerProgressBar from './FillerProgressBar.jsx';
import {AppContext } from '../context.js';

const ProgressBar = ((props) => {
  const {meta, product, setProduct} = useContext(AppContext)
  // console.log('FROM PROGRESS BAR', props)
  const [percentage, setPercentage] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [hover, setHover] = useState(0);

  // const starFilterFolder = [];

  const toggleRating = ()=> {
    let ratings = props.selectedratings;
    if (isSelected) {
      const ratingsIndex = ratings.indexOf(props.star)
      // console.log('INDEX OF', ratings.indexOf(props.star))
      const splicedRating = ratings.splice(ratingsIndex, 1)
      // console.log('RATINGSAFTER SPLICE AND INDEX', {'ratingsIndex': ratingsIndex, 'ratings': ratings}, 'spliced--->', splicedRating)
      props.setSelectedRatings(ratings)
      props.setSelectedLength(ratings.length)
      // starFilterFolder.splice(ratingsIndex)
      // console.log('spliced-star', starFilterFolder)

      setIsSelected(!isSelected)
    } else {
      props.setSelectedRatings([...ratings, props.star])
      props.setSelectedLength(ratings.length + 1)
      // starFilterFolder.push(props.star)

      // console.log({'selectedratingsarray': props.selectedratings})
      // console.log('props-star', starFilterFolder)
      setIsSelected(true)
      // console.log('selectedratingbool')
      // setSelectedRatings(ratings.push(props.star))
    }
  }
  // console.log('ratings', starFilterFolder)
  // console.log('calc', Number(props.ratingArray[0])/props.totalEntries * 100)
  // console.log('SELECTED RATINGS FROM PROGRESS BAR', props.selectedratings)

  return(
    // <div className='cc-ratings' onClick={toggleRating}>
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