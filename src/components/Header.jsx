import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  return (
    <StyledDiv className="header-container">
      <h1 className="header-heading">Keatz App</h1>
      {!props.isLoggedIn ? (
        <StyledUl className="header-list">
          <StyledLi className="header-li">
            <NavLink to="/login">Login</NavLink>
          </StyledLi>
          <StyledLi className="header-li">
            <NavLink to="/register">Register</NavLink>
          </StyledLi>
        </StyledUl>
      ) : (
        <StyledUl className="header-list">
          <NavLink className="header-li">Logout</NavLink>
        </StyledUl>
      )}
    </StyledDiv>
  );
};

const NavLink = styled(Link)`
  text-decoration: none;
  background-color: orangered;
  color: white;

  border: 1px solid white;
  margin-left: 15px;
  padding: 7.5px;

  :hover {
    border: 1px solid black;
    background-color: white;
    color: orangered;
  }
`;

const StyledDiv = styled.div`
  font-family: sans-serif;
  background-color: orangered;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0px 15px;
  margin-bottom: 50px;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px 15px;
`;

const StyledLi = styled.li`
  :hover {
    cursor: pointer;
  }
`;

export default Header;
