import { useState, DragEvent, FormEvent, useEffect } from "react";
import axios, { AxiosProgressEvent } from "axios";
import Header from "./components/Header";
import ImageUploader from "./components/ImageUploader";
import { FileEvent } from "./components/types";

import "./App.css";

const App = () => {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState<boolean>(false);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {}, [image]);

  const postImage = (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post("http://localhost:8000/image/upload", formData, {
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const { loaded, total = 0 } = progressEvent;
          const percentage = Math.floor((loaded * 100) / total);
          if (percentage < 100) {
            setProgress(true);
          } else {
            setProgress(false);
            setUploaded(true);
          }
        },
      })
      .then(({ data }) => {
        setImage(`http://localhost:8000/image/${data.filename}`);
      })
      .catch(() => {
        setProgress(false);
        setUploaded(false);
      });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: FileEvent) => {
    const image: File = event.target.files[0];
    if (!event.target.files.length) {
      return;
    }
    postImage(image);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    const image: File = event.dataTransfer.files[0];
    if (!event.dataTransfer.files.length) {
      return;
    }
    postImage(image);
    event.preventDefault();
  };
  return (
    <>
      <Header />
      <main>
        <ImageUploader
          onDrop={handleDrop}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </main>
    </>
  );
};

export default App;
