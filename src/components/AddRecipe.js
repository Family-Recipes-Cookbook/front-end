import React, { useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import { Button } from "reactstrap";

const initialState = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
  user_id: 1,
};

const AddRecipe = () => {
  // const userId = Number(localStorage.getItem('userId'))
  const [newRecipe, setNewRecipe] = useState(initialState);
  const userId = Number(localStorage.getItem("userId"));

  const history = useHistory();
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewRecipe({
      title: newRecipe.title,
      source: newRecipe.source,
      ingredients: newRecipe.ingredients,
      instructions: newRecipe.instructions,
      category: newRecipe.category,
      user_id: userId,
    });

    history.push("/recipes");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.push("/recipes");
  // };

  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //    dispatch(
  //      postAddRecipe({
  //        title: newRecipe.title,
  //        source: newRecipe.source,
  //        ingredients: newRecipe.ingredients,
  //        instructions: newRecipe.instructions,
  //        category: newRecipe.category,
  //        user_id: userId,
  //      })
  //    );
  //    setNewRecipe(``);
  //    history.push("/recipes");
  //  };

  //  const submit = (event) => {
  //    event.preventDefault();

  //      .post(
  //        "URL",
  //        newRecipe
  //      )
  //      .then((res) => {
  //        setNewRecipe(res.data);
  //        push("/recipes");
  //        console.log(res.data, "posting data");
  //      })
  //      .catch((err) => {
  //        console.log(err, "error posting new item");
  //      });
  //    handleSubmit();
  //  };

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
              id="title"
              placeholder="Recipe Title"
              onChange={handleChange}
              value={newRecipe.title}
            />
          </label>
          <label htmlFor="creator">
            <h2>Creator:</h2>
            <Input
              type="text"
              name="source"
              id="source"
              placeholder="Who created this?"
              onChange={handleChange}
              value={newRecipe.source}
            />
          </label>
          <label htmlFor="Category">
            <h2>Category:</h2>

            <Select>
              <option>Add category</option>
              <option>Lunch</option>
              <option>Breakfast</option>
              <option>Dinner</option>
              <option>Cookies</option>
              <option>Dessert</option>
              <option>Bread</option>
              <option>Salad</option>
              <option>Soup</option>
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
            onChange={handleChange}
            value={newRecipe.ingredients}
          />
          <label htmlFor="Instructions">
            <h2>Instructions:</h2>
            <Input
              rows="550"
              cols="550"
              type="textarea"
              name="instructions"
              id="instructions"
              placeholder="Step by step instructions..."
              onChange={handleChange}
              value={newRecipe.instructions}
            />
          </label>
          <Button type="submit">Add Recipe</Button>
        </InputContainer>
      </form>
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
  margin: 4rem;
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
