import React from "react";
import "./paginationNav.css";

const PaginationNav = ({nextPage, prevPage, currentPage, totalPages}) => {
  return (
    <div className="pagination-main-container">
      <ul>
        <li onClick={() => {prevPage()}} className="br prevBtn">&laquo;</li>
        <li className="br">{currentPage} of {totalPages}</li>
        <li onClick={() => {nextPage()}} className="nextBtn">&raquo;</li>
      </ul>
    </div>
  );
};

export default PaginationNav;
