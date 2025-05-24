import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function RecipePage() {
  const location = useLocation();
  const nav = useNavigate();
  const recipe = location.state.recipe;

  return (
    <>
      <span className="back_button" onClick={() => nav("/")}>
        &larr;
      </span>
      <div className="recipe">
        <h1 className="recipe_title">{recipe.title}</h1>
        <img className="card_img" src={recipe.img_path}></img>

        <div className="recipe_content">
          <h2 className="recipe_header">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <section className="ingredient_section">
                <h3 className="section_header">{ingredient.section}</h3>
                {ingredient.items.map((item) => (
                  <li className="list_item">{item}</li>
                ))}
              </section>
            ))}
          </ul>

          <h2 className="recipe_header">Instructions</h2>
          <ul>
            {recipe.instructions.map((instruction) => (
              <li className="list_item">{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
