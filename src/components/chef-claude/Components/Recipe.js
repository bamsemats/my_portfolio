import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  return (
    <div className="recipe-div" aria-live="polite">
      <h2>Here's a recipe for you!</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </div>
  );
}
