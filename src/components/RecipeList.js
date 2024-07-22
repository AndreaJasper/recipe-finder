import React from "react";

function RecipList({ recipes }) {
  return (
    <>
      {recipes.map((recipe) => (
        <h2>{recipe.label}</h2>
      ))};
    </>
  );
}