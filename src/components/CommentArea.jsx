import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.getComments();
  };

  componentDidUpdate = (prevProp, prevState) => {
    if (prevProp.bookAsin !== this.props.bookAsin) {
      this.getComments();
    }
  };

  getComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookAsin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTlhZWY2ZTNkZDAwMTQ5NWU0M2YiLCJpYXQiOjE2OTgzMzM0MzgsImV4cCI6MTY5OTU0MzAzOH0.i2w5Zsgl_6Mo0QO8n_L4JoWy2rbZdQBJ_aR-baZpW7M",
          },
        }
      );
      if (response.ok) {
        const arrayOfComments = await response.json();
        console.log(arrayOfComments);
        this.setState({
          comments: arrayOfComments,
        });
      } else {
        throw new Error("errore nel recupero dei commenti");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    return (
      <div>
        <div>
          <CommentsList reviews={this.state.comments} />
        </div>
        <div>
          <AddComment bookId={this.props.bookId} />
        </div>
      </div>
    );
  }
}

export default CommentArea;
