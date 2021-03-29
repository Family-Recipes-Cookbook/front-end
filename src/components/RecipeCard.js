import React, { useState } from "react";

import styled from "styled-components";
import { Title, FormContainer, Button } from "./StyledComponents";
import { useHistory } from "react-router-dom";

// const RecipeCard = ({ recipe }) => {
//   const history = useHistory()
//   const routeToRecipe = e => {
//     e.preventDefault()
//     history.push(`/recipes/${recipe.id}`)
//   }

const RecipeCard = (recipe) => {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <h1>RecipeCard</h1>
      <FormContainer>
        <h1 contentEditable={edit}>
          <Title> Title: </Title>

          {recipe.title}
        </h1>
        <h2 contentEditable={edit}>
          <Title> Source: </Title>
          {recipe.source}
        </h2>
        <h3 contentEditable={edit}>
          <Title> Category: </Title>
          {recipe.category}
        </h3>
        <h3 contentEditable={edit}>
          <Title> Ingredients: </Title>
          {recipe.ingredients}
        </h3>
        <h3 contentEditable={edit}>
          <Title> Instructions: </Title>
          {recipe.instructions}
        </h3>
        <Button
          className="edit-button"
          onClick={() => {
            setEdit(true);
          }}
        >
          EDIT
        </Button>
        <Button
          className="edit-button"
          onClick={() => {
            setEdit(false);
          }}
        >
          SAVE
        </Button>
      </FormContainer>
    </div>
  );
};

export default RecipeCard;
