import React from "react";
import { fetchArticle } from "../utils/api";
import Comments from "./Comments";
import { addComment } from "../utils/api";
import CommentInput from "./CommentInput";
import moment from "moment";
import Votes from "./Votes";
import "./CSS/Article.css";
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
    window.scrollTo(0, 0);

    const {
      title,
      topic,
      created_at,
      comment_count,
      body,
      votes,
      article_id,
      author
    } = this.state.article;

    return (
      <div className="ArticlePage">
        <div className="articleSection">
          <h1 className="articleTitle">{title}</h1>
          <p className="articleMain">{body}</p>
          <div className="articleVotes">
            <Votes
              className="articleVotes"
              votes={votes}
              section={"articles"}
              id={article_id}
            />
          </div>
          <p className="articleAuthor">Author: {author}</p>
          <p className="articleTopic">Topic: {topic}</p>
          <p className="articleDate">
            {" "}
            Posted: {moment(created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </p>
        </div>
        <div className="commentSection">
          <p>Total Comments: {comment_count}</p>
          <p>Comments:</p>
          {this.state.posted && (
            <div className="CommentCard">
              <p className="CommentAuthor"> Author: {this.state.username}</p>
              <p className="Body">Comment: {this.state.fakeBody}</p>
              <Votes votes={votes} />
              <p className="Posted"> Posted: {moment(new Date()).fromNow()}</p>
            </div>
          )}
          <Comments
            className="CommentCard"
            id={this.props.article_id}
            commentGone={this.commentGone}
            username={this.state.username}
          />
        </div>
        <div className="inputSection">
          <h3 className="addComment">Add Comments: </h3>
          <h4 className="commentUsername">Username: {this.state.username}</h4>
          <CommentInput
            className="commentInputBox"
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
