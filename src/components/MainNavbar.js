import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function MainNavbar() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Found It</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/found" active={location.pathname === "/found"}>Found</Nav.Link>
            <Nav.Link as={Link} to="/lost" active={location.pathname === "/lost"}>Lost</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;