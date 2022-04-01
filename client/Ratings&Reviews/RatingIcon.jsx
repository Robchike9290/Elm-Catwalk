/* eslint-disable no-unused-vars */
import React, {useMemo} from 'react';
import StarRating from './StarRating.jsx'

const RatingIcons=((props) => {
  const starFill = ['grad25', 'grad50', 'grad75', 'grad100']

  let decimal = props.rating - Math.floor(props.rating)

  const fill = useMemo(() => {
    if (Number.isInteger(props.rating)) {
      if (props.rating >= props.index) {
        return 'url(#grad100)'
      }
    } else {
      const wholeNum = Math.floor(props.rating)
      const decimalNum = props.rating - Math.floor(props.rating)
      if (wholeNum >= props.index) {
        return 'url(#grad100)'
      }
      if ((props.index - props.rating) > 1) {
        return 'none'
      }
      if (wholeNum < props.index && decimalNum > 0) {
        if (decimalNum < .5) {
          return 'url(#grad25)'
        }
        if ((decimalNum >= .5) && (decimalNum < .75)) {
          return 'url(#grad50)'
        }
        if ((decimalNum >= .75) && (decimalNum <= .9)) {
          return 'url(#grad75)'
        }
      }
    }
    return 'none'
  }, [props.rating, props.index]);

  return (
    <div>
      <StarRating fill={fill}/>
    </div>
  )
})

export default RatingIcons;