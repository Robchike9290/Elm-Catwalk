import React, {useContext} from 'react';
import BreakdownBar from './BreakdownBar.jsx'
import RatingIcon from './RatingIcon.jsx'
import Gauge from './Gauge.jsx'
import {AppContext } from '../context.js';

const ReviewBreakdown = ((props) => {
  const {meta, currentStar, setCurrentStar} = useContext(AppContext)
  const ratings = meta.ratings ? meta.ratings : {};
  const recommended = meta.recommended ? meta.recommended : {};
  // const [rating, setRating] = useState(0)

  const rating = parseFloat((props.total.totalPoints / props.total.totalEntries).toFixed(1))

  const avgRecommended = parseFloat(((recommended.true / props.total.totalEntries) * 100).toFixed(2))

  setCurrentStar(rating)

  // console.log('CURRENT----STAR', currentStar)

  return (
    <div className='breakdown'>
      <div className='average'>
        <div className='numavg'>{rating}</div>
        <div className="star-rating">
          {[...Array(5)].map((item, index) => {
            index += 1
            return (
              <RatingIcon rating={rating} index={index}/>
            )
          })}
        </div>
      </div>
      <p>{props.total.totalEntries} ratings</p>
      <p> {avgRecommended}% of reviews recommend this product</p>
      <BreakdownBar ratings={meta.ratings} totalEntries={props.total.totalEntries} starpoint={props.starpoint}/>
      <div>
        <p>Size Bar Graph Placeholder</p>
        {/* <Gauge/> */}
      </div>
      <div>
        <p>Comfort Bar Graph Placeholder</p>
      </div>
    </div>
  )
})




export default ReviewBreakdown;