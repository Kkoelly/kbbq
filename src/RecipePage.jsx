import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export default function RecipePage() {
  const location = useLocation();
  const nav = useNavigate();
  const recipe = location.state.recipe;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <span className="back_button" onClick={() => nav("/")}>
        &larr;
      </span>
      <div className="recipe">
        <h1 className="recipe_title">{recipe.title}</h1>
        <img className="card_img" src={recipe.img_path}></img>

        <div className="recipe_content">
          {recipe.title == "Korean Bulgogi Sauce" ? (
            <p className="recipe_header">
              This is the bulgogi sauce used in the recipes.
            </p>
          ) : (
            <></>
          )}
          {recipe.ingredients ? (
            <>
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
            </>
          ) : (
            <></>
          )}

          {recipe.instructions ? (
            <>
              <h2 className="recipe_header">Instructions</h2>
              <ul>
                {recipe.instructions.map((instruction) => (
                  <li className="list_item">{instruction}</li>
                ))}
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
