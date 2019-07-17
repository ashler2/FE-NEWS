import React from "react";
import "./CSS/ArticleCard.css";

import moment from "moment";
import { Link } from "@reach/router";
import Votes from "./Votes";
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
    <div className="Card">
      <Link to={`/articles/${article_id}`} className="Title">
        {title}
      </Link>

      {/* <h1 className="Title"> {title}</h1> */}
      <p className="Author"> Author: {author}</p>
      <p className="Topic">Topic: {topic} </p>
      <p className="Comments">comments: {comment_count}</p>
      <Votes
        votes={votes}
        id={article_id}
        className="Votes"
        section={"articles"}
      />
      <p className="Date">Posted: {moment(created_at).fromNow()}</p>
    </div>
  );
};

export default ArticleCard;
