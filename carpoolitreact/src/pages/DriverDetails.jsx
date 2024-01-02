import React from "react";
import Styles from "./DriverDetails.module.css";
import { useParams } from "react-router-dom";
import { exampleDriverData } from "./Matches";

const DriverDetails = () => {
  const { id } = useParams();
  const driver = exampleDriverData.find((d) => d.id === parseInt(id));

  return (
    <div className={Styles.container}>
      <div className={Styles.cardStyle}>
        {driver ? (
          <div className={Styles.imagepart}>
            <img
              src={driver.picture}
              alt={`${driver.name}'s picture`}
              className={Styles.imageStyle}
            />
            <div className={Styles.datapart}>
              <h2>{driver.name}</h2>
              <p>Seats Available: {driver.seatsAvailable}</p>
              <p>Date: {driver.date}</p>
              <p>Hour: {driver.hour}</p>
              <p>Pickup Location: {driver.pickupLocation}</p>
              <p>Destination: {driver.destination}</p>
            </div>
          </div>
        ) : (
          <p>No driver details available.</p>
        )}
      </div>
    </div>
  );
};

export default DriverDetails;
