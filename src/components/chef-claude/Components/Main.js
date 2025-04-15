import { useState, useEffect, useRef } from "react";
import Form from "./Form";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";
import { getRecipeFromChefClaude } from "./ai";

export default function Main() {
  const [recipeFromClaude, setRecipeFromClaude] = useState("");
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const [ingredientArray, setIngredientArray] = useState([]);
  // useEffect(() => {
  //   setIngredientArray(prevItem => prevItem.includes(...ingredients) ? prevItem : [...prevItem, ...ingredients]);
  // }, []);
  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientListItems = ingredientArray.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  const recipeElement = useRef(null);
  console.log(recipeElement);

  useEffect(() => {
    recipeFromClaude !== "" &&
      recipeElement.current.scrollIntoView({ behavior: "smooth" });
  }, [recipeFromClaude]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredientArray);
    setRecipeFromClaude(recipeMarkdown);
  }

  function handleSubmit(formData) {
    const addedIngredient = formData.get("ingredient");
    setIngredientArray((prevItem) =>
      prevItem.includes(addedIngredient)
        ? prevItem
        : [...prevItem, addedIngredient]
    );
    console.log(ingredientArray);
  }
  return (
    <>
      <div className="main-div">
        <Form sub={handleSubmit} />
        {/* <form className="input-group-div" action={handleSubmit}>
      <input 
      type="text" 
      className="ingredient-input" 
      placeholder="e.g. oregano"
      aria-label="Add ingredient"
      name="ingredient" />
      <button className="add-ingredient-button">+ Add ingredient</button>
      </form>       */}
        <Ingredients
          ingredientListItems={ingredientListItems}
          getRecipe={getRecipe}
          ref={recipeElement}
        />
        {/* {ingredientListItems.length > 0 ? <div className="ingredients-list">
        <h1>Ingredients on hand:</h1>
        <ul>
          {ingredientListItems}
        </ul>
        {ingredientListItems.length > 2 ? <div className="ready-for-recipe-container">
        <div className="ready-for-recipe-div">
          <h2>Ready for a recipe?</h2>
          <p>Generate a recipe from your list of ingredients</p>
        </div>
        <button className="recipe-button" onClick={toggleRecipeShown}>Get a recipe</button>
        </div> : null}
      </div> : null} */}
        {recipeFromClaude && <Recipe recipe={recipeFromClaude} />}
      </div>
    </>
  );
}
