import React, { useState } from "react";
import Styles from "./Matches.module.css";
import MatchCard from "../components/MatchCard";

const exampleDriverData = [
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
    id: 1,
    name: "ahmed",
    picture: "https://placekitten.com/150/150", // Replace with the actual picture URL
    seatsAvailable: 2,
    date: "2023-12-25",
    hour: "08:30 AM",
    pickupLocation: "123 Main St",
    destination: "456 Oak Ave",
  },
  {
    id: 1,
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

const Matches = () => {
  const [currentDriverIndex, setCurrentDriverIndex] = useState(0);

  const handleAccept = (driver) => {
    // Handle accepting the ride (e.g., update state, navigate to the next driver, etc.)
    console.log("Accepted ride with", driver.name);
    setCurrentDriverIndex(currentDriverIndex + 1);
  };

  const handleDecline = (driver) => {
    // Handle declining the ride (e.g., show the next driver, etc.)
    console.log("Declined ride with", driver.name);
    setCurrentDriverIndex(currentDriverIndex + 1);
  };

  const currentDriver = exampleDriverData[currentDriverIndex];

  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        {currentDriver ? (
          <MatchCard
            driver={currentDriver}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        ) : (
          <p>No more available drivers.</p>
        )}
      </div>
    </div>
  );
};

export default Matches;
