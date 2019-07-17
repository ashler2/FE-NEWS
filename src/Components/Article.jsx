import React from "react";
import { fetchArticle } from "../utils/api";
import Comments from "./Comments";
import { addComment } from "../utils/api";
import CommentInput from "./CommentInput";
import moment from "moment";

class Article extends React.Component {
  state = {
    article: {},
    user: "",
    username: "jessjelly",
    body: "",
    posted: false,
    fakeBody: ""
  };
  render() {
    console.log(this.state);

    const {
      title,
      topic,
      created_At,
      comment_count,
      body,
      votes
    } = this.state.article;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <p> {votes}</p>
        <p>Topic: {topic}</p>
        <p> {created_At}</p>

        <p>Total Comments: {comment_count}</p>
        <p>Comments:</p>
        {this.state.posted && (
          <div className="CommentCard">
            <p className="CommentAuthor">{this.state.username}</p>
            <p className="Body">{this.state.fakeBody}</p>
            <p className="CommentVotes"> Votes: 0</p>
            <p className="Posted"> Posted: {moment(new Date()).fromNow()}</p>
            <button className="VoteUp" />
            <button className="VoteDown" />
          </div>
        )}
        <Comments id={this.props.article_id} commentGone={this.commentGone} />
        <div>
          <h3>Add Comments: </h3>
          <h4>Username: {this.state.username}</h4>
          <CommentInput
            body={this.state.body}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetchArticle(this.props.article_id).then(res => {
      const article = res.data.article;
      this.setState({ article });
    });
  }
  handleChange = event => {
    event.preventDefault();

    const key = event.target.id;
    const value = event.target.value;

    this.setState({ [key]: value, fakeBody: value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    await this.setState({ posted: true });
    await addComment(
      this.props.article_id,
      this.state.body,
      this.state.username
    );
    this.setState({
      body: ""
    });
  };
  commentGone = () => {
    this.setState(() => {
      let article = this.state.article;
      let { comment_count, ...args } = article;
      comment_count -= 1;

      return { article: { comment_count: comment_count, ...args } };
    });
  };
}

export default Article;
