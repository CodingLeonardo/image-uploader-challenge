import "../styles/Progress.css";

const Progress = () => {
  return (
    <div className="Progress">
      <div className="Progress-text">
        <h3>
          <strong>Uploading</strong>, please wait..
        </h3>
      </div>
      <div className="Progress-bar">
        <div></div>
      </div>
    </div>
  );
};

export default Progress;
