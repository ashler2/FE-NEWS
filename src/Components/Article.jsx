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
        <p />
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
