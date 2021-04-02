import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Nav, NavLink } from "reactstrap";

function Navigation() {
  const logout = () => {
    localStorage.removeItem('token')
  }
  return (
    <Navbar>
      <div className="nav">
        <div>
          <h1>Secret Family Recipes</h1>
        </div>
        <Nav>
          <ul className="nav-links">
            <NavLink tag={Link} to="/">
              <h3>Login</h3>
            </NavLink>
            
            < NavLink tag={Link} to="/registration">
              <h3>SignUp</h3>
            </NavLink>

            {/* <NavLink tag={Link} to="/recipe/:id">
              <h3>RecipeCard</h3>
            </NavLink>} */}
          
            {/* <NavLink tag={Link} to="/editrecipe">
              <h3>Edit Recipes</h3>
            </NavLink>} */}
            <NavLink tag={Link} to="/" onClick={logout}>
            <h3>Logout</h3>
            </NavLink>
            <NavLink tag={Link} to="/addrecipe">
            <h3>Add Recipe</h3>
            </NavLink>
            <NavLink tag={Link} to="/recipes">
            <h3>Recipe List!</h3>
            </NavLink>
            
          </ul>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Navigation;
