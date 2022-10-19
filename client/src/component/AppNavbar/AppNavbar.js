import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavItem from "react-bootstrap/NavItem";
import "./AppNavbar.css";

function AppNavbar() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar className="nameTitle">Music Application</Navbar>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse className="options ">
          <Nav className="me-auto menu">
            <Nav.Link href="/home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white">
              Contact
            </Nav.Link>
            {/* <NavDropdown
              title="Dropdown"
              id="collasible-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item href="#action/3.1" >
                Action
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="auth">
            <Nav.Link href="/login" className="text-white">
              Login
            </Nav.Link>
            <Nav.Link href="/register" className="text-white">
              Register
            </Nav.Link>
            <Nav.Link
              href="/"
              className="text-white"
              onClick={() => {
                localStorage.removeItem("userInfo");
              }}
            >
              Log out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
