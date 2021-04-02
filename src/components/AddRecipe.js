import React, { useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import Ingredient from './Ingredients';
import Instructions from './Instructions';
import axios from "axios";
// import { Button } from "reactstrap";

const initialState = {
  title: "",
  author: "",
  category: "",
};

const AddRecipe = () => {
  // const userId = Number(localStorage.getItem('userId'))
  const [newRecipe, setNewRecipe] = useState(initialState);
  // const [ ingredients, setIngredients ] = useState({ingredient_amount: "", ingredient_name: ""});
  // const [ instructions, setInstructions ] = useState({instruction_description: ""});
  // const userId = Number(localStorage.getItem("userId"));

  const history = useHistory();
  

  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
    // setIngredients({...ingredients, [e.target.name]: e.target.value})
    // setInstructions({...instructions, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    console.log(newRecipe)
    e.preventDefault();
    // setNewRecipe({
    //   title: newRecipe.title,
    //   source: newRecipe.source,
    //   ingredients: newRecipe.ingredients,
    //   instructions: newRecipe.instructions,
    //   category: newRecipe.category,
    // });
    axios
    .post("https://tt18familyrecipe.herokuapp.com/api/recipes", newRecipe)
    .then(res=>{
    
      console.log("Adding Recipe Successfull", res.data)
      
      history.push("/recipes")
    })
    .catch(err=>{
      console.log("Adding Recipe Unsuccessfull: ", err.response)
    })
    
  };

  

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h1>Add a Recipe</h1>
        <InputContainer>
          <label htmlFor="title">
            <h2>Title:</h2>
            <Input
              type="text"
              name="title"
              placeholder="Recipe Title"
              onChange={handleChange}
              value={newRecipe.title}
            />
          </label>
          <label htmlFor="creator"> 
            <h2>Creator:</h2>
            <Input
              type="text"
              name="author"
              placeholder="Who created this?"
              onChange={handleChange}
              value={newRecipe.author}
            />
          </label>
          <label htmlFor="Category"> 
  
            <Select name="category" value={newRecipe.category} onChange={handleChange}>
              <option value="">Add category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>

            </Select> 
          </label> 
          
          
          <Button type="submit">Add Recipe</Button>
        </InputContainer>
       </form>
      <Ingredient />
      <Instructions />
      {/* <form>
        <InputContainer>
          <label htmlFor="ingredients">
                <h2>Ingredients:</h2>
              </label>
              <Input
                type="textarea"
                name="ingredient_amount"
                placeholder="Amount"
                onChange={handleChange}
                value={ingredients.ingredient_amount}
              />
            <label htmlFor="ingredients">
                <h2>Ingredients:</h2>
            </label>
            <Input
              type="textarea"
              name="ingredient_name"
              placeholder="Ingredient Name"
              onChange={handleChange}
              value={ingredients.ingredient_name}
            />
        </InputContainer>
      </form>
      <form>
        <InputContainer>
          <label htmlFor="Instructions">
                <h2>Instructions:</h2>
                <Input
                  // rows="550"
                  // cols="550"
                  type="textarea"
                  name="instruction_description"
                  placeholder="Step by step instructions..."
                  onChange={handleChange}
                  value={instructions.instruction_description}
                />
            </label>
        </InputContainer>
      </form> */}
    </FormContainer>
  );
};

const FormContainer = styled.div`
  border: 1px solid darkgrey;
  border-radius: 20px;
  color: #0e2923;
  margin: 3rem 16rem;
  padding: 2rem;
  text-align: center;

  backdrop-filter: blur(5px);
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
`;
const Input = styled.input`
  border: 2px solid darkgrey;
  border-radius: 10px;
  font-size: 1em;

  padding: 14px;
  width: 100%;
`;

const Select = styled.select`
  border: 2px solid darkgrey;
  border-radius: 3px;
  font-size: 1em;
  margin: 1rem 4rem;
  padding: 14px;
`;
const Button = styled.button`
  background-color: #0e2923;
  border: 0;
  border-radius: 5px;
  color: white;
  height: 3rem;
  letter-spacing: 0.175em;
  line-height: 3rem;
  margin: 1rem auto;
  padding: 0 2rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`;

export default AddRecipe;
