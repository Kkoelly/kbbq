import React from "react";
import { useNavigate } from "react-router";

export default function RecipeThumbnail({ recipe }) {
  const nav = useNavigate();

  function openRecipe() {
    nav("/recipe", { state: { recipe: recipe } });
  }

  return (
    <>
      <div className="thumbnail" onClick={openRecipe}>
        <span className="thumbnail_title">{recipe.title}</span>
        <img className="thumbnail_img" src={recipe.img_path}></img>
      </div>
    </>
  );
}
