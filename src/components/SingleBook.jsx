import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: null,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.props.selectedBook(this.props.book.asin);
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
