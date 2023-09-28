import React, { useState, useEffect } from "react";
import "./Pagination.css";

const PaginationBar = ({
  nextPage,
  prevPage,
  currentPage,
  totalPages,
  setPage,
}) => {
  const pageCount = new Array(totalPages).fill(3).map((ele, index) => {
    return index + 1;
  })

  return (
    <div className="pagination-main-container">
      <ul>
        <li
          onClick={() => {
            prevPage();
          }}
          className="prevBtn"
        >
          &laquo;
        </li>
        {pageCount?.map((page) => {
          return (
            <li
              onClick={() => {
                setPage(page);
              }}
              className={
                currentPage === page ? "pageNo selectedPage" : "pageNo"
              }
            >
              {page}
            </li>
          );
        })}
        <li
          onClick={() => {
            nextPage();
          }}
          className="nextBtn"
        >
          &raquo;
        </li>
      </ul>
    </div>
  );
};

export default PaginationBar;
