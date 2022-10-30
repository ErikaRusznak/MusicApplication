import "./Contact.css";
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
              <a href="/prices">Prices</a>
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
            <h3>Do you have any questions?</h3>
            <p>You can contact us here:</p>
            <p className="contact">email: erikarusz@gmail.com</p>
            <p className="contact">phone: 0747875454</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
