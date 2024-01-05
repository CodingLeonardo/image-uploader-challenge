import { ChangeEvent, DragEventHandler, FormEvent, useState } from "react"
import FormImageUploader from "./FormImageUploader";
import ImageUploaded from "./ImageUploaded";
import "../styles/ImageUploader.css"

type FileEvent = ChangeEvent<HTMLInputElement> & {
  target: EventTarget & { files: FileList };
};

const ImageUploader = () => {
  const [image, setImage] = useState("")
  const [progress, setProgress] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleChange = (event: FileEvent) => {
    const file = event.target.files[0]

    if(!event.target.files) {
      console.log("No hay Files!");
    }

    setImage(URL.createObjectURL(file))
    setProgress(true)
  }

  const handleDrop = (event) => {
    const file = event.dataTransfer.files[0]

    if(!event.dataTransfer.files) {
      console.log("No hay Files!");
    }
    setImage(URL.createObjectURL(file))
    setProgress(true)
  }

  if(progress) {
    return <div>Uploading...</div>
  }

  if(uploaded){
    return <ImageUploaded img={image} />
  }

  return (
    <FormImageUploader onSubmit={handleSubmit} onChange={handleChange} onDrop={handleDrop} />
  )
}

export default ImageUploader