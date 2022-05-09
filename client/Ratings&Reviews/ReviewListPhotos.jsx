import React, {useState} from 'react';
import PhotoModal from './PhotoModal.jsx'

const ReviewListPhotos = ((props) => {
  const url = [];
  const [fullphoto, setFullPhoto] = useState(false);
  const [photourl, setUrl] = useState('');

  const handleClick = (photo) => {
    setFullPhoto(true);
    setUrl(photo);
  }
  if (props.photos.length === 0) {
    return null;
  }
  return (
    <div className='cc-list-thumbnail'>
      {props.photos.map((photo, i) => {
        return (
          <div onClick={()=>handleClick(photo.url)} className='cc-thumbnail' key={i}>
            <img src={photo.url} height="100" width="150" alt="Image preview"></img>
          </div>
        )
      })}
      <PhotoModal fullphoto={fullphoto} setFullPhoto={setFullPhoto} handleClick={handleClick} photourl={photourl}/>
    </div>
  )
})

export default ReviewListPhotos;