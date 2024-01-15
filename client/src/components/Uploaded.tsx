import { ChangeEvent } from "react"
import { ImageUploadedProps } from "./types"

const ImageUploaded = ({ img }: ImageUploadedProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = img
  }

  const handleClick = () => {
    navigator.clipboard.writeText(img).then(() => {
      console.log('Content copied to clipboard');
    },() => {
      console.error('Failed to copy');
    });
  }

  return (
    <div className="ImageUploader uploaded">
      <div className="icon">✅</div>
      <h1 className="ImageUploader-title">Uploaded Successfully!</h1>
      <picture className="img">
        <img src={img} alt="" />
      </picture>
      <div className="copylink">
        <input type="text" defaultValue={img} onChange={handleChange} />
        <button onClick={handleClick}>Copy Link</button>
      </div>
    </div>
  )
}

export default ImageUploaded