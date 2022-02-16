import React from 'react';

const BreakdownBar = ((props) => {
  console.log('BREAKDOWNBAR', props)
  console.log('RATINGS BREAKDOWNBAR', props.ratings)
  const barRatings = props.ratings ? props.ratings : {}
  return (
    <div>
    <p>5 stars BARPLACEHOLDER {barRatings[5]}</p>
    <p>4 stars BARPLACEHOLDER {barRatings[4]}</p>
    <p>3 stars BARPLACEHOLDER {barRatings[3]}</p>
    <p>2 stars BARPLACEHOLDER {barRatings[2]}</p>
    <p>1 stars BARPLACEHOLDER {barRatings[1]}</p>
  </div>
  )
})

export default BreakdownBar;