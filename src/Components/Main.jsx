// @flow
import React from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "./CSS/ArticleCard.css";
import FilterBar from "./FilterBar";
import { throttle } from "lodash";

export class Main extends React.Component {
  state = {
    articles: [],
    articleCount: 0,
    height: 778,
    p: 0,
    topic: "",
    sort_by: "DateDesc"
  };
  render() {
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
    document.addEventListener("scroll", throttle(this.scrolling, 1000));

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
    await this.setState({ sort_by, p: 0 });
    fetchArticles(this.state.p, this.props.topic, this.state.sort_by).then(
      res => {
        const articles = res.data.articles;
        const articleCount = res.data.total_count;
        this.setState({ articles, articleCount });
      }
    );
  };

  bottomScroll() {
    const { innerHeight, scrollY } = window;
    const { clientHeight } = document.body;
    const distanceFromBottomToTrigger = this.state.height;
    const atBottom =
      innerHeight + scrollY >= clientHeight + distanceFromBottomToTrigger;
    let articles = this.state.articles;
    //lodash

    if (articles.length + 1 === this.state.articleCount) {
      document.removeEventListener("scroll", this.scrolling);
    }
    if (atBottom) {
      this.setState({
        p: this.state.p + 1,
        height: this.state.height + 778
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
        }
      );
    }
  }
}
