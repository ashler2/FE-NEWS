// @flow
import React from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "./CSS/ArticleCard.css";
import FilterBar from "./FilterBar";
export class Main extends React.Component {
  state = {
    articles: [],
    articleCount: 0,
    height: 2485,
    p: 1
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
    document.addEventListener("scroll", () => {
      this.bottomScroll(this.state);
    });

    fetchArticles().then(res => {
      const articles = res.data.articles;
      const articleCount = res.data.total_count;
      this.setState({ articles, articleCount });
    });
  };
  bottomScroll() {
    const offset = window.pageYOffset;
    const height = this.state.height;

    if (offset > height) {
      this.setState({
        p: this.state.p + 1,
        height: this.state.height + 2485
      });

      fetchArticles(this.state.p)
        .then(res => {
          let data = res.data.articles;
          let articles = this.state.articles;
          data.forEach(item => {
            articles.push(item);
          });
          this.setState({
            articles
          });
          // how to check its actually error 404
        })
        .catch(document.removeEventListener("scroll", this.bottomScroll));
    }
  }
}
