import 
{ 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL,
    FETCH_START_BY_ID, 
    FETCH_SUCCESS_BY_ID,
    FETCH_FAIL_BY_ID, 
    ADD_RECIPE, 
    ADD_INGREDIENT, 
    ADD_INSTRUCTION, 
    EDIT_INGREDIENT, 
    EDIT_INSTRUCTION, 
    DELETE_RECIPE, 
    SET_ERROR 
} 
from '../actions/index'
//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.

export const initialState = {
    recipe: [],
    loading: true,
    error: "",
}


const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: "",
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                recipe: action.payload,
                error: "",
            }
        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                recipe: [],
                error: action.payload,
            }
        case FETCH_START_BY_ID:
            return {
                ...state,
                loading: true,
                error: "",
            }

        case FETCH_SUCCESS_BY_ID:
            return {
                ...state,
                loading: false,
                recipe: action.payload,
                error: "",
            }
        case FETCH_FAIL_BY_ID:
            return {
                ...state,
                loading: false,
                recipe: [],
                error: action.payload,
            }
        case ADD_RECIPE:
            return {
                ...state,
                recipe: [...state.recipe, action.payload]
            }
        case ADD_INGREDIENT:
            return {
                ...state,
                recipe: [...state.recipe, action.payload]
                }
        case ADD_INSTRUCTION:
            return {
                ...state,
                recipe: [...state.recipe, action.payload]
            }
        case EDIT_INGREDIENT:
            return {
                ...state,
                recipe: [...state.recipe, action.payload]
            }
        case EDIT_INSTRUCTION:
        return {
            ...state,
            recipe: [...state.recipe, action.payload]
        }
        case DELETE_RECIPE:
            return {
                ...state,
                recipe: [...state.recipe, action.payload]
            } 
        default:
            return state;
    }
    
}

export default reducer;