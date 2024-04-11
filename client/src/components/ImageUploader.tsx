import { DragEvent, FC, FormEvent } from "react";
// import Form from "./Form";
import DragAndDrop from "./DragAndDrop";
// import Uploaded from "./Uploaded";
import { FileEvent } from "./types";
// import Progress from "./Progress";
import Exit from "../assets/exit.svg";

import "../styles/ImageUploader.css";

interface ImageUploaderProps {
  onSubmit: (event: FormEvent) => void;
  onChange: (event: FileEvent) => void;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
}

const ImageUploader: FC<ImageUploaderProps> = ({
  onSubmit,
  onChange,
  onDrop,
}) => {
  return (
    <form className="ImageUploader" onSubmit={onSubmit}>
      <DragAndDrop
        className="ImageUploader-dragdrop"
        handleDragging={() => "hola"}
        handleDrop={onDrop}
      >
        <div className="ImageUploader-img">
          <img src={Exit} alt="Exit" />
        </div>
        <div className="ImageUploader-text">
          <h3>Drag & drop a file or</h3>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/png image/jpg image/jpeg image/svg .png,.jpg,.jpeg"
            onChange={onChange}
          />
          <label htmlFor="image">browse files</label>
          <p>JPG, PNG or GIF - Max file size 2MB</p>
        </div>
      </DragAndDrop>
    </form>
  );
};

export default ImageUploader;
