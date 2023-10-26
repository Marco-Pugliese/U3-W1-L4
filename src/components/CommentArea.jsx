import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    elementId: "",
  };

  getComments = (id) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTlhZWY2ZTNkZDAwMTQ5NWU0M2YiLCJpYXQiOjE2OTgzMjU2NTIsImV4cCI6MTY5OTUzNTI1Mn0.rXj_H_Vib2iRPI7SOui6JxJAcOtqeiB2aN93exzpDVY",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while recieving Comments");
        }
      })
      .then((datas) => {
        console.log(datas);
        this.setState({ comments: datas, elementId: datas.elementId });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <ListGroup>
        <ListGroup.Item className="text-center py-2">
          <h6 className="py-0 my-0">Commenti: </h6>
        </ListGroup.Item>
        {this.state.comments.map((comment) => {
          return (
            <div>
              <CommentList />
              <ListGroup.Item key={comment.elementId} className="py-1">
                {comment.comment} - {comment.author} | {comment.rate}
              </ListGroup.Item>{" "}
            </div>
          );
        })}
        <AddComment />
      </ListGroup>
    );
  }
}
export default CommentArea;
