import { Button, Form, InputGroup } from "react-bootstrap";

function SignUp() {
  return (
    <Form style={{ width: "300px" }}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email" required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your Password"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Tribe</Form.Label>
        <Form.Select>
          <option>Select your tribe</option>
          <option>Yoruba</option>
          <option>Igbo</option>
          <option>Hausa</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>About Yourself</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Write here!" />
      </Form.Group>
      <Form.Group>
        <InputGroup></InputGroup>
      </Form.Group>

      <Button variant="secondary" type="submit">
        SIGNUP
      </Button>
    </Form>
  );
}

export default SignUp;
