import React from "react";

class CommentInput extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Comment: </label>
          <input
            id="body"
            type="text"
            value={this.props.body}
            onChange={this.props.handleChange}
          />
          <button type="submit" onClick={this.props.handleSubmit}>
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default CommentInput;
