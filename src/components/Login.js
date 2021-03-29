import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <FormContainer>
      <h1>Login</h1>
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
