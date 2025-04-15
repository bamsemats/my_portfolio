export default function Form(props) {
  return (
    <form className="input-group-div" action={props.sub}>
      <input
        type="text"
        className="ingredient-input"
        placeholder="e.g. oregano"
        aria-label="Add ingredient"
        name="ingredient"
      />
      <button className="add-ingredient-button">Add ingredient</button>
    </form>
  );
}
