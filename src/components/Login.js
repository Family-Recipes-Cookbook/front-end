import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import * as yup from "yup";
import schema from "../validation/login_schema";

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

  const postLogin = (cleanFormValues) => {
    // axios
    alert(cleanFormValues);
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
      <h1>Login</h1>
      <h2>Welcome to the Family Recipes Cookbook</h2>

      <form className="form-container" onSubmit={onSubmit}>
        <label>
          <input
            name="username"
            type="text"
            value={formValues.name}
            onChange={onChange}
            placeholder="Username"
          ></input>
          <p>{formErrors.username}</p>
        </label>
        <label>
          <input
            name="password"
            type="password"
            value={formValues.password}
            onChange={onChange}
            placeholder="Password"
          ></input>
          <p>{formErrors.password}</p>
        </label>
        <button disabled={disabled}>Login</button>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  border: 1px solid darkgrey;
  border-radius: 20px;
  color: #0e2923;
  margin: 3rem 16rem;
  padding: 2rem;
  text-align: center;

  backdrop-filter: blur(5px);
`;

export default Login;
