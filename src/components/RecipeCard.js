import React from "react";


import { Title, FormContainer, Button } from "./StyledComponents";
import { useHistory } from "react-router-dom";



// const RecipeCard = ({ recipe }) => {
//   const history = useHistory()
//   const routeToRecipe = e => {
//     e.preventDefault()
//     history.push(`/recipes/${recipe.id}`)
//   }

const RecipeCard = (props) => {
  const { recipe, ingredients, instructions } = props
  
  const history = useHistory()
  
  // const [edit, setEdit] = useState(false);
  const deleteRecipe = () => {
    // axiosWithAuth().delete(`/recipes/${id}`, recipe)
    // .then(res=>{
    //   console.log("recipe delete successful")
    //   history.push("/recipes")
    // })
    // .catch(err=>{
    //   console.log(err.response)
    // })
  }
  return (
    <div>
      <h1>RecipeCard</h1>
      <FormContainer style={{backgroundColor: "white"}}>
        
          <Title> Title: </Title>

          <h3>{recipe.title}</h3>
        
        
          <Title> Source: </Title>
          <h3>{recipe.author}</h3>
       
        
          <Title> Category: </Title>
          <h3>{recipe.category}</h3>
       
          {ingredients.map((ingredient)=>{
 
            return (
            <>
            <Title key={ingredient.recipe_id}> Ingredients: </Title>
             <h3>{ingredient.ingredient_amount}</h3>
             <h3>{ingredient.ingredient_name}</h3>
            </>
             )}
          )}
          {instructions.map((instruction)=>{
            return(
              <>
              <Title key={instruction.recipe_id}> Instructions: </Title>
              <h3>{instructions.instruction_description}</h3>
              </>
            )
          })}
        
        <Button
          className="edit-button"
          onClick={() => {
            history.push(`/editrecipe/${recipe.recipe_id}`)
          }}
        >
          EDIT
        </Button>
        <Button
          className="edit-button"
          onClick={() =>{deleteRecipe()}}
        >
          DELETE
        </Button>
      </FormContainer>
    </div>
  );
};
// const mapsStateToProps = state => {
//   return {
//       recipe: state.recipe,
      
//   }
// }
// export default connect(mapsStateToProps, {fetchRecipeById})(RecipeCard)
export default RecipeCard;