import "./StartingPage.css";

function StartingPage() {
  const openNav = () => {
    document.getElementById("sidenav").style.width = "50%";
  };
  const closeNav = () => {
    document.getElementById("sidenav").style.width = "50%";
  };

  return (
    <div className="body">
      <nav>
        <div className="logo">Music Application</div>
        {/* menu button */}
        <span className="menubtn" onClick={openNav}>
          &#9776;
        </span>
        <div className="navLinks">
          <ul>
            <li>
              <a href="/about">
                About
              </a>
            </li>
            <li>
              <a href="/prices">Prices</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            {/* <button type="button">Login</button> */}
          </ul>
        </div>
      </nav>
      {/* side navbar for the menu button */}
      <div className="sideNav" id="sidenav">
        <a href="/" className="closeBtn" onClick={closeNav}>
          &#128473;
        </a>
        <div className="elements">
          <a href="/about">About</a>
          <a href="/prices">Prices</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>

      <div
        className="d-flex align-items-between justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex align-items-center">
          <div className="col1">
            <h1>Welcome!</h1>
            <p>
              Thank you for choosing this application so you can listen to
              music.
            </p>
            <div className="d-flex justify-content-center">
              <button className="buttons">
                <a href="/login">Login</a>
              </button>
              <button className="buttons">
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
