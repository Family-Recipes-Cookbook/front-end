import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";


// import styled from "styled-components";
import {  FormContainer, Input, Button } from "./StyledComponents";
import { Row } from "reactstrap";
// import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

// import { v4 as uuid } from "uuid";

const RecipeList = (props) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  
  // const userId = Number(localStorage.getItem("userId"));
  // const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get("/recipes")
      .then((res) => {
        console.log(res.data)
         setAllRecipes(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    setSearchTerm(event.target["title"].value);
    event.preventDefault();
  };

  // const handleDelete = (e) => {
  //   const url = `https://tt18familyrecipe.herokuapp.com/api/recipes/${recipes.id}`;
    
  //   axios
  //   .delete(url)
  //   .then(res => {
  //     const deleteRecipe = this.state.?.filter( item => item.id !== id);
  //     this.setState({posts})
  //   })
  // }
  return (
    <FormContainer>
      <h1>RECIPE LIST</h1>
      <form onSubmit={handleSubmit}>
        <div className="searchbox">
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Search Recipe"
            onChange={handleChange}
            value={searchTerm}
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      {allRecipes.map((recipe)=>{
        return(<RecipeCard key={recipe.recipe_id} recipe={recipe} ingredients={recipe.ingredients} instructions={recipe.instructions} />)
      })}
      <Row>
        {/* {allRecipes.map((recipe) => {
          if (
            recipe.title &&
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return (
              <Col key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </Col>
            );
          } else return null;
        })} */}
      </Row>
     
      {/* <div>
        {allRecipes.map((recipe) => {
          return(
          <div key={recipe.recipe_id}>
            <h1>{recipe.title}</h1>
            <h3>{recipe.author}</h3>
            <button onClick={()=>{history.push(`/recipe/${recipe.recipe_id}`)}}>View Detials</button>
          </div>)
          // return <RecipeCard key={recipe.title} recipe={recipe}/>;
        })}
      </div> */}

      {/* <div className="recipes">
        <div>
          <Question>No recipes yet?</Question>
          <Link to="/addrecipe">
            <Button type="submit">Add New Recipe</Button>
          </Link>
        </div>
      </div> */}
    </FormContainer>
  );
};

export default RecipeList ;
