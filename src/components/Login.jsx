import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledForm id="register">
      <FormDiv className="form-container">
        <StyledLabel htmlFor="email" classNamee="form-label">
          Email
        </StyledLabel>
        <StyledInput
          type="email"
          id="email"
          onChange={(event) => onChange(event)}
          name="email"
          value={loginForm.email}
        />
        <StyledLabel htmlFor="password" classNamee="form-label">
          Password
        </StyledLabel>
        <StyledInput
          type="password"
          id="password"
          onChange={(event) => onChange(event)}
          name="password"
          value={loginForm.password}
        />
        <StyledButton type="submit" id="submit">
          Register Now
        </StyledButton>
      </FormDiv>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100vw;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15px;
  padding-bottom: 0px;
  border: 2px solid orangered;
`;

const StyledLabel = styled.label`
  margin-bottom: 10px;

  font-weight: bold;
  color: orangered;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  border: 1px solid orangered;
  color: orangered;
`;

const StyledButton = styled.button`
  background-color: orangered;
  color: white;
  border: 2px solid orangered;
  padding: 5px;
  width: 117%;

  :hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export default Login;
