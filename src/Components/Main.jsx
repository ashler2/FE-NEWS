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
    p: 0
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
    document.addEventListener("scroll", this.scrolling);

    fetchArticles().then(res => {
      const articles = res.data.articles;
      const articleCount = res.data.total_count;
      this.setState({ articles, articleCount });
    });
  };
  scrolling = () => {
    this.bottomScroll();
  };

  bottomScroll() {
    const offset = window.pageYOffset;
    const height = this.state.height;
    let articles = this.state.articles;

    if (articles.length + 1 === this.state.articleCount) {
      document.removeEventListener("scroll", this.scrolling);
    }

    if (offset > height) {
      this.setState({
        p: this.state.p + 1,
        height: this.state.height + 2485
      });

      fetchArticles(this.state.p).then(res => {
        let data = res.data.articles;
        data.forEach(item => {
          articles.push(item);
        });
        this.setState({
          articles
        });
        // how to check its actually error 404
      });
    }
  }
}
