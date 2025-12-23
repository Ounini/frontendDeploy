import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
        <Navbar.Collapse id="navbar-com">
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
              <NavDropdown.Item as={Link} to="/shoes">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/clothes">
                Clothes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shirts">
                Shirts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naved;
