import React from "react";

import "./App.css";
import Heading from "./Components/Heading";
import NavBar from "./Components/NavBar";
import { Main } from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Heading />
      <NavBar />
      <Main className="Main" />
      <Footer />
    </div>
  );
}

export default App;
