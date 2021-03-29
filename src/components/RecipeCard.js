import React, { useState } from "react";

import styled from "styled-components";
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
        <button
          className="edit-button"
          onClick={() => {
            setEdit(true);
          }}
        >
          EDIT
        </button>
        <button
          className="edit-button"
          onClick={() => {
            setEdit(false);
          }}
        >
          SAVE
        </button>
      </FormContainer>
    </div>
  );
};

const Title = styled.h2`
  color: purple;
`;

const FormContainer = styled.div`
  border: 1px solid darkgrey;
  border-radius: 20px;
  color: #0e2923;
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
`;
export default RecipeCard;
