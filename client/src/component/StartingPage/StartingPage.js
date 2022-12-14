import "./StartingPage.css";
import { Background } from "./images";

function StartingPage() {
  return (
    <div className="body">
      <nav class="startNavbar">
        <div className="logoStartup">Music Application</div>

        <div className="navLinks">
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/prices">Buying Method</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="d-flex justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="welcomeMessage" style={{ height: "50vh" }}>
          <div className="col1">
            <h1>Welcome!</h1>
            <p>Thank you for choosing this application so you can buy music.</p>
            <div className="d-flex justify-content-center">
              <button className="buttonsStartPage">
                <a href="/login">Login</a>
              </button>
              <button className="buttonsStartPage">
                <a href="/register">Register</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartingPage;
