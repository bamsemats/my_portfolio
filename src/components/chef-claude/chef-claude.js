import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function ChefClaude() {
  return (
    <div className="app-container bento-chef-claude">
      <Header />
      <div className="claude-div">
        <Main />
      </div>
    </div>
  );
}

export default ChefClaude;
