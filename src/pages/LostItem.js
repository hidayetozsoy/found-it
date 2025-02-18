import { Link } from "react-router-dom";

function LostItem() {
  return (
    <div className="container">
      <h2 className="title">Report a Lost Item</h2>
      <p>Describe your lost item below.</p>

      <Link to="/">
        <button className="back-button">Back to Home</button>
      </Link>
    </div>
  );
}

export default LostItem;