import React, { useState, useEffect } from "react";

// import styled from "styled-components";
import {
  FormContainer,
  InputContainer,
  Input,
  Button,
} from "./StyledComponents";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

// const initialState = {
//   title: "",
//   source: "",
//   ingredients: "",
//   instructions: "",
//   category: "",
// };

const EditRecipe = () => {
  const { id } = useParams();
  const history = useHistory();
  const [recipe, setRecipe] = useState([]);
  const [ ingredient, setIngredient ] = useState({ingredient_amount: '', ingredient_name: ''});
  const [ instruction, setInstruction ] = useState({instruction_description: ""})

  useEffect(() => {
    axiosWithAuth()
      .get(`https://tt18familyrecipe.herokuapp.com/api/recipes/${id}`)
      .then((res) => {
        console.log("edit recipe get response", res.data);
        setRecipe(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ]);
  
  const changeIngredient = (ev) => {
    
    setIngredient({ ...ingredient, [ev.target.name]: ev.target.value });
  };
  const changeInstruction = (ev) => {
    
    setInstruction({ ...instruction, [ev.target.name]: ev.target.value });
  };
  const cancel = (e) => {
    e.preventDefault();
    history.push(`/recipes`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Put recipe in handle submit");
    axiosWithAuth()
      .put(`/recipes/${recipe.recipe_id}/ingredients`, ingredient)
      .then(()=>{
        console.log("ingredient was changed")
      })
      .catch((err)=>{
        console.log(err.response)
      })
    axiosWithAuth()
      .put(`/recipes/${recipe.recipe_id}/instructions`, recipe)
      .then(()=>{
        console.log("instructions was changed")
      })
      .catch((err)=>{
        console.log(err.response)
      })
    history.push("/recipes")
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h1>Edit Recipe</h1>
        <h2>{recipe.title}</h2>
        <h2>{recipe.author}</h2>
        <h2>{recipe.category}</h2>
        <InputContainer>
          <label htmlFor="ingredients">
            <h2>Ingredients:</h2>
          </label>
          <Input
            type="textarea"
            name="ingredient_amount"
            id="ingredients"
            placeholder="List of ingredients..."
            onChange={changeIngredient}
            value={ingredient.ingredient_amount}
          />
          <Input
            type="textarea"
            name="ingredient_name"
            id="ingredients"
            placeholder="List of ingredients..."
            onChange={changeIngredient}
            value={ingredient.ingredient_name}
          />
          <label htmlFor="Instructions">
            <h2>Instructions:</h2>
            <Input
              type="textarea"
              name="instruction_decription"
              id="instructions"
              placeholder="Step by step instructions..."
              onChange={changeInstruction}
              value={instruction.instruction_description}
            />
          </label>
          <Button type="submit">Save changes</Button>
          
          <Button onClick={()=>{cancel()}}> Cancel </Button>
         
        </InputContainer>
      </form>
    </FormContainer>
  );
};

export default EditRecipe;
