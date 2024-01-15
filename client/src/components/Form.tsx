import DragAndDrop from "./DragAndDrop";
import { FormImageUploaderProps } from "./types";

const FormImageUploader = ({ onSubmit, onChange, onDrop }: FormImageUploaderProps) => {

  return (
    <form className="ImageUploader" onSubmit={onSubmit}>
      <h1 className="ImageUploader-title">Upload your image</h1>
      <p className="ImageUploader-detail">File should be Jpeg, Png...</p>
      <DragAndDrop handleDragging={() => "hola"} handleDrop={onDrop} />
      <p>Or</p>
      <input id="image" name="image" type="file" accept="image/png image/jpg image/jpeg image/svg .png,.jpg,.jpeg" onChange={onChange} />
      <label className="ImageUploader-button" htmlFor="image">Choose a file</label>
    </form>
  )
}

export default FormImageUploader