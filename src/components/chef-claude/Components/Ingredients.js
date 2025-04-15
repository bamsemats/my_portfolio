export default function Ingredients(props) {
  
  return (
  props.ingredientListItems.length > 0 ? <div className="ingredients-list">
    <h1>Ingredients on hand:</h1>
    <ul>
      {props.ingredientListItems}
    </ul>
    {props.ingredientListItems.length > 2 ? <div className="ready-for-recipe-container">
    <div className="ready-for-recipe-div" ref={props.ref}>
      <h2>Ready for a recipe?</h2>
      <p>Generate a recipe from your list of ingredients</p>
    </div>
    <button className="recipe-button" onClick={props.getRecipe}>Get a recipe</button>
    </div> : null}
  </div> : null
    )
};