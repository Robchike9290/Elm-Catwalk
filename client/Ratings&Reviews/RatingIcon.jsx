import React, {useMemo} from 'react';
import StarRating from './StarRating.jsx'

const RatingIcons=((props) => {
  console.log('RATING ICONS', props)
  console.log('RATING----', props.rating, 'INDEX-----', props.index)
  const fill = useMemo(() => {
    if (props.rating >= props.index) {
      return 'black'
    }
    return 'none'
  }, [props.rating, props.index]);
  console.log('FILL', fill)
  return (
    <div>
      <StarRating fill={fill}/>
    </div>
  )
})

export default RatingIcons;