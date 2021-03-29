import styled from "styled-components";

const Title = styled.h2`
  columns: purple;
`;

const Question = styled.h3`
  color: red;
  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0);
`;

const FormContainer = styled.div`
  border: 1px solid darkgrey;
  border-radius: 20px;
  color: #0e2923;
  margin: 3rem 16rem;
  padding: 2rem;
  text-align: center;

  backdrop-filter: blur(5px);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem;
`;

const Input = styled.input`
  border: 2px solid darkgrey;
  border-radius: 10px;
  font-size: 1em;

  padding: 14px;
  width: 100%;
`;

const Select = styled.select`
  border: 2px solid darkgrey;
  border-radius: 3px;
  font-size: 1em;
  margin: 1rem 4rem;
  padding: 14px;
`;

const Button = styled.button`
  background-color: #0e2923;
  border: 0;
  border-radius: 5px;
  color: white;
  height: 3rem;
  letter-spacing: 0.175em;
  line-height: 3rem;
  margin: 1rem 1rem;
  padding: 0 2rem;
  align-self: center;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`;

export {
  Title,
  Question,
  FormContainer,
  InputContainer,
  Input,
  Select,
  Button,
};
