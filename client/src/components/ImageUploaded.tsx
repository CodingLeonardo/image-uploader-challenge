import { FC } from "react";
import { UploadedResponse } from "./types";

import Share from "../assets/Link.svg";
import Download from "../assets/download.svg";

import "../styles/ImageUploaded.css";

interface ImageUploadedProps {
  img: UploadedResponse;
}

const ImageUploaded: FC<ImageUploadedProps> = ({ img }) => {
  const handleClick = () => {
    navigator.clipboard
      .writeText(`http://localhost:8000/image/${img.filename}`)
      .then(
        () => {
          console.log("Content copied to clipboard");
        },
        () => {
          console.error("Failed to copy");
        }
      );
  };

  return (
    <div className="ImageUploaded">
      <picture className="ImageUploaded-image">
        <img src={`http://localhost:8000/image/${img.filename}`} alt="" />
      </picture>
      <div className="ImageUploaded-buttons">
        <button className="ImageUploaded-button" onClick={handleClick}>
          <img src={Share} alt="Share Icon" />
          <span>Share</span>
        </button>
        <a
          className="ImageUploaded-button"
          href={`http://localhost:8000/image/${img.filename}`}
          download
        >
          <img src={Download} alt="Download Icon" />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};

export default ImageUploaded;
