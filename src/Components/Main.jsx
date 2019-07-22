// @flow
import React from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "./CSS/ArticleCard.css";
import FilterBar from "./FilterBar";
import { throttle } from "lodash";
import { navigate } from "@reach/router";
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

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.articles.length + 1 === this.state.articleCount) {
      document.removeEventListener("scroll", this.throttleScroll);
    } else {
      document.addEventListener("scroll", this.throttleScroll);
    }
    console.log(
      this.props.path,
      prevProps.path,
      "lenght" + this.state.articles.length
    );
    if (this.props.path !== prevProps.path) {
      await fetchArticles(
        this.state.p,
        this.props.topic,
        this.state.sort_by
      ).then(res => {
        const articles = res.data.articles;
        const articleCount = res.data.total_count;
        this.setState({ articles, articleCount, p: 0, height: 778 });
      });

      console.log("why wont you work", this.state);
    }

    if (prevProps.topic !== this.props.topic) {
      fetchArticles(this.state.p, this.props.topic, this.state.sort_by).then(
        ({ data }) => {
          const articles = data.articles;
          const articleCount = data.total_count;
          this.setState({ articles, articleCount });
        }
      );
    }
  };

  componentDidMount = () => {
    console.log("mounted");
    this.setState({ topic: this.props.topic, height: 778 });
    document.addEventListener("scroll", this.throttleScroll);

    fetchArticles(this.state.p, this.props.topic, this.state.sort_by)
      .then(res => {
        const articles = res.data.articles;
        const articleCount = res.data.total_count;
        this.setState({ articles, articleCount, p: 0 });
      })
      .catch(err => {
        navigate("/error");
      });
  };
  componentWillUnmount() {
    console.log("unmounted");

    document.removeEventListener("scroll", this.throttleScroll);
    this.setState({ articles: [], articleCount: 0, height: 778 });
  }
  scrolling = () => {
    this.bottomScroll();
  };
  throttleScroll = throttle(this.scrolling, 2000);

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
    if (articles.length + 1 === this.state.articleCount) {
      document.removeEventListener("scroll", this.throttleScroll);
    }
    console.log("hello", atBottom, distanceFromBottomToTrigger);

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
