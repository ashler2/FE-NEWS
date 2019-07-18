import React from "react";
import "./CSS/Article.css";
import "./CSS/CommentInput.css";
class CommentInput extends React.Component {
  render() {
    return (
      <div className="commentInputBox">
        <form>
          <label className="commentLabel">Comment: </label>
          <input
            className="InputPart"
            id="body"
            type="text"
            value={this.props.body}
            onChange={this.props.handleChange}
          />
          <button
            className="SubmitComment"
            type="submit"
            onClick={this.props.handleSubmit}
          >
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default CommentInput;
