import { useState, DragEvent, FormEvent } from "react";
import axios, { AxiosProgressEvent } from "axios";
import Header from "./components/Header";
import ImageUploader from "./components/ImageUploader";
import { FileEvent, UploadedResponse } from "./components/types";

import "./App.css";

const App = () => {
  const [progress, setProgress] = useState<boolean>(false);
  const [uploaded, setUploaded] = useState<UploadedResponse>();

  const postImage = (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post("/api/upload", formData, {
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          // const { loaded, total = 0 } = progressEvent;
          // const percentage = Math.floor((loaded * 100) / total);
          setProgress(true);
        },
      })
      .then(({ data }) => {
        setUploaded(data);
      })
      .catch(() => {
        setProgress(false);
      })
      .finally(() => {
        setProgress(false);
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
    event.preventDefault();
    const image: File = event.dataTransfer.files[0];
    if (!event.dataTransfer.files.length) {
      return;
    }
    postImage(image);
  };
  return (
    <>
      <Header />
      <main>
        <ImageUploader
          progress={progress}
          uploaded={uploaded}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onDrop={handleDrop}
        />
      </main>
    </>
  );
};

export default App;
