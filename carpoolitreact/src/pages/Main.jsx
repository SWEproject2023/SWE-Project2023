import React from "react";
import SideBar from "../components/Sidebar";
import Styles from "./Main.module.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo 1.png";

export default function Main() {
  const navigate = useNavigate(); // Create a navigate function
  const handleBookRide = () => {
    // Add logic for booking a ride
    navigate("/Matches");
    console.log("Booking a ride...");
  };

  const handleOfferRide = () => {
    // Add logic for offering a ride
    console.log("Offering a ride...");
  };

  return (
    <>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="Logo"></div>
      <div className={Styles.mainContainer}>
        <img alt="logo" src={Logo}></img>
        <h2>What do you want to do today?</h2>
        <div className={Styles.card}>
          <div className={Styles.buttonsContainer}>
            <button className={Styles.rideButton} onClick={handleBookRide}>
              Book a Ride
            </button>
            <button className={Styles.driverButton} onClick={handleOfferRide}>
              Offer a Ride
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
