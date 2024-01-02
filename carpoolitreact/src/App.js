// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Matches from "./pages/Matches";
import Sidebar from "./components/Sidebar";
import DriverDetails from "./pages/DriverDetails";
import OfferARideMatches from "./pages/matchesOfferRide";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    // Save the authentication status to localStorage
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  // Function to handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.clear("isAuthenticated");
    console.log("loging out");
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div className="Sidebar">
            {/* Pass handleLogout to Sidebar */}
            <Sidebar handleLogout={handleLogout} />
          </div>
          <div className="App">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Matches" element={<Matches />} />
              <Route path="/driver-details/:id" element={<DriverDetails />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
