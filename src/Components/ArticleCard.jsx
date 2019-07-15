import React from "react";
import "./CSS/ArticleCard.css";
const ArticleCard = articles => {
  const { title, author, topic, votes, comment_count } = articles.article;

  return (
    <div className="Card">
      <h1 className="Title"> {title}</h1>
      <h2 className="Author"> Author: {author}</h2>
      <p className="Comments">comments: {comment_count}</p>
      <p className="Votes">Votes: {votes}</p>
      <p className="Date">Date</p>
    </div>
  );
};

export default ArticleCard;
