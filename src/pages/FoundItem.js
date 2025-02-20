import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function FoundItem() {
  const [formData, setFormData] = useState({
    itemName: "",
    itemDescription: "",
    foundDate: "",
    foundLocation: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Found Item Reported:", formData);
    // You can add API call or other logic here
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Report a Found Item</h2>
      <Form className="found-item-form" onSubmit={handleSubmit}>
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
          <Form.Label>Date Found</Form.Label>
          <Form.Control
            type="date"
            name="foundDate"
            value={formData.foundDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location Found</Form.Label>
          <Form.Control
            type="text"
            name="foundLocation"
            placeholder="Enter location where item was found"
            value={formData.foundLocation}
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

        <Button type="submit" variant="success" className="w-100">
          Submit Report
        </Button>
      </Form>
    </Container>
  );
}

export default FoundItem;