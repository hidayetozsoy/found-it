import { useState } from "react";
import { Link } from "react-router-dom";

function FoundItem() {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    location: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Found Item Submitted:", formData);
    alert("Found item reported successfully!");
    setFormData({ itemName: "", description: "", location: "", contact: "" });
  };

  return (
    <div className="container">
      <h2 className="title">Report a Found Item</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="location"
          placeholder="Where was it found?"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Your Contact Info"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">Report Found Item</button>
      </form>

      <Link to="/">
        <button className="back-button">Back to Home</button>
      </Link>
    </div>
  );
}

export default FoundItem;