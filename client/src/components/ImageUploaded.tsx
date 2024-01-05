interface ImageUploadedProps {
  img: string
}

const ImageUploaded = ({ img }: ImageUploadedProps) => {
  return (
    <div className="ImageUploader">
      <picture></picture>
      <h1 className="ImageUploader-title">Uploaded Successfully!</h1>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="copylink">
        <input type="text" />
        <button>Copy Link</button>
      </div>
    </div>
  )
}

export default ImageUploaded