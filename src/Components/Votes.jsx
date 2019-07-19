import React from "react";
import { patchVote } from "../utils/api";
export class Votes extends React.Component {
  state = {
    VoteChange: 0
  };
  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <div className="Votes">
        <button
          className="UpVote"
          onClick={this.upVote}
          disabled={voteChange === 1}
        >
          UP
        </button>

        <p className="Votes">Votes: {votes + voteChange || votes}</p>
        <button
          className="DownVote"
          onClick={this.downVote}
          disabled={voteChange === -1}
        >
          Down
        </button>
      </div>
    );
  }
  //Possible refactor into one - Take into account the if up needs to - 2 ect
  upVote = () => {
    patchVote(this.props.id, 1, this.props.section);
    this.setState({ voteChange: 1 });
  };
  downVote = () => {
    this.setState({ voteChange: -1 });
    patchVote(this.props.id, -1, this.props.section);
  };
}
export default Votes;
