import React, {useContext} from 'react';
import BreakdownBar from './BreakdownBar.jsx'
import RatingIcon from './RatingIcon.jsx'
import Gauge from './Gauge.jsx'
import {AppContext } from '../context.js';

const ReviewBreakdown = ((props) => {
  const {meta} = useContext(AppContext)
  const ratings = meta.ratings ? meta.ratings : {};
  const recommended = meta.recommended ? meta.recommended : {};
  const characteristicBreakdown = meta.characteristics ? meta.characteristics : {}
  // console.log('META==REVIEWBREAKDOWN', meta)
  // const [rating, setRating] = useState(0)
  // console.log('CHARACTERISTIC FROM REVIEWBBREAKDOWN', characteristic)
  const rating = parseFloat((props.total.totalPoints / props.total.totalEntries).toFixed(1))

  const avgRecommended = parseFloat(((recommended.true / props.total.totalEntries) * 100).toFixed(2))

  //!tie the rating or if still causing warning, rename variable setCurrentStar(rating)

  // console.log('characteristicBreakdown', characteristicBreakdown)
  const characteristicBreakdownArray= []
  for (var key in characteristicBreakdown) {
    console.log('keyVALUE', characteristicBreakdown[key])
    characteristicBreakdownArray.push({[key]: characteristicBreakdown[key]})
  }
  // console.log('ARRAY', characteristicBreakdownArray)

  // console.log('CURRENT----type', charTypes)

  return (
    <div className='breakdown'>
      <div className='average'>
        <div className='numavg'>{rating}</div>
        <div className="star-rating">
          {[...Array(5)].map((item, index) => {
            index += 1
            return (
              <RatingIcon rating={rating} index={index} key={rating.idx}/>
            )
          })}
        </div>
      </div>
      <p>{props.total.totalEntries} ratings</p>
      <p> {avgRecommended}% of reviews recommend this product</p>
      <BreakdownBar ratings={meta.ratings} totalEntries={props.total.totalEntries} starpoint={props.starpoint}/>
      <div>
        {characteristicBreakdownArray.map((type, idx)=> {
          return <Gauge type={type} key={idx}/>
        })}
      </div>
    </div>
  )
})




export default ReviewBreakdown;