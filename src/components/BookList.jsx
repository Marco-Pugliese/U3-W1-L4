import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBookAsin: "none",
  };
  selectedBook = (newSelectedAsin) => {
    this.setState({ selectedBookAsin: newSelectedAsin });
  };

  render() {
    return (
      <Container fluid>
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
        <Row className="g-2 mt-3 d-flex">
          <Col className="col-6">
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col key={b.asin} className="d-flex col-12 col-lg-6">
                    <SingleBook book={b} selectedBook={this.selectedBook} />
                  </Col>
                ))}
            </Row>
          </Col>

          <Col className="col-6 ps-5">
            <CommentArea bookAsin={this.state.selectedBookAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
