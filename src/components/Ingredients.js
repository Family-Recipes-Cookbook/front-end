

import React, { useState } from "react";

import { useParams } from "react-router-dom";

// import styled from "styled-components";

import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Ingredients  = () => {

    const { id } = useParams()

    const [ newIngredient, setNewIngredient] = useState({ingredient_amount: '', ingredient_name: ''})

    

    const handleChange = (e) => {

        setNewIngredient({

          ...newIngredient,

          [e.target.name]: e.target.value,

        });

      };

      const handleSubmit = (e) => {

        console.log('here')

        e.preventDefault();

          axiosWithAuth()

          .post(`/recipes/${id}/ingredients`, newIngredient)

          .then(res => {

            console.log('Ingredients successfully added')

          })

          .catch(err => {

            console.log(err.response)

          })

      }

      return(

        <form onSubmit = {handleSubmit}>

        <label htmlFor="ingredients">

          <h2>Ingredients:</h2>

        </label>

        <input

          type="textarea"

          name="ingredient_amount"

          id="ingredients"

          placeholder="Amount of ingredients..."

          onChange={handleChange}

          value={newIngredient.ingredient_amount}

        />

        <input

          type="textarea"

          name="ingredient_name"

          id="ingredients"

          placeholder="Name of ingredients..."

          onChange={handleChange}

          value={newIngredient.ingredient_name}

        />

        <button>Add Ingredient</button>

          </form>

      )

}

export default Ingredients;

