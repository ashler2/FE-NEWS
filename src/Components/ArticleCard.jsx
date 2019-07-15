import React from "react";
import "./CSS/ArticleCard.css";
import { timePosted } from "../utils/utils";
import moment from "moment";
const ArticleCard = articles => {
  const {
    title,
    author,
    topic,
    votes,
    comment_count,
    created_at
  } = articles.article;

  return (
    <div className="Card">
      <h1 className="Title"> {title}</h1>
      <h2 className="Author"> Author: {author}</h2>
      <p className="Comments">comments: {comment_count}</p>
      <p className="Votes">Votes: {votes}</p>
      <p className="Date">Posted: {moment(created_at).fromNow()}</p>
    </div>
  );
};

export default ArticleCard;
