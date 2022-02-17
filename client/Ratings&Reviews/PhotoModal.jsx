import React from'react';

const PhotoModal = ((props) => {
  console.log('PHOTO-MODAL', props)
  if (!props.fullphoto) {
    return null
  }

  return(
    <div className='photo-modal'>
      <img src={props.photourl} />
      <br/>
      <button onClick={()=>props.setFullPhoto(false)}>Close</button>
    </div>
  )
})




export default PhotoModal;