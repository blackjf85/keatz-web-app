import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(false);

  const onChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setRegister(true);
  };

  useEffect(() => {
    if (register === true) {
      axios
        .post(`${BASE_URL}/v1/auth/register`, {
          firstname: registerForm.firstname,
          lastname: registerForm.lastname,
          email: registerForm.email,
          password: registerForm.password,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));

      setRegister(false);
    }
  }, [register, registerForm]);

  return (
    <StyledForm id="register">
      <FormDiv className="form-container">
        <StyledLabel htmlFor="firstname" classNamee="form-label">
          First Name
        </StyledLabel>
        <StyledInput
          type="text"
          id="firstname"
          onChange={(event) => onChange(event)}
          name="firstname"
          value={registerForm.firstname}
        />
        <StyledLabel htmlFor="lastname" classNamee="form-label">
          Last Name
        </StyledLabel>
        <StyledInput
          type="text"
          id="lastname"
          onChange={(event) => onChange(event)}
          name="lastname"
          value={registerForm.lastname}
        />
        <StyledLabel htmlFor="email" classNamee="form-label">
          Email
        </StyledLabel>
        <StyledInput
          type="email"
          id="email"
          onChange={(event) => onChange(event)}
          name="email"
          value={registerForm.email}
        />
        <StyledLabel htmlFor="password" classNamee="form-label">
          Password
        </StyledLabel>
        <StyledInput
          type="password"
          id="password"
          onChange={(event) => onChange(event)}
          name="password"
          value={registerForm.password}
        />
        <StyledButton type="submit" id="submit" onClick={onSubmit}>
          Register Now
        </StyledButton>
      </FormDiv>
      <div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
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

export default Register;
