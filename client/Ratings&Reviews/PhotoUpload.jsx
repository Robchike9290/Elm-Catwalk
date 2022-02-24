import React, {useState, Component} from 'react';

const PhotoUpload = (props) => {

  const [selectedImage, setSelectedImage] = useState();

  const [photoFile, setPhotoFile] = useState([]);

  function uploadSinglePhoto(e) {
    setPhotoFile([...photoFile, URL.createObjectURL(e.target.photoFile[0])]);
    console.log('photo files', photoFile);
  }

  function upload(e) {
    e.preventDefault();
    console.log('upload photo files', photoFile);
  }

  function deletePhoto(e) {
    const del = photoFile.filter((item, index) => index !== e);
    setPhotoFile(del);
    console.log('del', del)
  }

  if (!props.uploadPhoto) {
    return null
  }

  return (
    <form>
      <div className='cc-photo-preview'>
        {photoFile.length > 0 &&
          photoFile.map((item, index) => {
            return (
              <div key={item}>
                <img src={item} alt='' />
                <button type='button' onClick={()=> deletePhoto(index)}>
                  delete
                </button>
              </div>
            )
          })}
      </div>

      <div className ='photo-group'>
        <input
          type='file'
          disabled={photoFile.length === 5}
          className='photo-control'
          onChange={uploadSinglePhoto}
        />
      </div>
      <button
        type='button'
        className='btn btn-primary btn-block'
        onClick={upload}
      >
        Upload
      </button>
    </form>
  )
}

export default PhotoUpload;

  // This function will be triggered when the file field change
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //   }
  // };

  // This function will be triggered when the "Remove This Image" button is clicked
  // const removeSelectedImage = () => {
  //   setSelectedImage();
  // };

  // if (!props.uploadPhoto) {
  //   return null
  // }

  // return (
  //   <div className='photo-upload'>
  //   <div style={styles.container}>
  //     <input
  //       accept="image/*"
  //       type="file"
      //   onChange={imageChange}
      // />

// {selectedImage && (
//           <div style={styles.preview}>
//             <img
//               src={URL.createObjectURL(selectedImage)}
//               style={styles.image}
      //         alt="Thumb"
      //       />
      //       <button onClick={removeSelectedImage} style={styles.delete}>
      //         Remove This Image
      //       </button>
      //     </div>
      //   )}
      // </div>
//       <div>
//       {/* <button onClick={props.setUploadPhoto(false)}>Close</button> */}
//       </div>
//     </div>
//   );
// };

// export default PhotoUpload;

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   preview: {
//     marginTop: 50,
//     display: "flex",
//     flexDirection: "column",
//   },
//   image: { maxWidth: "100%", maxHeight: 150 },
//   delete: {
//     cursor: "pointer",
//     padding: 15,
//     background: "red",
//     color: "white",
//     border: "none",
//   },
// };
