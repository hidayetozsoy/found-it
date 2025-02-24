import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="title">Welcome to Found-It</h1>
      <p className="subtitle">Easily find and report lost items.</p>
      <div className="d-flex gap-2">
        <Button as={Link} to="/lost" variant="primary">
          I Lost Something
        </Button>
        <Button as={Link} to="/found" variant="success">
          I Found Something
        </Button>
      </div>
    </>
  );
}

export default Home;