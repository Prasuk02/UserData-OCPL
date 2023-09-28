import React, { useState, useEffect } from "react";
import "./Homepage.css";
import UserCard from "../../components/UserCard/UserCard";
import UsersNotFound from "../../components/UsersNotFound/UsersNotFound";
import { fetchUsersData } from "../../pages/Homepage/action";
import PaginationBar from "../../components/Pagination/PaginationBar";

const Homepage = () => {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const totalPages = Math.ceil(usersData.length / usersPerPage);
  const currPageUsersData = usersData.slice(firstIndex, lastIndex);

  const setPage = (pageNo) => {
    setCurrentPage(pageNo)
  }

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
      const data = await fetchUsersData()
      setUsersData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="homepage-main-container">
        {currPageUsersData.length ? (
          currPageUsersData.map((user) => {
            return <UserCard user={user} />;
          })
        ) : (
          <UsersNotFound />
        )}
      </div>

      <PaginationBar
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setPage}
      />
    </>
  );
};

export default Homepage;
