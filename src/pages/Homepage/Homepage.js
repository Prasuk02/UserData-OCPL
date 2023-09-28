import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homepage.css";
import UserCard from "../../components/UserCard/UserCard";
import UsersNotFound from "../../components/UsersNotFound/UsersNotFound";

const Homepage = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      setUsersData(data);
    };

    fetchData();
  }, []);

  console.log(usersData);

  return (
    <>
      <div className="homepage-main-container">
        {usersData.length ? (
          usersData.map((user) => {
            return <UserCard user={user}/>;
          })
        ) : (
          <UsersNotFound/>
        )}
      </div>
    </>
  );
};

export default Homepage;
