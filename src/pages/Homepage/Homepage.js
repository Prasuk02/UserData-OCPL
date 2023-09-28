import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homepage.css";
import UserCard from "../../components/UserCard/UserCard";
import UsersNotFound from "../../components/UsersNotFound/UsersNotFound";
import PaginationNav from "../../components/Pagination/PaginationNav";

const Homepage = () => {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const totalPages = Math.ceil(usersData.length / usersPerPage);
  const newUserData = usersData.slice(firstIndex, lastIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
        {newUserData.length ? (
          newUserData.map((user) => {
            return <UserCard user={user} />;
          })
        ) : (
          <UsersNotFound />
        )}
      </div>

      <PaginationNav
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Homepage;
