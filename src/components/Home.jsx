import React from "react";
import Register from "./Register";

const Home = (props) => {
  return <div>{props.isLoggedIn === false ? <Register /> : <p>Hello!</p>}</div>;
};

export default Home;
