import React from "react";

import "./App.css";
import Heading from "./Components/Heading";
import NavBar from "./Components/NavBar";
import { Main } from "./Components/Main";
import Footer from "./Components/Footer";
import { Router } from "@reach/router";

import Topics from "./Components/Topics";
import Article from "./Components/Article";
function App() {
  return (
    <div className="App">
      <Heading />
      <NavBar />

      <Router>
        <Main path="/" className="Main" />
        <Topics path="/topics" />
        <Article path="/articles/:article_id" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
