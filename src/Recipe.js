import React from "react";
import styles from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={styles.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p className={styles.calories}>{calories}</p>
      <img className={styles.image} src={image} alt={title} />
    </div>
  );
};

export default Recipe;
