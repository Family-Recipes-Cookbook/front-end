import React from "react";
import styled from "styled-components";
import {
  FormContainer,
  InputContainer,
  Input,
  Button,
} from "./StyledComponents";
import { useEffect, useState } from "react";
import * as yup from "yup";
import schema from "../validation/login_schema";
import axios from "axios";
import { useHistory } from "react-router";

//////////INITIAL VALUES//////////

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

//////////MAIN FUNCTION//////////

const Login = () => {
  //////////STATES//////////

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  //////////HELPERS//////////
  const history = useHistory()
  const postLogin = (cleanFormValues) => {
    axios.post("https://tt18familyrecipe.herokuapp.com/api/auth/login", cleanFormValues)
    .then(res=>{
      console.log("login success", res.data)
      alert(res.data.message)
      localStorage.setItem('token', res.data.token)
      history.push("/recipes")
    })
    .catch(err=>{
      console.log("login unsuccessful: ", err.response)
    })
  };
  //////////EVENT HANDLERS//////////

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
    yup
      .reach(schema, name)
      .validate(value)
      .then(() =>
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      )
      .catch((err) =>
        setFormErrors({
          ...setFormErrors,
          [name]: err.errors[0],
        })
      );
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    inputChange(name, value);
  };

  const submitForm = () => {
    const cleanFormValues = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    postLogin(cleanFormValues);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submitForm();
    
  };
  //////////EFFECTS//////////

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  //////////RETURN COMPONENT//////////

  return (
    <FormContainer>
      <form className="form-container" onSubmit={onSubmit}>
        <h1>Login</h1>
        <h2>Welcome to the Family Recipes Cookbook</h2>

        <InputContainer>
          <label>
            <Input
              name="username"
              type="text"
              value={formValues.username}
              onChange={onChange}
              placeholder="Username"
            />
            <p>{formErrors.username}</p>
          </label>
          <label>
            <Input
              name="password"
              type="password"
              value={formValues.password}
              onChange={onChange}
              placeholder="Password"
            />
            <p>{formErrors.password}</p>
          </label>
          <Button disabled={disabled}>Login</Button>
        </InputContainer>
      </form>
    </FormContainer>
  );
};

export default Login;
