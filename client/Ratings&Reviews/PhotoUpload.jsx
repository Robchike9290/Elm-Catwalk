import React, {useEffect, useState, Component} from 'react';

  const PhotoUpload = (props) => {
    const [preview, setPreview] = useState()
    const [selectedFile, setSelectedFile] = useState([])

    useEffect(() => {
      if (selectedFile) {
          setPreview(undefined)
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile])

    const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
        props.setUploadPhoto(false);
        return;
      }

      setSelectedFile(e.target.files[0]);
    }

    if (!props.uploadPhoto) {
      return null;
    }

    return (
        <div className='cc-photo-preview'>
            <input type='file' onChange={onSelectFile}/>
            {selectedFile &&  <img src={preview}/>}
            <button className='cc-button' onClick={()=>props.setUploadPhoto(false)}>Close</button>
        </div>
    )
  }

export default PhotoUpload;