import { Link } from "react-router-dom";

function FoundItem() {
  return (
    <div className="container">
      <h2 className="title">Report a Found Item</h2>
      <p>Describe the item you found.</p>

      <Link to="/">
        <button className="back-button">Back to Home</button>
      </Link>
    </div>
  );
}

export default FoundItem;