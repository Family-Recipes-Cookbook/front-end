import React, { useState } from "react";

import { axiosWithAuth } from '../helpers/axiosWithAuth';

import { useParams } from "react-router-dom";

const Instructions  = () => {

    const id = useParams()

    console.log(id)

    const [ newInstructions, setNewInstructions] = useState({instruction_description: ""})

    

    const handleChange = (e) => {

        setNewInstructions({

          ...newInstructions,

          [e.target.name]: e.target.value,

        });

      };

      const handleSubmit = (e) => {

        console.log('here')

        e.preventDefault();

          axiosWithAuth()

          .post(`/recipes/${id}/instructions/1`, newInstructions)

          .then(res => {

            console.log('Instructions successfully added')

          })

          .catch(err => {

            console.log(err.response)

          })

      }

return(

    <form onSubmit = {handleSubmit}>

    <label htmlFor="instructions">

      <h2>Instructions:</h2>

    </label>

    <input

      type="textarea"

      name="instruction_description"

      id="instructions"

      placeholder="Instruction description..."

      onChange={handleChange}

      value={newInstructions.instruction_description}

    />

    <button>Add Instructions</button>

      </form>

  )

}

export default Instructions