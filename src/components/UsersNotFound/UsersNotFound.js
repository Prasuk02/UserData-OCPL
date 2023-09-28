import React from "react";
import "./UsersNotFound.css";

const UsersNotFound = () => {
  return (
    <div className="users-not-found-container">
      <p>No users data available yet !!</p>
      <p>Please check the API call<br/>OR<br/>Try after inserting some user data</p>
    </div>
  );
};

export default UsersNotFound;
