import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function LostItem() {
  const [formData, setFormData] = useState({
    itemName: "",
    itemDescription: "",
    lostDate: "",
    lostLocation: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lost Item Reported:", formData);
    // You can add API call or other logic here
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Report a Lost Item</h2>
      <Form className="lost-item-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            name="itemName"
            placeholder="Enter item name"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="itemDescription"
            rows={3}
            placeholder="Describe the item"
            value={formData.itemDescription}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date Lost</Form.Label>
          <Form.Control
            type="date"
            name="lostDate"
            value={formData.lostDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location Lost</Form.Label>
          <Form.Control
            type="text"
            name="lostLocation"
            placeholder="Enter last known location"
            value={formData.lostLocation}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact Information</Form.Label>
          <Form.Control
            type="text"
            name="contactInfo"
            placeholder="Enter your phone or email"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Submit Report
        </Button>
      </Form>
    </Container>
  );
}

export default LostItem;