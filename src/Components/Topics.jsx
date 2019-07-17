import React from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "@reach/router";
import "./CSS/topic.css";
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
        <div className="topicCard">
          {topics.map(topic => {
            return (
              <div className="topicCard" key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>
                  <p>Topic: {topic.slug}</p>
                  <p>Description: {topic.description}</p>
                </Link>
              </div>
            );
          })}
        </div>
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
