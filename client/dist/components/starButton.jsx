import React from 'react';

const StarButton = (props) => {
  return (
    <div>
      <button onClick={() => props.setComparisonModalShow(true)}>⭐️</button>
    </div>
  )
}

export default StarButton;