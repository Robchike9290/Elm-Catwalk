import React from 'react'

const FillerProgressBar= ((props) => {
  // console.log('FROM FILLER', props)
  return (
    <div className='cc-progress-bar'>
    <div className='cc-filler' style={{width: `${props.percentage}%`}}/>
    </div>
  )
})

export default FillerProgressBar;