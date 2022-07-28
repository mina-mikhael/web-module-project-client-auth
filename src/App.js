import React from "react";
import "./App.css";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriends from "./components/AddFriends";
import Logout from "./components/logout";
import PrivateRoute from "./components/PrivateRoute";

import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";

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

      <PrivateRoute exact path="/friends" component={FriendList} />
      <PrivateRoute exact path="/friends/add" component={AddFriends} />
      <PrivateRoute exact path="/logout" component={Logout} />
    </Router>
  );
}

export default App;
