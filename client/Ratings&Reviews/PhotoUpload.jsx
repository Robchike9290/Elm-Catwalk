import React, {useState} from 'react';


const PhotoUpload = (() => {
  const [photo, setPhoto] = useState([]);

  const fileSelectHandle = (e)=> {
    setPhoto({files: [...photo, e.target.photo]})
  }

  return (
    <div>
      <div><h3>Upload images</h3></div>
      <h4>Images</h4>
      <input type='file' multiple onChange={fileSelectHandle} />
    </div>
  )





})


export default PhotoUpload;