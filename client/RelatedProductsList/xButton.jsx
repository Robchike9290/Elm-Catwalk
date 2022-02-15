import React from 'react';

const XButton = (props) => {
  return (
    <div class="productAction">
      <button onClick={() => props.setComparisonModalShow(false)}>❌</button>
    </div>
  )
}

export default XButton;