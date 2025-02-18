import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="container">
      <h1 className="title">Welcome to Found-It</h1>
      <p className="subtitle">Easily find and report lost items.</p>

      <div className="button-container">
        <Link to="/lost">
          <button className="lost-button">I Lost Something</button>
        </Link>
        <Link to="/found">
          <button className="found-button">I Found Something</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;