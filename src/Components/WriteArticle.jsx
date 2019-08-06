import React, { Component } from "react";
import { postArticle, fetchTopics } from "../utils/api";
import "./CSS/WriteArticle.css";
class WriteArticle extends Component {
  state = {
    topic: "coding",
    article: "",
    title: "",
    topics: []
  };
  render() {
    const { topics, title, article } = this.state;
    return (
      <div className="WriteArticlePage">
        <form onSubmit={this.handleSubmit} className="writeForm">
          <div className="TopicSelect">
            <label>Topic: </label>
            <select
              id="topic"
              value={this.state.topic}
              onChange={this.handleChange}
            >
              {topics.length > 0 &&
                topics.map(({ slug }) => {
                  return (
                    <option key={slug} value={slug}>
                      {slug}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="TitleInput">
            <label>Title: </label>{" "}
            <textarea
              value={title}
              onChange={this.handleChange}
              id="title"
              placeholder="Your title Here"
              required
              autoComplete="off"
            />
          </div>
          <div className="ArticleInput">
            <label>Article: </label>
            <textarea
              value={article}
              onChange={this.handleChange}
              id="article"
              placeholder="Your Article Here"
              required
              autoComplete="off"
            />
          </div>
          <div className="submitArticle">
            <button type="submit" onSubmit={this.handleSubmit}>
              {" "}
              Publish your Article
            </button>
          </div>
        </form>
      </div>
    );
  }

  componentDidMount = () => {
    fetchTopics().then(topics => {
      let data = topics.data.topics;
      this.setState({ topics: data });
    });
  };

  handleChange = event => {
    const key = event.target.id;
    const value = event.target.value;
    event.preventDefault();

    this.setState({ [key]: value });
  };
  handleSubmit = event => {
    const { article, topic, title } = this.state;
    event.preventDefault();
    postArticle(article, topic, this.props.username, title);
    this.setState({
      article: "",
      title: "",
      topic: "coding"
    });
  };
}

export default WriteArticle;
