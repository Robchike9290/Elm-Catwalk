import React, {useEffect, useState, Component} from 'react';

  const PhotoUpload = (props) => {
    const [preview, setPreview] = useState()
    const [selectedFile, setSelectedFile] = useState([])

    useEffect(() => {
      if (selectedFile) {
          setPreview(undefined)
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
        // setSelectedFile(undefined)
        props.setUploadPhoto(false)
        return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
  }

  console.log(props.uploadPhoto)

  if (!props.uploadPhoto) {
    return null
  }

  return (
      <div className='cc-photo-preview'>
          <input type='file' onChange={onSelectFile} />
          {selectedFile &&  <img src={preview} /> }
          <button className='cc-button' onClick={()=>props.setUploadPhoto(false)}>Close</button>
      </div>
  )
  }

export default PhotoUpload;