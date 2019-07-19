import React, { Component } from "react";
import { postArticle, fetchTopics } from "../utils/api";

class WriteArticle extends Component {
  state = {
    topic: "coding",
    article: "",
    title: "",
    topics: []
  };
  render() {
    console.log(this.state);
    const { topics } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Pretend this look like Css has been used :(</h1>
          <label>Topic: </label>
          <select
            id="topic"
            value={this.state.topic}
            onChange={this.handleChange}
          >
            {topics.length > 0 &&
              topics.map(topic => {
                return (
                  <option key={topic.slug} value={topic.slug}>
                    {topic.slug}
                  </option>
                );
              })}
          </select>
          <label>Title: </label>
          <input
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
            placeholder="Your title Here"
            required
            autoComplete="off"
          />
          <label>Article: </label>
          <input
            value={this.state.article}
            onChange={this.handleChange}
            id="article"
            placeholder="Your Article Here"
            required
            autoComplete="off"
          />
          <button type="submit" onSubmit={this.handleSubmit}>
            {" "}
            Publish your Article
          </button>
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
    console.log(this.state);
    postArticle(article, topic, this.props.username, title);
    this.setState({
      article: "",
      title: "",
      topic: "coding"
    });
  };
}

export default WriteArticle;
