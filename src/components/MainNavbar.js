import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function MainNavbar() {
  const location = useLocation();
  const isSignedIn = true;
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Found It</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/found" active={location.pathname === "/found"}>
              Found
            </Nav.Link>
            <Nav.Link as={Link} to="/lost" active={location.pathname === "/lost"}>
              Lost
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {
              isSignedIn ?
                <Button as={Link} to="/signout" variant="outline-light">
                  Sign Out
                </Button>
                :
                <Button as={Link} to="/signin" variant="light">
                  Sign In
                </Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;