import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sign Up submitted");
  };

  return (
    <>
      <h2 className="text-center mb-4">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="signupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Choose a username" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Create a password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm your password" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Sign Up
        </Button>
      </Form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </>
  );
}

export default SignUp;