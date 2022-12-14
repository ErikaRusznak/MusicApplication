import "./About.css";
import { Background } from "./images";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const starterPage = () => {
    navigate("/");
  };
  return (
    <div className="body">
      <nav class="startNavbar">
        <div className="logoStartup" onClick={starterPage}>
          Music Application
        </div>

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
        <div className="aboutMessage" style={{ height: "50vh" }}>
          <div className="about">
            <h3>What about this application?</h3>
            <p>
              Using this application, you can buy songs, but you also can
              publish your own!
            </p>
            <p>
              Do you like Rock, Pop, Electronic and Country? You can find all
              your favorites here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
