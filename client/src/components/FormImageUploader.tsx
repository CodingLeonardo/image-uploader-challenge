import { ChangeEvent, DragEventHandler, FormEvent } from "react"
import DragAndDrop from "./DragAndDrop";

interface FormImageUploaderProps {
  onSubmit: (event: any) => void,
  onChange: (event: any) => void,
  onDrop: (event: any) => void
}

const FormImageUploader = ({ onSubmit, onChange, onDrop }: FormImageUploaderProps) => {

  return (
    <form className="ImageUploader" onSubmit={onSubmit}>
      <h1 className="ImageUploader-title">Upload your image</h1>
      <p className="ImageUploader-detail">File should be Jpeg, Png...</p>
      <DragAndDrop handleDragging={() => "hola"
      } handleDrop={onDrop} />
      <p>Or</p>
      <input id="image" name="file" type="file" accept="image/png image/jpg image/jpeg image/svg .png,.jpg,.jpeg,.svg,.png" onChange={onChange} />
      <label className="ImageUploader-button" htmlFor="image">Choose a file</label>
    </form>
  )
}

export default FormImageUploader