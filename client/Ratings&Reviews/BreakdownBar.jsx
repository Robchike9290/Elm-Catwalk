import React from 'react';
import ProgressBar from './ProgressBar.jsx';

const BreakdownBar = ((props) => {
  const barRatings = props.ratings ? props.ratings : {}

  return (
    <div>
    {props.starpoint.map((value, p) => {
      return
        <ProgressBar
          key={p}
          star={p+1}
          percentage={(value/props.totalEntries)*100}
          value={value}
          selectedratings={props.selectedratings}
          setSelectedRatings={props.setSelectedRatings}
          setSelectedLength={props.setSelectedLength}
        />
    })}
  </div>
  )
})

export default BreakdownBar;