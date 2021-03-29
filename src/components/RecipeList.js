import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import axios from "axios";

// import { v4 as uuid } from "uuid";

const RecipeList = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const userId = Number(localStorage.getItem("userId"));
  // const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((res) => {
  //        setAllRecipes(res.data.filter(recipe => recipe.userId === userId))
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [userId]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    setSearchTerm(event.target["title"].value);
    event.preventDefault();
  };

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
      <Row>
        {allRecipes.map((recipe) => {
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
        })}
      </Row>
      <div>
        {allRecipes.map((item) => {
          return <RecipeCard details={item} key={item.class_id} />;
        })}
      </div>

      <div className="recipes">
        <div>
          <Question>No recipes yet?</Question>
          <Link to="/addrecipe">
            <Button type="submit">Add New Recipe</Button>
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};

const Question = styled.h3`
  color: red;
  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0);
`;

const FormContainer = styled.div`
  border: 1px solid darkgrey;
  border-radius: 20px;
  color: #0e2923;
  margin: 3rem 16rem;
  padding: 2rem;
  text-align: center;

  backdrop-filter: blur(5px);
`;
const Input = styled.input`
  border: 2px solid darkgrey;
  border-radius: 10px;
  font-size: 1em;

  padding: 14px;
  width: 100%;
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
export default RecipeList;
