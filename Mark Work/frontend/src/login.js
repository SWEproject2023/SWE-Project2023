import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues(validation(values))
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email" // Added id="email" for the input
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
              onChange={handleInput}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password" // Added id="password" for the input
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Sign Up </strong>
          </button>
          <p>you agree to our terms and policies </p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
