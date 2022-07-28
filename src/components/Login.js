/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";

const initialUser = {
  username: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(initialUser);

  const chaneHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", user)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        setUser(initialUser);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Login</h2>
      <>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">User Name</label>
            &nbsp;
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={chaneHandler}
              placeholder="enter your username here"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            &nbsp;
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={chaneHandler}
              placeholder="enter your password here"
            />
          </div>
          <button> Submit</button>
        </form>
      </>
    </div>
  );
};

export default Login;
