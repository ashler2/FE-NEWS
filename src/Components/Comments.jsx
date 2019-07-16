import React from "react";
import { fetchComments } from "../utils/api";
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
        {comments.map(item => {
          const { author, body, votes, created_at, comment_id } = item;

          return (
            <div key={comment_id} className="CommentCard">
              <p className="CommentAuthor">{author}</p>
              <p className="Body">{body}</p>
              <p className="CommentVotes"> Votes: {votes}</p>
              <p className="Posted"> Posted: {moment(created_at).fromNow()}</p>
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
}

export default Comments;
