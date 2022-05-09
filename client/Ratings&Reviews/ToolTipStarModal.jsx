import React from 'react';

const ToolTipStarModal = ((props) => {
  const starValues = ['Poor', 'Fair', 'Average', 'Good', 'Great']
  return (
      <span className="tooltiptext">{starValues[props.starIndex-1]}</span>
  )
})

export default ToolTipStarModal;