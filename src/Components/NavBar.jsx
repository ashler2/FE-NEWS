import React from "react";
import { Link } from "@reach/router";
const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/"> Articles</Link>
      <Link to="/topics"> Topics</Link>
      <Link to="/users"> Users</Link>
      <Link to="/postArticle"> Write Article</Link>
    </div>
  );
};

export default NavBar;
