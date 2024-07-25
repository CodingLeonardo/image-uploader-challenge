import { DragEvent, FC, FormEvent } from "react";
import DragAndDrop from "./DragAndDrop";
import ImageUploaded from "./ImageUploaded";
import Progress from "./Progress";
import { FileEvent, UploadedResponse } from "./types";
import Exit from "../assets/exit.svg";

import "../styles/ImageUploader.css";

interface ImageUploaderProps {
  progress: boolean;
  uploaded?: UploadedResponse;
  onSubmit: (event: FormEvent) => void;
  onChange: (event: FileEvent) => void;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
}

const ImageUploader: FC<ImageUploaderProps> = ({
  progress,
  uploaded,
  onSubmit,
  onChange,
  onDrop,
}) => {
  if (progress) {
    return <Progress />;
  }
  if (uploaded) {
    return <ImageUploaded img={uploaded} />;
  }
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
