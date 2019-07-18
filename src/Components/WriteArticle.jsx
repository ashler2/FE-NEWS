import React, { Component } from "react";

class WriteArticle extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <label>Topic: </label>
          <input placeholder="topic" required />
          <label>Article: </label>
          <input placeholder="Your Article Here" required />
          <button> Publish your Article</button>
        </form>
      </div>
    );
  }
}

export default WriteArticle;
