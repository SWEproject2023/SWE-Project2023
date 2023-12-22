// App.js
import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {!isAuthenticated && <Login onLogin={handleLogin} />}
      {isAuthenticated && <Main />}
    </div>
  );
}

export default App;
