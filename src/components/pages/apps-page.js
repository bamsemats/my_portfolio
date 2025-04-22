import "../../App.css";
import Accordian from "../accordian/accordian";
import RandomColor from "../randomcolor/randomcolor";
import Stars from "../stars/stars";
import ImageSlider from "../image-slider/image-slider";
import LoadMore from "../load-more/load-more";
import TreeView from "../tree-view/tree-view";
import HangMan from "../hangman/hangman";
import Tenzies from "../tenzies/tenzies";
import ChefClaude from "../chef-claude/chef-claude";
import MemeGenerator from "../meme-generator/meme-generator";
import "./media-queries.css";
import "./animations.css";

export default function AppsPage() {
  return (
    <div className="apps-page">
      <div className="apps-intro">
        <h3>My apps</h3>
        <article>
          Below you will find a selection of apps I have created using various
          techniques, languages and libraries.
        </article>
      </div>
      <div className="app-library-container">
        <Accordian />
        <RandomColor />
        <Stars />
        <ImageSlider />
        <LoadMore />
        <TreeView />
        <HangMan />
        <Tenzies />
        <ChefClaude />
        <MemeGenerator />
      </div>
    </div>
  );
}
