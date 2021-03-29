import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";

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
  // }, [id]);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h1>Edit Recipe</h1>
        <InputContainer>
          <label htmlFor="title">
            <h2>Title:</h2>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Recipe Title"
              onChange={changeHandler}
              // value={newRecipe.title}
            />
          </label>
          <label htmlFor="creator">
            <h2>Creator:</h2>
            <Input
              type="text"
              name="source"
              id="source"
              placeholder="Who created this?"
              onChange={changeHandler}
              // value={newRecipe.source}
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

export default EditRecipe;
