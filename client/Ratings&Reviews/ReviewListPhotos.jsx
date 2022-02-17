import React, {useState} from 'react';
import PhotoModal from './PhotoModal.jsx'

const ReviewListPhotos = ((props) => {
  // console.log('!!!!PHOTOS', props)
  // console.log('!url---!!!PHOTOS', props.photos)
  const url = [];
  const [fullphoto, setFullPhoto] = useState(false)
  const [photourl, setUrl] = useState('')

  const handleClick = (photo) => {
    setFullPhoto(true)
    setUrl(photo)
  }
  return(
    <div>
      {props.photos.map((photo, i) => {
        return (
          <div onClick={()=>handleClick(photo.url)}>
            <img src={photo.url} height="100" alt="Image preview..."></img>
          </div>
        )
      })}
      <PhotoModal fullphoto={fullphoto} setFullPhoto={setFullPhoto} handleClick={handleClick} photourl={photourl}/>
    </div>
  )
})

export default ReviewListPhotos;