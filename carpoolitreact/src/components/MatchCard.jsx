import React from "react";

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
  backgroundColor: "white",
  minimumWidth: "400px",
};

const imageStyle = {
  borderRadius: "50%",
  marginBottom: "10px",
};

const infoStyle = {
  marginBottom: "10px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

const acceptButtonStyle = {
  background: "#4CAF50",
  color: "white",
  padding: "10px 20px",
  margin: "5px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const declineButtonStyle = {
  background: "#f44336",
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
      <img src={picture} alt={`${name}'s picture`} style={imageStyle} />
      <div style={infoStyle}>
        <h3>{name}</h3>
        <p>Seats Available: {seatsAvailable}</p>
        <p>Date: {date}</p>
        <p>Hour: {hour}</p>
        <p>Pickup Location: {pickupLocation}</p>
        <p>Destination: {destination}</p>
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
