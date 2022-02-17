import React from 'react'

const FillerProgressBar= ((props) => {
  // console.log('FROM FILLER', props)
  return (
    <div className='progress-bar'>
    <div className='filler' style={{width: `${props.percentage}%`}}/>
    </div>
  )

})

export default FillerProgressBar;