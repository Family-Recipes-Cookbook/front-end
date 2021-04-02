import React, { useState } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { Title, FormContainer, Button } from "./StyledComponents";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import { fetchRecipeById } from "../actions/index"

// const RecipeCard = ({ recipe }) => {
//   const history = useHistory()
//   const routeToRecipe = e => {
//     e.preventDefault()
//     history.push(`/recipes/${recipe.id}`)
//   }

const RecipeCard = (props) => {
  const { recipe, ingredients, instructions } = props
  console.log(instructions)
  const history = useHistory()
  const {id} = useParams()
  // const [edit, setEdit] = useState(false);
  const deleteRecipe = () => {
    // axiosWithAuth().delete(`/recipes/${id}`, recipe)
    // .then(res=>{
    //   console.log("recipe delete successful")
    //   history.push("/recipes")
    // })
    // .catch(err=>{
    //   console.log(err.response)
    // })
  }
  return (
    <div>
      <h1>RecipeCard</h1>
      <FormContainer style={{backgroundColor: "white"}}>
        
          <Title> Title: </Title>

          <h3>{recipe.Title}</h3>
        
        
          <Title> Source: </Title>
          <h3>{recipe.author}</h3>
       
        
          <Title> Category: </Title>
          <h3>{recipe.category}</h3>
       
          {ingredients.map((ingredient)=>{

            return (
            <>
            <Title> Ingredients: </Title>
             <h3>{ingredient.ingredient_amount}</h3>
             <h3>{ingredient.ingredient_name}</h3>
            </>
             )}
          )}
          {instructions.map((instruction)=>{
            return(
              <>
              <Title> Instructions: </Title>
              <h3>{instructions.instruction_description}</h3>
              </>
            )
          })}
        
        <Button
          className="edit-button"
          onClick={() => {
            history.push("/editrecipe")
          }}
        >
          EDIT
        </Button>
        <Button
          className="edit-button"
          onClick={() =>{deleteRecipe()}}
        >
          DELETE
        </Button>
      </FormContainer>
    </div>
  );
};
// const mapsStateToProps = state => {
//   return {
//       recipe: state.recipe,
      
//   }
// }
// export default connect(mapsStateToProps, {fetchRecipeById})(RecipeCard)
export default RecipeCard;