import ImageUploader from "./components/ImageUploader";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ImageUploader />
      </main>
    </>
  );
};

export default App;
