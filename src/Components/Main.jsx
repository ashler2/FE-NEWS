// @flow
import React from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "./CSS/ArticleCard.css";
import FilterBar from "./FilterBar";
export class Main extends React.Component {
  state = {
    articles: [],
    articleCount: 0
  };
  render() {
    const { articles, articleCount } = this.state;
    return (
      <div>
        <FilterBar />
        <p>Article count: {articleCount}</p>
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
      console.log(res.data);
      const articles = res.data.articles;
      const articleCount = res.data.total_count;
      this.setState({ articles, articleCount });
    });
  };
}
