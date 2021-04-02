import React from "react";
// import styled from "styled-components";
import {
  FormContainer,
  InputContainer,
  Input,
  Button,
} from "./StyledComponents";
import { useEffect, useState } from "react";
import * as yup from "yup";
import schema from "../validation/register_schema";
import axios from "axios";
import { useHistory } from "react-router";

//////////INITIAL VALUES//////////

const initialFormValues = {
  email: "",
  username: "",
  password: "",
  name: "",
  age: "",
  phone: "",
};
const initialFormErrors = {
  email: "",
  username: "",
  password: "",
  name: "",
  age: "",
  phone: "",
};

//////////MAIN FUNCTION//////////

const Register = () => {

  //////////STATES//////////

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  //////////HELPERS//////////

  const postLogin = (cleanFormValues) => {
    // axios
    // alert(JSON.stringify(cleanFormValues));
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
      personalName: formValues.name.trim(),
      age: parseInt(formValues.age).toString(),
      phone: formValues.phone.toString(),
    };
    postLogin(cleanFormValues);
  };
  const history = useHistory()
  const onSubmit = (e) => {
    e.preventDefault();
    submitForm();
    axios.post('https://tt18familyrecipe.herokuapp.com/api/auth/register', formValues)
    .then(res=>{
      console.log("success")
      console.log(res)
      history.push('/')
    })
    .catch(err=>{
      console.log(err.response)
    })
  };
  //////////EFFECTS//////////

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  //////////RETURN COMPONENT//////////

  return (
    <FormContainer>
      <form className="form-container" onSubmit={onSubmit}>
        <h1>SignUp</h1>
        <h2>Welcome to the Family Recipes Cookbook</h2>

        <InputContainer>
          <label>
            <Input
              name="name"
              type="string"
              onChange={onChange}
              value={formValues.name}
              placeholder="Name"
            />
            <strong className="error-message">{formErrors.personalName}</strong>
          </label>
          <label>
            <Input
              name="age"
              type="string"
              onChange={onChange}
              value={formValues.age}
              placeholder="Age in years"
            />
            <strong className="error-message">{formErrors.age}</strong>
          </label>
          <label>
            <Input
              name="phone"
              type="tel"
              value={formValues.phone}
              onChange={onChange}
              placeholder="Phone 123-456-7890"
              pattern="[0-9]{3}-[0-9{3}-[0-9]{4}"
            />
            <strong className="error-message">{formErrors.phone}</strong>
          </label>
          <label>
            <Input
              name="email"
              type="email"
              value={formValues.email}
              onChange={onChange}
              placeholder="Email"
            />
            <strong className="error-message">{formErrors.email}</strong>
          </label>
          <label>
            <Input
              name="username"
              type="text"
              value={formValues.username}
              onChange={onChange}
              placeholder="Username"
            />
            <strong className="error-message">{formErrors.username}</strong>
          </label>
          <label>
            <Input
              name="password"
              type="password"
              value={formValues.password}
              onChange={onChange}
              placeholder="Password"
            />
            <strong className="error-message">{formErrors.password}</strong>
          </label>
          <Button disabled={disabled}>SignUp</Button>
        </InputContainer>
      </form>
    </FormContainer>
  );
};

export default Register;
