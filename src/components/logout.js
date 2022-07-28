import React, { useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios
      .post("http://localhost:9000/api/logout", null, { headers: { authorization: token } })
      .then(() => {
        window.localStorage.removeItem("token");
      })
      .catch((err) => {
        console.log(err);
      });
    push("/login");
  }, []);

  return <div></div>;
};

export default Logout;
