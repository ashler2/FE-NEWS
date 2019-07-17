import React from "react";
import { fetchComments, deleteComment } from "../utils/api";
import moment from "moment";
import "./CSS/Comment.css";
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
              <p className="CommentAuthor">{author}</p>
              <p className="Body">{body}</p>
              <p className="CommentVotes"> Votes: {votes}</p>
              <p className="Posted"> Posted: {moment(created_at).fromNow()}</p>
              <button
                className="Delete"
                onClick={() => {
                  this.sendDelete(comment_id, index);
                }}
              >
                delete
              </button>
              <button className="VoteUp" />
              <button className="VoteDown" />
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    fetchComments(this.props.id).then(res => {
      const comments = res.data.comments;
      this.setState({ comments });
    });
  }
  sendDelete = (id, index) => {
    if (this.state.comments[index].author === this.props.username) {
      deleteComment(id);

      const comments = this.state.comments;
      comments.splice(index, 1);
      this.setState({ comments });
      this.props.commentGone();
    } else {
      alert("you don't have the permission to delete other peoples comments");
    }
  };
}

export default Comments;
