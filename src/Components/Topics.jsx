import React from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "@reach/router";
import "./CSS/topic.css";
class Topics extends React.Component {
  state = {
    topics: [],
    search: "",
    err: ""
  };
  render() {
    const { topics, search } = this.state;

    return (
      <div className="topicPage">
        <div className="TopicSearch">
          <label>Search Topics: </label>
          <input
            autoComplete="off"
            onChange={this.handleChange}
            id="search"
            type="text"
          />
        </div>
        <div className="topicSection">
          {topics
            .filter(item => {
              if (
                item.slug.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map(({ slug, description }) => {
              return (
                <div className="" key={slug}>
                  <Link className="topicLink" to={`/topics/${slug}`}>
                    <div className="topicCard">
                      <p className="topicTitle">Topic: {slug}</p>
                      <p className="topicDescription">
                        Description: {description}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);

    fetchTopics().then(({ data: { topics } }) => {
      this.setState({ topics });
    });
  };

  handleChange = event => {
    event.preventDefault();

    const key = event.target.id;
    const value = event.target.value;

    this.setState({ [key]: value });
  };
}

export default Topics;
