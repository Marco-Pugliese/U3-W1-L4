import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };
  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter comment Here" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="tel" placeholder="Rate us: (from 0 to 5)" />
        </Form.Group>

        <Button variant="primary" type="button">
          Invia Recensione
        </Button>
      </Form>
    );
  }
}
export default AddComment;
