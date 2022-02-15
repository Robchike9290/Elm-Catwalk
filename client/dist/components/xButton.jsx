import React from 'react';

const XButton = (props) => {
  return (
    <div>
      <button onClick={() => props.setComparisonModalShow(false)}>❌</button>
    </div>
  )
}

export default XButton;