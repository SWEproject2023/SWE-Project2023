import React from "react";
import Styles from "./DriverDetails.module.css";
import { useParams } from "react-router-dom";
import { exampleDriverData } from "./Matches";
import map from "../assets/map.jpeg";

const DriverDetails = () => {
  const { id } = useParams();
  const driver = exampleDriverData.find((d) => d.id === parseInt(id));

  return (
    <div className={Styles.container}>
      <div className={Styles.cardStyle}>
        {driver ? (
          <>
            <div>
              <img
                src={driver.picture}
                alt={`${driver.name}'s picture`}
                className={Styles.imageStyle}
              />
              <h2>{driver.name}</h2>
            </div>

            <div className={Styles.datapart}>
              <p>Seats Available: {driver.seatsAvailable}</p>
              <p>Date: {driver.date}</p>
              <p>Hour: {driver.hour}</p>
              <p>Pickup Location: {driver.pickupLocation}</p>
              <p>Destination: {driver.destination}</p>
            </div>
          </>
        ) : (
          <p>No driver details available.</p>
        )}
      </div>
      <div className={Styles.map}>
        <p>Your Ride will be there in {driver.minutesAway}</p>
        <img alt="map" src={map}></img>
      </div>
    </div>
  );
};

export default DriverDetails;
