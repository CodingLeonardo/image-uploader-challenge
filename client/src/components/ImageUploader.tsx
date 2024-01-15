import { DragEvent, FormEvent, useState } from "react"
import axios, { AxiosProgressEvent } from "axios";
import Form from "./Form";
import Uploaded from "./Uploaded";
import "../styles/ImageUploader.css"
import { FileEvent } from "./types";
import Progress from "./Progress";

const ImageUploader = () => {
  const [image, setImage] = useState("")
  const [progress, setProgress] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [error, setError] = useState<Error>()

  const postImage = (image: File) => {
    const formData = new FormData()
    formData.append("image", image)
    axios.post("http://localhost:8000/image/upload", formData, {
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        const { loaded, total = 0 } = progressEvent;
        let precentage = Math.floor((loaded * 100) / total);
        console.log("options");
        console.log(precentage);
        if (precentage < 100) {
          setProgress(true)
        } else {
          setUploaded(true)
        }
      },
    }).then((request) => {
      console.log(request);
      setImage(`http://localhost:8000/image/${request.data.filename}`)
    })
    .catch((err: Error) => {
      setError(err)
      setProgress(false)
      setUploaded(false)
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleChange = (event: FileEvent) => {
    const image: File = event.target.files[0]
    if(event.target.files.length) {
      postImage(image)
    }
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    const image: File = event.dataTransfer.files[0]
    if(event.dataTransfer.files.length) {
      postImage(image)
    }
  }

  if(progress) {
    return <Progress />
  }

  if(uploaded){
    return <Uploaded img={image} />
  }

  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} onDrop={handleDrop} />
  )
}

export default ImageUploader