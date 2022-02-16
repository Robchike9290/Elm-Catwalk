import React from 'react';

const StarButton = (props) => {
  return (
    <div>
      <button onClick={() => props.showModal()}>⭐️</button>
    </div>
  )
}

export default StarButton;