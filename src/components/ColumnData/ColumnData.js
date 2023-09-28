import React from "react";
import "./ColumnData.css";

const ColumnData = ({label, data, className}) => {
  return (
    <div className={className}>
      <h4>{label}</h4>
      <p>{data}</p>
    </div>
  );
};

export default ColumnData;
