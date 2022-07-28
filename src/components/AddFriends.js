import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialForm = {
  name: "",
  age: "",
  email: "",
};

const AddFriends = () => {
  const [form, setForm] = useState(initialForm);
  const { push } = useHistory();

  const chaneHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    axios
      .post("http://localhost:9000/api/friends", form, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Add a New Friend</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">User Name</label>
          &nbsp;
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={chaneHandler}
            placeholder="enter your friend's username"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          &nbsp;
          <input
            type="text"
            id="age"
            name="age"
            value={form.age}
            onChange={chaneHandler}
            placeholder="enter your friend's age"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          &nbsp;
          <input
            type="v"
            id="email"
            name="email"
            value={form.email}
            onChange={chaneHandler}
            placeholder="enter your friend's email"
          />
        </div>
        <button> Submit</button>
      </form>
    </div>
  );
};

export default AddFriends;
