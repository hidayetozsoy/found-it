import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In submitted");
  };

  return (
    <>
      <h2 className="text-center mb-4">Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="signinUsername">
          <Form.Label>Username or Email</Form.Label>
          <Form.Control type="text" placeholder="Enter username or email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signinPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Sign In
        </Button>
      </Form>
      <p className="text-center mt-3">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
}

export default SignIn;