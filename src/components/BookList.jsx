import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

// {
//   let myKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTlhZWY2ZTNkZDAwMTQ5NWU0M2YiLCJpYXQiOjE2OTgzMjI4NjMsImV4cCI6MTY5OTUzMjQ2M30.7FkkQxh8aYJm839h1sclt3z4Ll2ivILy6IjHlNMFBzM`;
// }
class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={b.asin}
                className="d-flex"
              >
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
