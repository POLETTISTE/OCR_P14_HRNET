import "./style.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-message">
      Sorry, the page you're looking for doesn't exist
      <NavLink to={"/"}>
        <p>back to the home page</p>
      </NavLink>
    </div>
  );
};

export default Error;
