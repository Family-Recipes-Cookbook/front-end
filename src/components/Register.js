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

//////////INITIAL VALUES//////////

const initialFormValues = {
  email: "",
  username: "",
  password: "",
  personalName: "",
  age: "",
  phone: "",
};
const initialFormErrors = {
  email: "",
  username: "",
  password: "",
  personalName: "",
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
      personalName: formValues.name.trim(),
      age: parseInt(formValues.age).toString(),
      phone: parseInt(formValues).phone.toString(),
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
        <h1>SignUp</h1>
        <h2>Welcome to the Family Recipes Cookbook</h2>

        <InputContainer>
          <label>
            <Input
              name="personalName"
              type="string"
              onChange={onChange}
              value={formValues.personalName}
              placeholder="Name"
            />
            <p className="error-message">{formErrors.personalName}</p>
          </label>
          <label>
            <Input
              name="age"
              type="string"
              onChange={onChange}
              value={formValues.age}
              placeholder="Age in years"
            />
            <p className="error-message">{formErrors.age}</p>
          </label>
          <label>
            <Input
              name="phone"
              type="tel"
              value={formValues.phone}
              onChange={onChange}
              placeholder="Phone 123-456-7890"
              pattern="[0-9]{3}-[0-9{3}-[0-9]{3}"
            />
            <p className="error-message">{formErrors.phone}</p>
          </label>
          <label>
            <Input
              name="email"
              type="email"
              value={formValues.email}
              onChange={onChange}
              placeholder="Email"
            />
            <p className="error-message">{formErrors.email}</p>
          </label>
          <label>
            <Input
              name="username"
              type="text"
              value={formValues.name}
              onChange={onChange}
              placeholder="Username"
            />
            <p className="error-message">{formErrors.username}</p>
          </label>
          <label>
            <Input
              name="password"
              type="password"
              value={formValues.password}
              onChange={onChange}
              placeholder="Password"
            />
            <p className="error-message">{formErrors.password}</p>
          </label>
          <Button disabled={disabled}>Login</Button>
        </InputContainer>
      </form>
    </FormContainer>
  );
};

export default Register;
