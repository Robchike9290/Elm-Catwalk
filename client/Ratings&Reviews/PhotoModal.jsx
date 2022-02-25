import React from'react';

const PhotoModal = ((props) => {
  // console.log('PHOTO-MODAL', props)
  if (!props.fullphoto) {
    return null
  }

  return(
    <div className='cc-photo-modal'>
      <img src={props.photourl} height="300" width="450"/>
      <br/>
      <button className='cc-button' onClick={()=>props.setFullPhoto(false)}>Close</button>
    </div>
  )
})




export default PhotoModal;