import React, { useEffect, useRef } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeThumbnail({ recipe }) {
  const dialogRef = useRef(null);

  function openRecipe() {
    console.log("Dialgo: ", dialogRef.current);
    dialogRef.current.showModal();
  }

  return (
    <>
      <RecipeCard dialogRef={dialogRef} recipe={recipe} />
      <div className="thumbnail" onClick={openRecipe}>
        <h2 className="thumbnail_title">{recipe.title}</h2>
        <img className="thumbnail_img" src={recipe.img_path}></img>
      </div>
    </>
  );
}
