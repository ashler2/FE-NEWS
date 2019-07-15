import React from "react";
import { Link } from "@reach/router";
const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/"> Articles</Link>
      <Link to="/topics"> topics</Link>
      <Link to="/users"> users</Link>
      <Link to="/postArticle"> write Article</Link>
    </div>
  );
};

export default NavBar;
