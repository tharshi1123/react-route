import React from 'react'
import ReactDOM from 'react-dom'
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'



class ImageCrop extends React.Component {
  state = {
    src: null,
    crop: {
      x: 10,
      y: 10,
      width: 80,
      height: 80,
    },
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        () =>
          this.setState({
            src: reader.result,
          }),
        false
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  onImageLoaded = image => {
    console.log('onCropComplete', image)
  }

  onCropComplete = crop => {
    console.log('onCropComplete', crop)
  }

  onCropChange = crop => {
    this.setState({ crop })
  }

  render() {
    return (
      <div className="App">
        <div>
        <input type="file" onChange={this.onSelectFile} />       
         </div>
        {this.state.src && (
          <ReactCrop
            src={this.state.src}
            crop={this.state.crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
      </div>
    )
  }
}

export default ImageCrop;
