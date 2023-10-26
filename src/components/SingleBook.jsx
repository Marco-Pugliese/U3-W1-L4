import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        className={this.state.selected ? "d-flex selected" : "d-flex"}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body className="bg-success flex-grow-1 d-flex flex-column justify-content-between">
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>

        {this.state.selected && <CommentArea />}
      </Card>
    );
  }
}

export default SingleBook;
