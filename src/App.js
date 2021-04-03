import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./helpers/PrivatRoute";

// components
import Navigation from "./Navigation";
import AddNewRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";

import RecipeList from "./components/RecipeList";
import RegistrationForm from "./components/Register";
import LoginForm from "./components/Login";

import "./App.css";
// import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="realApp">
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <PrivateRoute path="/addrecipe" component={AddNewRecipe} />
          <PrivateRoute path="/editrecipe/:id" component={EditRecipe} />
          {/* <PrivateRoute path="/recipe/" component={RecipeCard} /> */}
          <PrivateRoute path="/recipes" component={RecipeList} />
          <Route path="/registration" component={RegistrationForm} />

         
        </Switch>
      </div>
    </div>
  );
}

export default App;
