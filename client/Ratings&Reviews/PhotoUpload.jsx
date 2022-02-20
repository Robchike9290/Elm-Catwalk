import React, {useState, Component} from 'react';


// const PhotoUpload = () => {
class PhotoUpload extends Component {
  fileObj = [];
  fileArray = [];
  constructor(props) {
      super(props)
      this.state = {
          file: [null]
      }
      this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
      this.uploadFiles = this.uploadFiles.bind(this)
  }
  uploadMultipleFiles(e) {
      this.fileObj.push(e.target.files)
      for (let i = 0; i < this.fileObj[0].length; i++) {
          this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
      }
      this.setState({ file: this.fileArray })
  }
  uploadFiles(e) {
      e.preventDefault()
      console.log(this.state.file)
  }
  render() {
      return (
          <form>
              <div className="form-group multi-preview">
                  {(this.fileArray || []).map(url => (
                      <img src={url} alt="..." />
                  ))}
              </div>
              <div className="form-group">
                  <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
              </div>
              <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
          </form >
      )
  }
  }

  export default PhotoUpload;
  //   const [photo, setPhoto] = useState([]);

//   const fileSelectHandle = (e)=> {
//     setPhoto({files: [...photo, e.target.photo]})
//   }

//   return (
//     <div>
//       <div><h3>Upload images</h3></div>
//       <h4>Images</h4>
//       <input type='file' multiple onChange={fileSelectHandle} />
//     </div>
//   )
// })

// const [selectedImage, setSelectedImage] = useState();

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
//   image: { maxWidth: "100%", maxHeight: 320 },
//   delete: {
//     cursor: "pointer",
//     padding: 15,
//     background: "red",
//     color: "white",
//     border: "none",
//   },
// };
// // This function will be triggered when the file field change
// const imageChange = (e) => {
//   if (e.target.files && e.target.files.length > 0) {
//     setSelectedImage(e.target.files[0]);
//   }
// };

// // This function will be triggered when the "Remove This Image" button is clicked
// const removeSelectedImage = () => {
//   setSelectedImage();
// };

// return (
//   <>
//     <div style={styles.container}>
//       <input
//         accept="image/*"
//         type="file"
//         onChange={imageChange}
//       />

//       {selectedImage && (
//         <div style={styles.preview}>
//           <img
//             src={URL.createObjectURL(selectedImage)}
//             style={styles.image}
//             alt="Thumb"
//           />
//           <button onClick={removeSelectedImage} style={styles.delete}>
//             Remove This Image
//           </button>
//         </div>
//       )}
//     </div>
//   </>
// );
// };