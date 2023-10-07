// import "bootstrap/dist/css/bootstrap.min.css";
import qrCode from "./assets/qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="item1">
        <img src={qrCode} />
      </div>
      <div className="item2">
        <p className="title">
          Improve your front-end skills by building projects
        </p>
      </div>
      <div className="item3">
        <p className="content">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
