import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Navigation from "./Navigation";
import AddNewRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";

import RecipeList from "./components/RecipeList";
import RegistrationForm from "./components/Register";
import LoginForm from "./components/Login";

import "./App.css";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="realApp">
        <Switch>
          <Route path="/addrecipe" component={AddNewRecipe} />
          <Route path="/editrecipe" component={EditRecipe} />
          <Route path="/recipecard" component={RecipeCard} />
          <Route path="/recipes" component={RecipeList} />
          <Route path="/registration" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />

          <Route path="/" component={RecipeList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
