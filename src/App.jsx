{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import qrCode from "./assets/qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="card main">
      <img className="card" src={qrCode} />
      <p className="title">
        Improve your front-end skills by building projects
      </p>
      <p className="content">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
