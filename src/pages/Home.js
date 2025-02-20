import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";

function Home() {
  return (
    <div className="container">
      <h1 className="title">Welcome to Found-It</h1>
      <p className="subtitle">Easily find and report lost items.</p>

      <div className="button-container">
        <Link to="/lost">
          <Button>I Lost Something</Button>
        </Link>
        <Link to="/found">
          <Button>I Found Something</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;