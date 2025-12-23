import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

function Naved() {
  return (
    <Navbar expand="md">
      <Container className="container-nav">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" width="40px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-com" />
        <Navbar.Offcanvas id="navbar-com" placement="bottom">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <NavDropdown title="Products" id="dropdown">
              <NavDropdown.Item as={Link} to="/Shoes">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Clothes">
                Clothes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Shirts">
                Shirts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Naved;
