import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form id="register">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          onChange={(event) => onChange(event)}
          name="firstname"
          value={registerForm.firstname}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          onChange={(event) => onChange(event)}
          name="lastname"
          value={registerForm.lastname}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(event) => onChange(event)}
          name="email"
          value={registerForm.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(event) => onChange(event)}
          name="password"
          value={registerForm.password}
        />
        <button type="submit" id="submit">
          Register Now
        </button>
      </form>
      <h2>
        {registerForm.firstname} {registerForm.lastname}
      </h2>
      <p>{registerForm.email}</p>
      <p>{registerForm.password}</p>
    </div>
  );
};

export default Register;
