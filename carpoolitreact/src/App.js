// App.js
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Matches from "./pages/Matches";
import Sidebar from "./components/Sidebar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
    <Main />;
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div className="Sidebar">
            <Sidebar />
          </div>
          <div className="App">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Matches" element={<Matches />} />
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
