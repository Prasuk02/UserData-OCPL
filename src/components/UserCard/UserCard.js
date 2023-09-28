import React, { useState } from "react";
import "./userCard.css";

const UserCard = ({ user }) => {
  const [viewModeBtn, setViewModeBtn] = useState(false);
  const { id, address, company, email, phone, username, website, name } = user;
  return (
    <>
      <div className="user-card-main-container">
        <div className="single-user-data-container">
          <div className="single-detail-container">
            <h4>company name</h4>
            <p>{company.name}</p>
          </div>

          <div className="single-detail-container">
            <h4>Contact</h4>
            <p>{name}</p>
          </div>

          <div className="single-detail-container">
            <h4>city</h4>
            <p>{address.city}</p>
          </div>

          <div className="single-detail-container">
            <h4>website</h4>
            <p className="user-website">https//:{website}</p>
          </div>

          <buttton
            onClick={() => {
              setViewModeBtn(!viewModeBtn);
            }}
            className="view-details-btn"
          >
            view details
          </buttton>
        </div>

        {viewModeBtn && (
          <div className="user-extended-detail-container">
            <h4>Description</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia.
            </p>

            <div className="user-more-details-container">
              <div className="user-more-details">
                <h4>Contact person</h4>
                <p>{name}</p>
              </div>
              <div className="user-more-details">
                <h4>username</h4>
                <p>{username}</p>
              </div>
              <div className="user-more-details">
                <h4>Address</h4>
                <p>{`${address.suite}, ${address.street}, ${address.city}-${address.zipcode}`}</p>
              </div>
              <div className="user-more-details">
                <h4>company</h4>
                <p>{company.name}</p>
              </div>
              <div className="user-more-details">
                <h4>City</h4>
                <p>{address.city}</p>
              </div>
              <div className="user-more-details">
                <h4>email</h4>
                <p>{email}</p>
              </div>
              <div className="user-more-details">
                <h4>website</h4>
                <p>https//:{website}</p>
              </div>
              <div className="user-more-details">
                <h4>phone</h4>
                <p>{phone}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserCard;
