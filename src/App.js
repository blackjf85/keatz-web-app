import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Home path="/" exact isLoggedIn={isLoggedIn} />
          <Register path="/register" />
          <Login path="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
