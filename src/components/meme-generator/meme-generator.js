import "./App.css";
import "./index.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function MemeGenerator() {
  return (
    <div className="app-container bento-meme-generator">
      <Header />
      <Main />
    </div>
  );
}

export default MemeGenerator;
