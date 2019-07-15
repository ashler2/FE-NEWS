import React from "react";
import { fetchTopics } from "../utils/api";
class Topics extends React.Component {
  state = {
    topics: []
  };
  render() {
    const topics = this.state.topics;
    return (
      <div>
        <div>
          <h1> search bar</h1>
        </div>
        {topics.map(topic => {
          return (
            <div key={topic.slug}>
              <p>Topic: {topic.slug}</p>
              <p>Description: {topic.description}</p>
            </div>
          );
        })}
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
