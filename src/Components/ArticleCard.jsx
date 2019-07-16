import React from "react";
import "./CSS/ArticleCard.css";

import moment from "moment";
import { Link } from "@reach/router";
const ArticleCard = props => {
  const {
    title,
    author,
    topic,
    votes,
    comment_count,
    created_at,
    article_id
  } = props.article;

  return (
    <Link to={`/articles/${article_id}`} className="Link">
      <div className="Card">
        <h1 className="Title"> {title}</h1>
        <p className="Author"> Author: {author}</p>
        <p className="Topic">Topic: {topic} </p>
        <p className="Comments">comments: {comment_count}</p>
        <p className="Votes">Votes: {votes}</p>
        <button className="UpVote">UP</button>
        <button className="DownVote">Down</button>
        <p className="Date">Posted: {moment(created_at).fromNow()}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
