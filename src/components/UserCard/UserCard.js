import React, { useEffect, useState } from "react";
import "./UserCard.css";
import ColumnData from "../ColumnData/ColumnData";

const UserCard = ({ user }) => {
  const [viewModeBtn, setViewModeBtn] = useState(false);
  const { id, address, company, email, phone, username, website, name } = user;
  const mainDataArr = [
    { label: "company name", data: company.name },
    { label: "contact", data: name },
    { label: "city", data: address.city },
    { label: "website", data: website },
  ];

  const DetailedDataArr = [
    { label: "contact person", data: name },
    { label: "username", data: username },
    {
      label: "address",
      data: `${address.suite}, ${address.street}, ${address.city}-${address.zipcode}`,
    },
    { label: "company name", data: company.name },
    { label: "city", data: address.city },
    { label: "email", data: email },
    { label: "website", data: website },
    { label: "phone", data: phone },
  ];

  return (
    <>
      <div className="user-card-main-container">
        <div className="single-user-data-container">
          {mainDataArr.map((data) => {
            return (
              <ColumnData
                label={data.label}
                data={data.data}
                className="single-detail-container"
              />
            );
          })}

          <buttton onClick={() => { setViewModeBtn(!viewModeBtn) }} className="view-details-btn">
            {viewModeBtn ? "hide details" : "view details"}
          </buttton>
        </div>

        {viewModeBtn && (
          <div className="user-extended-detail-container">
            <ColumnData
              label="Description"
              data="Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia."
              className="user-more-details-desc"
            />

            <div className="user-more-details-container">
              {DetailedDataArr.map((data) => {
                return (
                  <ColumnData
                    label={data.label}
                    data={data.data}
                    className="user-more-details"
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserCard;
