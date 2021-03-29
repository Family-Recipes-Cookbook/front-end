import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap";

function Navigation() {
  return (
    <Navbar>
      <div>
        <div className="nav">
          <NavbarBrand>
            <NavLink tag={Link} to="/">
              <h1>Secret Family Recipes</h1>
            </NavLink>
          </NavbarBrand>

          <Nav>
            <ul className="nav-links">
              <NavLink tag={Link} to="/login">
                <h3>Login</h3>
              </NavLink>

              <NavLink tag={Link} to="/recipes">
                <h3>Recipe List!</h3>
              </NavLink>

              <NavLink tag={Link} to="/recipecard">
                <h3>RecipeCard</h3>
              </NavLink>
              <NavLink tag={Link} to="/addrecipe">
                <h3>Add Recipe</h3>
              </NavLink>
              <NavLink tag={Link} to="/editrecipe">
                <h3>Edit Recipes</h3>
              </NavLink>

              <NavLink tag={Link} to="/registration">
                <h3>SignUp</h3>
              </NavLink>
              <NavLink tag={Link} to="/login">
                <h3>Logout</h3>
              </NavLink>
              {/* <NavLink tag={Link} to="/recipepage">
                <h3>PAGE</h3>
              </NavLink> */}
            </ul>
          </Nav>
        </div>
      </div>
    </Navbar>
  );
}

export default Navigation;
