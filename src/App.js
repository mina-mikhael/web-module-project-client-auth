import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriends from "./components/AddFriends";
import Logout from "./components/logout";

import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";

const isLoggedin = window.localStorage.getItem("isLogged");

function App() {
  return (
    <Router>
      <div className="navBar">
        <h1>Friends Data Base</h1>
        <div className="navLinks">
          <NavLink to={"/"}>Login</NavLink>
          <NavLink to={"/friends"}> Friend List</NavLink>
          <NavLink to={"/friends/add"}> Add Friend</NavLink>
          <NavLink to={"/logout"}> Logout</NavLink>
        </div>
      </div>

      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/Login">
        <Redirect to={"/"} />
      </Route>
      <Route exact path="/friends">
        <FriendList />
      </Route>
      <Route exact path="/friends/add">
        <AddFriends />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
    </Router>
  );
}

export default App;
