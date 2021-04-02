import React, { useState } from "react";
// import styled from "styled-components";
import {
  FormContainer,
  InputContainer,
  Input,
  Select,
  Button,
} from "./StyledComponents";
import { useHistory, Link } from "react-router-dom";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialState = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
};

const EditRecipe = () => {
  // const { id } = useParams();
  const history = useHistory();
  const [recipe, setRecipe] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Put recipe in handle submit");
    axiosWithAuth().put('/recipes/:recipe_id/instructions/:instruction_id', recipe)
  };

  const changeHandler = (ev) => {
    ev.persist();
    setRecipe({ ...recipe, [ev.target.name]: ev.target.value });
  };

  const cancel = (e) => {
    e.preventDefault();
    // history.push(`/recipes/${id}`);
  };

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/recipes/${id}`)
  //     .then((res) => {
  //       console.log("edit recipe get response", res);
  //       setRecipe(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h1>Edit Recipe</h1>
        <InputContainer>
          <label htmlFor="title">
            <h2>Title:</h2>
            <p>{recipe.title}</p>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Recipe Title"
              onChange={changeHandler}
              value={recipe.title}
            />
          </label>
          <label htmlFor="creator">
            <h2>Creator:</h2>
            <p>{recipe.author}</p>
            <Input
              type="text"
              name="author"
              id="source"
              placeholder="Who created this?"
              onChange={changeHandler}
              value={recipe.author}
            />
          </label>
          <label htmlFor="Category">
            <h2>Category:</h2>

            <Select name="category" value={recipe.category} onChange={changeHandler}>
              <option value="">Add category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              {/* <option>Cookies</option>
              <option>Dessert</option>
              <option>Bread</option>
              <option>Salad</option>
              <option>Soup</option> */}
            </Select>
          </label>
          <label htmlFor="ingredients">
            <h2>Ingredients:</h2>
          </label>
          <Input
            type="textarea"
            name="ingredients"
            id="ingredients"
            placeholder="List of ingredients..."
            onChange={changeHandler}
            // value={newRecipe.ingredients}
          />
          <label htmlFor="Instructions">
            <h2>Instructions:</h2>
            <Input
              type="textarea"
              name="instructions"
              id="instructions"
              placeholder="Step by step instructions..."
              onChange={changeHandler}
              // value={newRecipe.instructions}
            />
          </label>
          <Button type="submit">Save changes</Button>
          <Link to="/recipes">
            <Button> Cancel </Button>
          </Link>
        </InputContainer>
      </form>
    </FormContainer>
  );
};

export default EditRecipe;
