import React from "react";
import { fetchComments, deleteComment } from "../utils/api";
import moment from "moment";
import "./CSS/Comment.css";
import Votes from "./Votes";
import { navigate } from "@reach/router";

class Comments extends React.Component {
  state = {
    comments: []
  };
  render() {
    const comments = this.state.comments;
    return (
      <div>
        {comments.map((item, index) => {
          const { author, body, votes, created_at, comment_id } = item;

          return (
            <div key={comment_id} className="CommentCard">
              <p className="CommentAuthor">Author: {author}</p>
              <p className="Body">Comment: {body}</p>
              <Votes
                className="CommentVotes"
                votes={votes}
                section={"comments"}
                id={comment_id}
              />
              <p className="Posted"> Posted: {moment(created_at).fromNow()}</p>
              <button
                className="Delete"
                onClick={() => {
                  this.sendDelete(comment_id, index);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    fetchComments(this.props.id)
      .then(({ data: { comments } }) => {
        this.setState({ comments });
      })
      .catch(err => {
        navigate("/error", { state: { err: 400 } });
      });
  }
  sendDelete = (id, index) => {
    const comments = this.state.comments;

    if (comments[index].author === this.props.username) {
      deleteComment(id);

      comments.splice(index, 1);
      this.setState({ comments });
      this.props.commentGone();
    } else {
      alert("you don't have the permission to delete other peoples comments");
    }
  };
}

export default Comments;
