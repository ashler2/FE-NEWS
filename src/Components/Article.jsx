import React from "react";
import { fetchArticle } from "../utils/api";
class Article extends React.Component {
  state = {
    article: {}
  };
  render() {
    console.log(this.state.article);
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
      </div>
    );
  }
  componentDidMount() {
    fetchArticle(this.props.article_id).then(res => {
      const article = res.data.article;
      this.setState({ article });
    });
  }
}

export default Article;
