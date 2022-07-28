import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map((frnd, idx) => {
          return (
            <li key={idx}>
              {" "}
              Name: {frnd.name} - Age: {frnd.age} - Email: {frnd.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
