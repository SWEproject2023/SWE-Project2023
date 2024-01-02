import React from "react";

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  backgroundColor: "white",
  minWidth: "450px",
};
const Info = {
  display: "flex",
  alignItems: "center",
};

const imageStyle = {
  borderRadius: "50%",
  width: "100px",
  height: "100px",
};
const leftPart = {
  marginBottom: "10px",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: "50px",
  paddingLeft: "20px",
  textAlign: "center",
};
const rightPart = {
  marginBottom: "10px",
  alignItems: "flex-start",
  justifyContent: "center",
  textAlign: "left",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

const acceptButtonStyle = {
  background: "#32578F",
  color: "white",
  padding: "10px 20px",
  margin: "5px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const declineButtonStyle = {
  background: "#B21818",
  color: "white",
  padding: "10px 20px",
  margin: "5px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const MatchCard = ({ driver, onAccept, onDecline }) => {
  const {
    name,
    picture,
    seatsAvailable,
    date,
    hour,
    pickupLocation,
    destination,
  } = driver;

  return (
    <div style={cardStyle}>
      <h1>We have found you a match</h1>
      <div style={Info}>
        <div style={leftPart}>
          <img src={picture} alt={`${name}'s picture`} style={imageStyle} />
          <h3>{name}</h3>
        </div>
        <div style={rightPart}>
          <p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_577)">
                <path
                  d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z"
                  fill="black"
                />
              </g>
            </svg>
            <span style={{ color: "black" }}>{date}</span>
          </p>
          <p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM2 11C2 9.8181 2.23279 8.64778 2.68508 7.55585C3.13738 6.46392 3.80031 5.47177 4.63604 4.63604C5.47177 3.80031 6.46392 3.13738 7.55585 2.68508C8.64778 2.23279 9.8181 2 11 2C12.1819 2 13.3522 2.23279 14.4442 2.68508C15.5361 3.13738 16.5282 3.80031 17.364 4.63604C18.1997 5.47177 18.8626 6.46392 19.3149 7.55585C19.7672 8.64778 20 9.8181 20 11C20 13.3869 19.0518 15.6761 17.364 17.364C15.6761 19.0518 13.3869 20 11 20C8.61305 20 6.32387 19.0518 4.63604 17.364C2.94821 15.6761 2 13.3869 2 11ZM12 6C12 5.73478 11.8946 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5C10.7348 5 10.4804 5.10536 10.2929 5.29289C10.1054 5.48043 10 5.73478 10 6V11C10 11.1552 10.0361 11.3084 10.1056 11.4472C10.175 11.5861 10.2758 11.7069 10.4 11.8L14.4 14.8C14.6122 14.9591 14.8789 15.0275 15.1414 14.9899C15.404 14.9524 15.6409 14.8122 15.8 14.6C15.9591 14.3878 16.0275 14.1211 15.99 13.8586C15.9524 13.596 15.8122 13.3591 15.6 13.2L12 10.5V6Z"
                fill="black"
              />
            </svg>
            <span style={{ color: "black" }}>{hour}</span>
          </p>
          <p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_578)">
                <path
                  d="M9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM9.05 17H4.77C5.76 16.5 7.47 16 9 16C9.11 16 9.23 16.01 9.34 16.01C9.68 15.28 10.27 14.68 10.98 14.2C10.25 14.07 9.56 14 9 14C6.66 14 2 15.17 2 17.5V19H9V17.5C9 17.33 9.02 17.16 9.05 17ZM16.5 14.5C14.66 14.5 11 15.51 11 17.5V19H22V17.5C22 15.51 18.34 14.5 16.5 14.5ZM17.71 12.68C18.47 12.25 19 11.44 19 10.5C19 9.12 17.88 8 16.5 8C15.12 8 14 9.12 14 10.5C14 11.44 14.53 12.25 15.29 12.68C15.65 12.88 16.06 13 16.5 13C16.94 13 17.35 12.88 17.71 12.68Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_578">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span style={{ color: "black" }}>{seatsAvailable}</span>
          </p>
          <p>Pickup Location: {pickupLocation}</p>
          <p>Destination: {destination}</p>
        </div>
      </div>
      <div style={buttonContainerStyle}>
        <button style={acceptButtonStyle} onClick={() => onAccept(driver)}>
          Accept Ride
        </button>
        <button style={declineButtonStyle} onClick={() => onDecline(driver)}>
          Decline Ride
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
