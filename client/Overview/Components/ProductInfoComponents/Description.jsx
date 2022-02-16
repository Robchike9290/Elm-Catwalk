import React from 'react';

// currentProduct={this.state.currentProduct}

const Description = (props) => {
  // console.log('indescription', props);
  return (<div className='bigDescription'>
    {props.currentProduct.description}
    </div>
  )
}

export default Description;