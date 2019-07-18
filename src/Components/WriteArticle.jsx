import React, { Component } from "react";

class WriteArticle extends Component {
  state = {
    topic: "",
    article: ""
  };
  render() {
    return (
      <div>
        <form>
          <h1>Pretend this works for now :(</h1>
          <label>Topic: </label>
          <input
            onChange={this.handleChange}
            id="topic"
            placeholder="topic"
            required
          />
          <label>Article: </label>
          <input
            onChange={this.handleChange}
            id="article"
            placeholder="Your Article Here"
            required
          />
          <button> Publish your Article</button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    const key = event.target.id;
    const value = event.target.value;

    this.setState({ [key]: value });
  };
  // handleSubmit = async event => {
  //   event.preventDefault();
  //   await this.setState({ posted: true });
  //   await addComment(
  //     this.props.article_id,
  //     this.state.body,
  //     this.state.username
  //   );
  //   this.setState({
  //     article: "",
  //     topic: ""
  //   });
  // };
}

export default WriteArticle;
