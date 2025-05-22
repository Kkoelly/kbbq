import React from "react";

export default function RecipeCard({ dialogRef, recipe }) {
  function closeCard() {
    dialogRef.current.close();
  }
  return (
    <dialog ref={dialogRef} onClick={closeCard}>
      <h1>{recipe.title}</h1>
      <img className="card_img" src={recipe.img_path}></img>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <>
            <h3>{ingredient.section}</h3>
            {ingredient.items.map((item) => (
              <li>{item}</li>
            ))}
          </>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ul>
        {recipe.instructions.map((instruction) => (
          <li>{instruction}</li>
        ))}
      </ul>
    </dialog>
  );
}
