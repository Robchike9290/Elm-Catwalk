import React from 'react';

const XButton = (props) => {
  return (
    <div class="productAction">
      <button onClick={() => props.hideModal()}>❌</button>
    </div>
  )
}

export default XButton;