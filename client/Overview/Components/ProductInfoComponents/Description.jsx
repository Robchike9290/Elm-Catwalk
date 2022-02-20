import React from 'react';

const Description = (props) => {
  // console.log('indescription', props);
  return (<div className='bigDescription'>
    {props.currentProduct.description}
    </div>
  )
}

export default Description;