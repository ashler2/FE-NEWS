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
    height: 1447,
    p: 0,
    topic: "",
    sort_by: "DateDesc"
  };
  render() {
    console.log(this.state.articles);
    const { articles, articleCount } = this.state;

    return (
      <div>
        <FilterBar setSortBy={this.setSortBy} />
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
    fetchArticles(this.state.p, this.props.topic, this.state.sort_by).then(
      res => {
        const articles = res.data.articles;
        const articleCount = res.data.total_count;
        this.setState({ articles, articleCount });
      }
    );
  };
  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrolling);
  }
  scrolling = () => {
    this.bottomScroll();
  };
  setSortBy = async sort_by => {
    await this.setState({ sort_by });
    fetchArticles(this.state.p, this.props.topic, this.state.sort_by).then(
      res => {
        const articles = res.data.articles;
        const articleCount = res.data.total_count;
        this.setState({ articles, articleCount });
      }
    );
  };

  componentWillUpdate(props, prevState) {
    if (prevState.articles !== this.state.articles) {
      console.log("hi");
      console.log(prevState.articles, this.state.articles);
    }
  }
  bottomScroll() {
    const offset = window.pageYOffset;
    const height = this.state.height;
    let articles = this.state.articles;
    console.log(offset);
    if (articles.length + 1 >= this.state.articleCount) {
      document.removeEventListener("scroll", this.scrolling);
    }

    if (offset > height) {
      this.setState({
        p: this.state.p + 1,
        height: this.state.height + 1447
      });

      fetchArticles(this.state.p, this.props.topic, this.state.sort_by).then(
        res => {
          let data = res.data.articles;
          data.forEach(item => {
            articles.push(item);
          });
          this.setState({
            articles
          });
          // how to check its actually error 404
        }
      );
    }
  }
}
