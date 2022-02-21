import React from 'react';
import ProgressBar from './ProgressBar.jsx';

const BreakdownBar = ((props) => {
  // console.log('BREAKDOWNBAR', props.starpoint)
  const barRatings = props.ratings ? props.ratings : {}

  return (
    <div>
    {props.starpoint.map((value, p) => {
      return <ProgressBar key={p} star={p+1} percentage={(value/props.totalEntries)*100} value={value}/>
    })}
  </div>
  )
})

export default BreakdownBar;