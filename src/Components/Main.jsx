// @flow
import React from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "./CSS/ArticleCard.css";
export class Main extends React.Component {
  state = {
    articles: []
  };
  render() {
    const articles = this.state.articles;
    return (
      <div>
        {articles.map(article => {
          return (
            <ArticleCard
              article={article}
              key={article.article_id}
              className="Card"
            />
          );
        })}
      </div>
    );
  }
  componentDidMount = () => {
    fetchArticles().then(res => {
      const articles = res.data.articles;
      this.setState({ articles });
    });
  };
}
