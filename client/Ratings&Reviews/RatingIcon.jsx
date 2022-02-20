import React, {useMemo} from 'react';
import StarRating from './StarRating.jsx'

const RatingIcons=((props) => {
  // console.log('RATING ICONS', props)
  // console.log('RATING----', props.rating, 'INDEX-----', props.index)
  const starFill = ['grad25', 'grad50', 'grad75', 'grad100']
  // console.log('RATING   ICON', typeof props.rating, props.index, props.rating >= props.index, 'IS FLOAT?', Number.isInteger(props.rating))
  // console.log('SUBTRACTION', props.index-props.rating, 5 - (props.index-props.rating))
  // console.log('WHOLE', Math.floor(props.rating), 'DECIMAL?', props.rating - Math.floor(props.rating))
  let decimal = props.rating - Math.floor(props.rating)
  // console.log('DECIMAL==>', decimal, '---', decimal < .25)
  const fill = useMemo(() => {
    if (Number.isInteger(props.rating)) {
      if (props.rating >= props.index) {
        return 'grad100'
      }
    } else {
      const wholeNum = Math.floor(props.rating)
      const decimalNum = props.rating - Math.floor(props.rating)
      if (wholeNum === props.index) {
        let nextIndex = props.index + 1
        if (decimalNum < .25 && decimalNum > .0) {
          console.log ('in memo', (decimalNum < .25 && decimalNum > .0), 'index', props.index, 'next', nextIndex)
          return 'grad25'
        }
        if (wholeNum >= props.index) {
          return 'grad100'
        }
      }


    }
    return 'none'
  }, [props.rating, props.index]);
  // console.log('FILL', fill)
  // const fillfill = ((props.rating) => {
  //   const wholeNum = Math.floor(props.rating)
  //   const decimalNum = props.rating - Math.floor(props.rating)

  // })
  return (
    <div>
      <StarRating fill={fill}/>
    </div>
  )
})

export default RatingIcons;