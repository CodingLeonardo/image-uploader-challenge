import { ChangeEvent, DragEventHandler, FormEvent, useState } from "react"
import axios from "axios";
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

  const postImage = async (image) => {
    const formData = new FormData()
    formData.append("image", image)
    axios.post("http://localhost:8000/image/upload", formData, {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let precentage = Math.floor((loaded * 100) / total);
        console.log("options");
        console.log(precentage);
        if (precentage < 100) {
          setProgress(true)
        }
        setUploaded(true)
      },
    }).then((request) => {
      console.log(request);
      setImage(`http://localhost:8000/image/${request.data.filename}`)
    })
    .catch((err) => {
      setProgress(false)
      setUploaded(false)
    })
  }

  const handleChange = (event: FileEvent) => {
    const file = event.target.files[0]
    if(!event.target.files) {
      console.log("No hay Files!");
    }
    postImage(file)
  }

  const handleDrop = (event) => {
    const file = event.dataTransfer.files[0]
    if(!event.dataTransfer.files) {
      console.log("No hay Files!");
    }
    postImage(file)
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