import React from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "@reach/router";
class Topics extends React.Component {
  state = {
    topics: []
  };
  render() {
    const topics = this.state.topics;
    return (
      <div>
        <div>
          <form>
            <label>Search Topics: </label>
            <input type="text" />
          </form>
        </div>
        {topics.map(topic => {
          return (
            <Link
              to={`/topics/${topic.slug}`}
              key={topic.slug}
              className="topicCard"
            >
              <div>
                <p>Topic: {topic.slug}</p>
                <p>Description: {topic.description}</p>
              </div>
            </Link>
          );
        })}
        <button> Add Topic: </button>
      </div>
    );
  }
  componentDidMount = () => {
    fetchTopics().then(res => {
      const topics = res.data.topics;
      this.setState({ topics });
    });
  };
}

export default Topics;
