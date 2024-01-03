import React, { useState, useNavigate } from "react";
import Styles from "./Matches.module.css";
import MatchCard from "../components/MatchCard";
import { Link, Navigate } from "react-router-dom";

export const exampleDriverData = [
  {
    id: 1,
    name: "John Doe",
    picture: "https://placekitten.com/150/150", // Replace with the actual picture URL
    seatsAvailable: 3,
    date: "2023-12-25",
    hour: "08:30 AM",
    pickupLocation: "123 Main St",
    destination: "456 Oak Ave",
    minutesAway: "4 minutes",
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
    minutesAway: "2 minutes",
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
    minutesAway: "1 minutes",
  },
  // Add more example driver data as needed
];

const Matches = () => {
  const [currentDriverIndex, setCurrentDriverIndex] = useState(0);

  const handleDecline = () => {
    setCurrentDriverIndex((currentDriverIndex + 1) % exampleDriverData.length);
  };

  const currentDriver = exampleDriverData[currentDriverIndex];

  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        {currentDriver ? (
          <>
            <MatchCard driver={currentDriver} onDecline={handleDecline} />
          </>
        ) : (
          <p>No more available drivers.</p>
        )}
      </div>
    </div>
  );
};

export default Matches;
