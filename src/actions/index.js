import { axiosWithAuth } from "../helpers/axiosWithAuth"

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START_BY_ID = "FETCH_START";
export const FETCH_RECIPE_BY_ID = "FETCH_RECIPE_BY_ID"
export const FETCH_SUCCESS_BY_ID = "FETCH_SUCCESS";
export const FETCH_FAIL_BY_ID = "FETCH_FAIL";
export const ADD_RECIPE = "ADD_RECIPE";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const EDIT_INGREDIENT = "EDIT_INGREDIENT";
export const EDIT_INSTRUCTION = "EDIT_INSTRUCTION";
export const DELETE_RECIPE = "DELETE_RECIPE"
export const SET_ERROR = "SET_ERROR";

//Task List:
//1. Add a thunk action called fetchRecipe that triggers a loading status display in our application, performs an axios call to retreive recipe from our api, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new recipe 
//3. Add a standard action that allows us to add ingredient
//4. Add a standard action that allows us to add instruction
//5. Add a standard action that allows us to edit ingredient
//6. Add a standard action that allows us to edit instruction
//6. Add a standard action that allows us to delete recipe 
//7. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchRecipe = (recipe) => {
    console.log('fetching recipe')
    return dispatch => {
        dispatch({type:FETCH_START });
        axiosWithAuth().get("/recipes")
        .then(res=>{
            console.log(res.data)
            dispatch({type:FETCH_SUCCESS, payload: res.data})
        })
        .catch(err=>{
            dispatch({type:FETCH_FAIL, payload: err})
        })
    }
}
export const fetchRecipeById = (id) => {
    console.log('fetching recipe')
    return dispatch => {
        dispatch({type:FETCH_START_BY_ID});
        axiosWithAuth().get(`/recipes/${id}`)
        .then(res=>{
            console.log(res.data)
            dispatch({type:FETCH_SUCCESS_BY_ID, payload: res.data})
        })
        .catch(err=>{
            dispatch({type:FETCH_FAIL_BY_ID, payload: err})
        })
    }
}

export const addRecipe = (recipe) => {
    return({type:ADD_RECIPE, payload: recipe})

}
export const addIngredient = (ingredient) => {
    return({type:ADD_INGREDIENT, payload: ingredient})

}
export const addInstruction = (instruction) => {
    return({type:ADD_INSTRUCTION, payload: instruction})

}
export const editIngredient = (ingredient) => {
    return({type:EDIT_INGREDIENT, payload: ingredient})

}
export const editInstruction= (instruction) => {
    return({type:EDIT_INSTRUCTION, payload: instruction})
}
export const deleteRecipe = (recipe) => {
    return({type:DELETE_RECIPE, payload: recipe})
}
export const setError = (error) => {
    return({type:SET_ERROR})
}