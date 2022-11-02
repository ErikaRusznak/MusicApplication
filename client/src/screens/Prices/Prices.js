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
        <div className="contactMessage" style={{ height: "50vh" }}>
          <div className="about">
            <h3>How can you buy songs?</h3>
            <p>
              You can click on the shopping button on the song card. A pop-up
              page will come up and there you should enter the bank code you
              logged in with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
