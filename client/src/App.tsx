import ImageUploader from "./components/ImageUploader"
import "./App.css"

const App = () => {
  return (
    <>
      <main>
        <section className="App-imageuploader__section">
          <ImageUploader />
        </section>
      </main>
      <footer className="App-footer">Created by <a href="#">@CodingLeonardo</a> - devChallenges.io</footer>
    </>
  )
}

export default App