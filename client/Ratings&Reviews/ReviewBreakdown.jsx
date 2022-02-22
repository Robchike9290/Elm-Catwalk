import React, {useContext, useEffect} from 'react';
import BreakdownBar from './BreakdownBar.jsx'
import RatingIcon from './RatingIcon.jsx'
import Gauge from './Gauge.jsx'
import {AppContext } from '../context.js';

const ReviewBreakdown = ((props) => {
  const {meta, selectedratings, average, setAverage} = useContext(AppContext)
  const ratings = meta.ratings ? meta.ratings : {};
  const recommended = meta.recommended ? meta.recommended : {};
  const characteristicBreakdown = meta.characteristics ? meta.characteristics : {}
  // console.log('META==REVIEWBREAKDOWN', meta)
  // const [rating, setRating] = useState(0)
  // console.log('CHARACTERISTIC FROM REVIEWBBREAKDOWN', characteristic)
  const averageRating = parseFloat((props.total.totalPoints / props.total.totalEntries).toFixed(1))
  // console. trace();

  // setAverage(averageRating)

  useEffect(() => {
    setAverage(averageRating)
  }, [averageRating]);

  const avgRecommended = parseFloat(((recommended.true / props.total.totalEntries) * 100).toFixed(2))

  // console.log('AVERAGE', average)

  //!tie the rating or if still causing warning, rename variable setCurrentStar(rating)

  // console.log('characteristicBreakdown', characteristicBreakdown)
  const characteristicBreakdownArray= []
  for (var key in characteristicBreakdown) {
    // console.log('keyVALUE', characteristicBreakdown[key])
    characteristicBreakdownArray.push({[key]: characteristicBreakdown[key]})
  }
  // console.log('ARRAY', characteristicBreakdownArray)

  // console.log('CURRENT----type', charTypes)

  return (
    <div className='cc-breakdown'>
      <div className='cc-average'>
        <div className='cc-numavg'>{averageRating}</div>
        <div className='cc-star-rating'>
          {[...Array(5)].map((item, index) => {
            index += 1
            return (
              <div key={index}>
              <RatingIcon rating={averageRating} index={index}/>
              </div>
            )
          })}
        </div>
      <br/>
      <br/>
      </div>
      <p className='cc-averageRecommended'> {avgRecommended}% of reviews recommend this product</p>
      <p className='cc-selected-ratings'>{selectedratings} (SELECTED RATINGS GO HERE)</p>
      <BreakdownBar ratings={meta.ratings} totalEntries={props.total.totalEntries} starpoint={props.starpoint}/>
      <p>{props.total.totalEntries} ratings</p>
      <div>
        {characteristicBreakdownArray.map((type, idx)=> {
          return <Gauge type={type} key={idx}/>
        })}
      </div>
    </div>
  )
})




export default ReviewBreakdown;