import React, { useState, useNavigate } from "react";
import Styles from "./Matches.module.css";
import MatchCard from "../components/MatchCard";
import { Link, Navigate } from "react-router-dom";

export const examplePassengerData = [
  {
    id: 1,
    name: "John Doe",
    picture: "https://placekitten.com/150/150", // Replace with the actual picture URL
    seatsAvailable: 3,
    date: "2023-12-25",
    hour: "08:30 AM",
    pickupLocation: "123 Main St",
    destination: "456 Oak Ave",
  },
  {
    id: 2,
    name: "ahmed",
    picture: "https://placekitten.com/150/150", // Replace with the actual picture URL
    seatsAvailable: 2,
    date: "2023-12-25",
    hour: "08:30 AM",
    pickupLocation: "123 Main St",
    destination: "456 Oak Ave",
  },
  {
    id: 3,
    name: "mohamed",
    picture: "https://placekitten.com/150/150", // Replace with the actual picture URL
    seatsAvailable: 1,
    date: "2023-12-25",
    hour: "08:30 AM",
    pickupLocation: "123 Main St",
    destination: "456 Oak Ave",
  },
  // Add more example driver data as needed
];

const OfferARideMatches = () => {
  const [currentPassengerIndex, setcurrentPassengerIndex] = useState(0);

  const handleDecline = () => {
    console.log(
      "Declined ride with",
      examplePassengerData[currentPassengerIndex].name
    );
    setcurrentPassengerIndex(
      (currentPassengerIndex + 1) % examplePassengerData.length
    );
  };

  const currentPassenger = examplePassengerData[currentPassengerIndex];

  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        {currentPassenger ? (
          <>
            <MatchCard Passenger={currentPassenger} onDecline={handleDecline} />
          </>
        ) : (
          <p>No more available Passengers.</p>
        )}
      </div>
    </div>
  );
};

export default OfferARideMatches;
